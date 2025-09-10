import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { MessageCircle } from 'lucide-react';
export default function AgentChat() {
    return (
        <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
            <div className="relative mb-2">
                <div className="bg-white rounded-lg px-4 py-2 shadow flex items-center">
                    <Text as="span" className="text-gray-800 text-sm">
                        Hi there{' '}
                        <Text as="span" role="img" aria-label="wave">
                            👋
                        </Text>
                    </Text>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 text-gray-400 hover:text-gray-600 text-lg p-0 h-auto"
                    >
                        ×
                    </Button>
                </div>
            </div>
            <Button className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <MessageCircle className="h-7 w-7 text-white" />
            </Button>
        </div>
    );
}
