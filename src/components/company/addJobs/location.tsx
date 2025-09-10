"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import useJobPosting from "@/stores/jobPostingStore"
import { useJobProgressStore } from "@/stores/progressHooks/jobStore"
import { useHandleValueChange } from "@/hooks/useHandleValueChange"
import useHandleBlur from "@/hooks/useHandleBlur"
import type studentRegistration from "@/types/studentRegistration"
import type companyRegistration from "@/types/companyRegistration"
import type { JobPostingProgress } from "@/types/JobPostingProgress"
import { Text } from "@/components/ui/Text"
import { Input } from "@/components/ui/input"

// Main component definition
const Location = () => {
  // Store integration
  const setWorkLocation = useJobPosting((state) => state.setWorkLocation)
  const workLocation = useJobPosting((state) => state.workLocation)
  const { incrementDone: increament, decrementDone: decreament } = useJobProgressStore()

  // Local state
  const [locationState, setLocationState] = useState({
    city: workLocation?.city || "Mumbai",
    state: workLocation?.state || "Maharashtra",
    country: workLocation?.country || "India",
    transportProvided: workLocation?.transportProvided || false,
  })

  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markerRef = useRef<any>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const providerRef = useRef<any>(null)
  const LeafletRef = useRef<any>(null)

  const handleBlur = useHandleBlur(
    increament as (field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress) => void,
  )

  const handleValueChange = useHandleValueChange(
    setWorkLocation,
    decreament as (field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress) => void,
  )

  const handleLocationChange = (field: "city" | "state" | "country", value: string) => {
    setLocationState((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  useEffect(() => {
    const initializeMap = async () => {
      if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) {
        return
      }

      try {
        const L = (await import("leaflet")).default
        const { OpenStreetMapProvider } = await import("leaflet-geosearch")

        LeafletRef.current = L

        const defaultCoords: [number, number] = [19.076, 72.8777] // Mumbai

        console.log("[v0] Initializing map...") // Debug log

        if ((mapRef.current as any)._leaflet_id) {
          delete (mapRef.current as any)._leaflet_id
        }

        // Clear any existing Leaflet classes
        if (mapRef.current.className.includes("leaflet-container")) {
          mapRef.current.className = mapRef.current.className.replace(/leaflet-[^\s]*/g, "").trim()
        }

        await new Promise((resolve) => setTimeout(resolve, 100))

        if (!mapRef.current || !mapRef.current.parentNode) {
          console.log("[v0] Map container no longer valid, aborting initialization")
          return
        }

        mapInstanceRef.current = L.map(mapRef.current).setView(defaultCoords, 12)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(mapInstanceRef.current)

        markerRef.current = L.marker(defaultCoords).addTo(mapInstanceRef.current)

        providerRef.current = new OpenStreetMapProvider()

        console.log("[v0] Map initialized successfully") // Debug log
        setIsMapLoaded(true)
      } catch (error) {
        console.error("[v0] Error initializing map:", error)
        mapInstanceRef.current = null
        markerRef.current = null
        setIsMapLoaded(false)
      }
    }

    const timeoutId = setTimeout(initializeMap, 50)

    return () => {
      clearTimeout(timeoutId)
      if (mapInstanceRef.current) {
        try {
          console.log("[v0] Cleaning up map...") // Debug log
          mapInstanceRef.current.off() // Remove all event listeners
          mapInstanceRef.current.remove() // Remove map instance
        } catch (error) {
          console.error("[v0] Error during map cleanup:", error)
        }
        mapInstanceRef.current = null
        markerRef.current = null
        setIsMapLoaded(false)
      }
    }
  }, [])

  const handleSearch = async (query: string) => {
    if (!query.trim() || !providerRef.current) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    setIsSearching(true)
    try {
      const results = await providerRef.current.search({ query })
      setSearchResults(results.slice(0, 5)) // Limit to 5 results
      setShowSearchResults(true)
    } catch (error) {
      console.error("Search error:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      handleSearch(value)
    }, 300)
  }

  const handleSearchResultSelect = (result: any) => {
    if (!mapInstanceRef.current || !markerRef.current || !mapInstanceRef.current.getContainer()) return

    try {
      const { x, y, label } = result
      const coords: [number, number] = [y, x]

      mapInstanceRef.current.setView(coords, 14)
      markerRef.current.setLatLng(coords)

      const locationParts = label.split(",").map((part: string) => part.trim())
      const city = locationParts[0] || locationState.city
      const state = locationParts[locationParts.length - 2] || locationState.state
      const country = locationParts[locationParts.length - 1] || locationState.country

      const newLocationState = {
        ...locationState,
        city,
        state,
        country,
      }

      setLocationState(newLocationState)

      if (setWorkLocation) {
        setWorkLocation(newLocationState)
      }

      setSearchQuery("")
      setShowSearchResults(false)
      setSearchResults([])
    } catch (error) {
      console.error("[v0] Error updating map from search result:", error)
    }
  }
const updateMapFromInputs = async () => {
  if (
    !isMapLoaded ||
    !providerRef.current ||
    !mapInstanceRef.current ||
    !markerRef.current ||
    !mapInstanceRef.current.getContainer()
  ) {
    return
  }

  const query = `${locationState.city}, ${locationState.state}, ${locationState.country}`

  try {
    setIsSearching(true)
    const results = await providerRef.current.search({ query })

    if (results.length > 0) {
      const result = results[0]
      const { x, y } = result
      const coords: [number, number] = [y, x]

      mapInstanceRef.current.setView(coords, 14)
      markerRef.current.setLatLng(coords)
    }
  } catch (error) {
    console.error("[v0] Geocoding error:", error)
  } finally {
    setIsSearching(false)
  }
}

useEffect(() => {
  if (!isMapLoaded) return

  const timeoutId = setTimeout(() => {
    if (locationState.city && locationState.state && locationState.country) {
      updateMapFromInputs()
    }
  }, 1000)

  return () => clearTimeout(timeoutId)
}, [isMapLoaded, locationState.city, locationState.state, locationState.country])


  const handleTransportToggle = () => {
    const newTransportValue = !locationState.transportProvided
    setLocationState((prev) => ({
      ...prev,
      transportProvided: newTransportValue,
    }))

    if (setWorkLocation) {
      setWorkLocation({
        ...locationState,
        transportProvided: newTransportValue,
      })
    }

    if (newTransportValue) {
      increament("transportProvided")
    } else {
      decreament("transportProvided")
    }
  }

  const zoomIn = () => {
    if (mapInstanceRef.current && mapInstanceRef.current.getContainer()) {
      try {
        mapInstanceRef.current.zoomIn()
      } catch (error) {
        console.error("[v0] Error zooming in:", error)
      }
    }
  }

  const zoomOut = () => {
    if (mapInstanceRef.current && mapInstanceRef.current.getContainer()) {
      try {
        mapInstanceRef.current.zoomOut()
      } catch (error) {
        console.error("[v0] Error zooming out:", error)
      }
    }
  }

  const toggleFullscreen = () => {
    if (mapInstanceRef.current && mapInstanceRef.current.getContainer()) {
      try {
        mapInstanceRef.current.setView([19.076, 72.8777], 12)
      } catch (error) {
        console.error("[v0] Error resetting map view:", error)
      }
    }
  }

  const handleDirectSearch = async (query?: string) => {
    const searchTerm = query || searchQuery
    if (
      !searchTerm.trim() ||
      !providerRef.current ||
      !mapInstanceRef.current ||
      !markerRef.current ||
      !mapInstanceRef.current.getContainer()
    )
      return

    try {
      setIsSearching(true)
      const results = await providerRef.current.search({ query: searchTerm })

      if (results.length > 0) {
        const result = results[0]
        const { x, y, label } = result
        const coords: [number, number] = [y, x]

        mapInstanceRef.current.setView(coords, 14)
        markerRef.current.setLatLng(coords)

        // Update the input fields with the search result
        const locationParts = label.split(",").map((part: string) => part.trim())
        const city = locationParts[0] || locationState.city
        const state = locationParts[locationParts.length - 2] || locationState.state
        const country = locationParts[locationParts.length - 1] || locationState.country

        const newLocationState = {
          ...locationState,
          city,
          state,
          country,
        }

        setLocationState(newLocationState)

        if (setWorkLocation) {
          setWorkLocation(newLocationState)
        }

        // Clear search results
        setShowSearchResults(false)
        setSearchResults([])
      }
    } catch (error) {
      console.error("[v0] Direct search error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleDirectSearch()
    }
  }

  return (
    <div className="mb-8">
      <Text as="h2" text="Interview Location" className="text-white text-[30px] font-bold mb-6" />

      <div className="mb-6">
        <Text as="p" text="Office Location" className="text-white mb-4" />

        <div className="relative mb-4">
          <div className="relative">
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
              placeholder="Search for a location... (Press Enter to search directly)"
              className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 pr-20"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={() => handleDirectSearch()}
                disabled={isSearching || !searchQuery.trim()}
                className="p-1 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                title="Search directly"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {isSearching ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> : null}
            </div>
          </div>

          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-gray-800 border border-gray-600 rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleSearchResultSelect(result)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-700 text-white border-b border-gray-600 last:border-b-0"
                >
                  <div className="font-medium">{result.label}</div>
                </button>
              ))}
            </div>
          )}

          {showSearchResults && searchResults.length === 0 && !isSearching && searchQuery.trim() && (
            <div className="absolute top-full left-0 right-0 bg-gray-800 border border-gray-600 rounded-lg mt-1 px-4 py-3 text-gray-400 z-50">
              No locations found for "{searchQuery}"
            </div>
          )}
        </div>

        <div className="relative mb-6">
          <div className="w-full h-[300px] bg-gray-800 rounded-xl overflow-hidden relative border border-gray-600">
            <div ref={mapRef} className="w-full h-full" style={{ minHeight: "300px" }} />

            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                  <Text as="span" text="Loading map..." className="text-gray-400" />
                </div>
              </div>
            )}

            <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-[1000]">
              <button
                onClick={zoomIn}
                className="w-8 h-8 bg-white rounded border shadow flex items-center justify-center text-gray-700 hover:bg-gray-50"
              >
                +
              </button>
              <button
                onClick={zoomOut}
                className="w-8 h-8 bg-white rounded border shadow flex items-center justify-center text-gray-700 hover:bg-gray-50"
              >
                −
              </button>
              <button
                onClick={toggleFullscreen}
                className="w-8 h-8 bg-white rounded border shadow flex items-center justify-center text-gray-700 hover:bg-gray-50"
              >
                ⤢
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Text as="label" text="City" className="text-white mb-2 block" />
          <Input
            type="text"
            value={locationState.city}
            onChange={(e) => handleLocationChange("city", e.target.value)}
            onBlur={handleBlur}
            placeholder="Enter city"
            className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <Text as="label" text="State" className="text-white mb-2 block" />
          <Input
            type="text"
            value={locationState.state}
            onChange={(e) => handleLocationChange("state", e.target.value)}
            onBlur={handleBlur}
            placeholder="Enter state"
            className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-3"
          />
        </div>
      </div>

      <div className="mb-6">
        <Text as="label" text="Country" className="text-white mb-2 block" />
        <div className="flex gap-2">
          <Input
            type="text"
            value={locationState.country}
            onChange={(e) => handleLocationChange("country", e.target.value)}
            onBlur={handleBlur}
            placeholder="Enter country"
            className="flex-1 bg-transparent border border-gray-600 text-white rounded-lg px-4 py-3"
          />
          <button
            onClick={updateMapFromInputs}
            disabled={isSearching || !locationState.city || !locationState.state || !locationState.country}
            className="px-4 py-3 bg-brand-e05a2b text-white rounded-lg hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
            Update Map
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Text as="span" text="Transported will be provided (within 5 km)" className="text-white" />
        <div className="relative">
          <button
            onClick={handleTransportToggle}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              locationState.transportProvided ? "bg-brand-e05a2b" : "bg-gray-600"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                locationState.transportProvided ? "transform translate-x-6" : "transform translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Location
