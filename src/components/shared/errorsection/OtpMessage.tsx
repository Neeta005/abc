import { Text } from '@/components/ui/Text';
export function OtpMessage({ otpMessage }: { otpMessage: string }) {
    if (!otpMessage) return null;
    return <Text text={otpMessage} className="text-green-400 mt-4 text-center font-semibold" />;
}
