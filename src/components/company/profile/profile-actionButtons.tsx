import React from 'react';
import { MessageSquareText, EyeOff, CircleCheck, Plus, X, Trash2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

interface ProfileActionButtonsProps {
    onShortlist: () => void;
    onNotEligible: () => void;
    onScheduleInterview: () => void;
    onHide: () => void;
    onAddComment: () => void;
}

const ProfileActionButtons = ({
    onShortlist,
    onNotEligible,
    onScheduleInterview,
    onHide,
    onAddComment,
}: ProfileActionButtonsProps) => (
    <div className="flex justify-between max-w-[939px] bg-gunmetalBlue pl-8 pr-8 pb-4 box-border text-white">
        <Button
            variant={'default'}
            className="items-end justify-center hover:bg-inherit hover:opacity-70 border shadow-lg border-transparent"
            onClick={onAddComment}
        >
            <MessageSquareText
                className="text-white inline mr-2  "
                style={{ transform: 'rotateY(180deg)' }}
            />
            <Text text="Add comment" />
        </Button>
        <div className="flex flex-wrap gap-4 mt-6">
            <Button
                variant={'search'}
                className="text-xs font-semibold max-h-[36px]"
                onClick={onShortlist}
            >
                <CircleCheck className="inline mr-3" /> Shortlist
            </Button>
            <Button
                variant={'search'}
                className="text-xs font-semibold max-h-[36px]"
                onClick={onNotEligible}
            >
                <X className="inline mr-3" /> Not Eligible
            </Button>
            <Button
                variant={'search'}
                className="text-xs font-semibold max-h-[36px]"
                onClick={onScheduleInterview}
            >
                <Plus className="inline mr-3" /> Schedule Interview
            </Button>
            <Button
                variant={'search'}
                className="text-xs font-semibold max-h-[36px] bg-transparent text-white shadow-lg border"
                onClick={onHide}
            >
                <EyeOff className="inline mr-3" /> Hide
            </Button>
            <Button variant="default" size="icon" className="shadow-[0px_4px_4px_0px_#00000040]">
                <Trash2 className="text-white" />
            </Button>
        </div>
    </div>
);

export default ProfileActionButtons;
