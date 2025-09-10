export interface SuccessDialogProps {
    type: 'success' | 'error';
    title: string;
    message: string;
    primaryButtonText: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    className?: string;
    shref?: string;
    phref?: string;
}
