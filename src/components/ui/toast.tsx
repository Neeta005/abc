interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  const styles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };
  return (
    <div className={`px-4 py-2 rounded-xl ${styles[type]}`}>{message}</div>
  );
};