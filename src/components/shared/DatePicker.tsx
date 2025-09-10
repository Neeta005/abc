import * as React from 'react';
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { CalendarIcon } from 'lucide-react';

export const DatePickerFormField = ({ name, label }: { name: string; label?: string }) => {
    const { control } = useFormContext();
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <div className="flex flex-col gap-[18px] text-sm">
                            <Label htmlFor="governmentId">{label}</Label>
                            <div>
                                <Popover
                                    open={isPopoverOpen}
                                    onOpenChange={setIsPopoverOpen}
                                >
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full",
                                                    !field.value &&
                                                    "text-black",
                                                    field.value &&
                                                    "text-black/80",
                                                    "border-[linear-gradient(90deg, #CD2A51 0%, #F05921 100%)]"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? (
                                                    new Date(
                                                        field.value
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                    )
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            captionLayout="dropdown"
                                            defaultMonth={field.value}
                                            selected={field.value ? new Date(field.value) : undefined}
                                            onSelect={(e) => {
                                                field.onChange(e);
                                                setIsPopoverOpen(false);
                                            }}
                                            disabled={(date) =>
                                                date < new Date("1900-01-01")
                                            }
                                            fromYear={1960}
                                            toYear={
                                                new Date().getFullYear() + 30
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                )}
            />
        </>
    );
};