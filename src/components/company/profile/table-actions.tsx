import React from 'react';
import { List, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { ViewToggleProps } from './applicants/ViewToggle';
import { EyeOff, Mail, X, Check } from 'lucide-react';
const TableActions = ({ viewAll, setViewAll, isProfile = false }: ViewToggleProps) => (
    <div
        className={`flex   w-full gap-4 justify-between  ${isProfile ? 'bg-inherit justify-end' : 'bg-richSlateBlue items-center mt-4 '}  p-4 rounded-lg flex-wrap`}
    >
        {!isProfile && (
            <Input
                type="checkbox"
                className="w-[18px] h-[18px] border-2 cursor-pointer border-orange-300 rounded-sm checked:border-orange-400 focus:outline-none"
            />
        )}
        {!isProfile && <Text text="Select all" className="ml-2" />}
        <Button variant={'search'} className="text-xs font-semibold max-h-[36px]">
            <Check className="border w-5 h-5 rounded-full border-white" />
            Shortlist
        </Button>
        <Button variant={'search'} className="text-xs font-semibold max-h-[36px]">
            Schedule Interview
        </Button>
        <Button variant={'search'} className="text-xs font-semibold max-h-[36px]">
            <X />
            Not eligible
        </Button>
        <Button variant={'search'} className="text-xs font-semibold max-h-[36px]">
            <Mail /> Mail
        </Button>
        <Button variant={'search'} className="text-xs font-semibold max-h-[36px]">
            <EyeOff /> Hide
        </Button>
        {!isProfile && (
            <div className="ml-auto flex gap-2">
                <Menu
                    className="text-white text-2xl cursor-pointer"
                    onClick={() => setViewAll(!viewAll)}
                />

                <List className="text-white text-2xl cursor-pointer" />
            </div>
        )}
    </div>
);

export default TableActions;
