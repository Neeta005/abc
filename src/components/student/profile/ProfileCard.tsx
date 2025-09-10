import { Text } from '@/components/ui/Text';
export default function ProfileCard({
    title,
    date,
    description,
}: {
    title: string;
    date: string;
    description: string;
}) {
    return (
        <div className="bg-shadowSlate rounded-lg p-2 mb-2 shadow flex flex-col relative">
            <div className="flex justify-between items-center mb-">
                <Text as="span" text={title} weight="bold" size="xl" />
                <Text as="span" text={date} className="text-warmOrange text-base font-semibold" />
            </div>
            <Text text={description} className="text-gray-300 text-base" />
        </div>
    );
}
