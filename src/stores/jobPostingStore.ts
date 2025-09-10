import { create } from "zustand"
type BasicDetails = {
  file: string
}

type Question = {
  question: string
  type: string
  options?: string[]
  answers?: string[]
}
type JobBasicInfo = {
  roleName: string
  skillsRequired: string[]
  openings: string
}

type WorkType = {
  type: string
  modeOfinteview: string
  workType: string
}

type WorkLocation = {
  city: string
  state: string
  country: string
  transportProvided: boolean
}

export type OffersResponsibilities = {
  rolesResp: string
  training: boolean
  expCertificate: boolean
  stipend: number
  bonus: number
  offer: boolean
  bonusCurrency: string
  stipendCurreny: string
}
type InterviewDetails = {
  interview: string
}
export interface JobPosting {
  basicDetails: BasicDetails
  jobBasicInfo: JobBasicInfo
  workType: WorkType
  workLocation: WorkLocation
  offersResponsibilities: OffersResponsibilities
  interviewDetails: InterviewDetails
  questions: Question[]

  setQuestions: (data: Question[]) => void
  getQuestionsStatus: () => boolean
  setBasicDetails: (data: BasicDetails) => void
  setJobBasicInfo: (data: JobBasicInfo) => void
  setWorkType: (data: WorkType) => void
  setWorkLocation: (data: WorkLocation) => void
  setOffersResponsibilities: (data: OffersResponsibilities) => void
  getBasicDetailsStatus: () => boolean

  getJobBasicInfoStatus: () => boolean
  getWorkTypeStatus: () => boolean
  getWorkLocationStatus: () => boolean
  getOffersResponsibilitiesStatus: () => boolean
  getInterviewState: () => boolean
}

const useJobPosting = create<JobPosting>((set, get) => ({
  basicDetails: {
    file: "",
  },
  jobBasicInfo: {
    roleName: "",
    skillsRequired: [],
    openings: "",
  },
  workType: {
    type: "",
    modeOfinteview: "",
    workType: "",
  },
  workLocation: {
    city: "",
    state: "",
    country: "",
    transportProvided: false,
  },
  offersResponsibilities: {
    rolesResp: "",
    training: false,
    offer: false,
    expCertificate: false,
    stipend: 0,
    bonus: 0,
    bonusCurrency: "",
    stipendCurreny: "",
  },
  interviewDetails: {
    interview: "",
  },
  questions: [],

  setQuestions: (data) =>
    set((state) => ({
      questions: data,
    })),

  getQuestionsStatus: () => {
    const questions = get().questions
    return questions.length > 0 && questions.every((q) => q.question.trim() !== "")
  },
  getBasicDetailsStatus: () => {
    const file = get().basicDetails
    return file.file !== ""
  },
  setBasicDetails: (data) =>
    set((state) => ({
      basicDetails: {
        ...state.basicDetails,
        ...data,
      },
    })),

  setJobBasicInfo: (data) =>
    set((state) => ({
      jobBasicInfo: {
        ...state.jobBasicInfo,
        ...data,
      },
    })),

  setWorkType: (data) =>
    set((state) => ({
      workType: {
        ...state.workType,
        ...data,
      },
    })),

  setWorkLocation: (data) =>
    set((state) => ({
      workLocation: {
        ...state.workLocation,
        ...data,
      },
    })),

  setOffersResponsibilities: (data) =>
    set((state) => ({
      offersResponsibilities: {
        ...state.offersResponsibilities,
        ...data,
      },
    })),

  // getBasicDetailsStatus: () => {
  //   const file= useRegister((state)=>state.selectedFile);
  //   return file !== null;
  // },

  getInterviewState: () => {
    const interview = get().interviewDetails
    return interview.interview !== ""
  },
  getJobBasicInfoStatus: () => {
    const { roleName, skillsRequired, openings } = get().jobBasicInfo
    return roleName !== "" && openings !== "" && skillsRequired.length > 0
  },

  getWorkTypeStatus: () => {
    const workType = get().workType
    return Object.values(workType).every((v) => v !== "")
  },

  getWorkLocationStatus: () => {
    const { city, state, country } = get().workLocation
    return city !== "" && state !== "" && country !== ""
  },

  getOffersResponsibilitiesStatus: () => {
    const { rolesResp, stipend, bonus } = get().offersResponsibilities
    return rolesResp !== ""
  },
}))

export default useJobPosting
