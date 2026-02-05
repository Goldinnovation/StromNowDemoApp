

interface FlashbackMessageUtilsProps {
  status: string | null;
  message: string;
  setFlashback: (flashback: boolean) => void;
  setFlashbackStatus: (flashbackStatus: string | null) => void;
  setFlashbackMessage: (flashbackMessage: string) => void;
}

const FlashbackMessageUtils = ({ 
  status,
  message,
  setFlashback,
  setFlashbackStatus,
  setFlashbackMessage,
}: FlashbackMessageUtilsProps) => {
  

  setFlashback(true);
  setFlashbackStatus(status);
  setFlashbackMessage(message);
  setTimeout(() => {
    setFlashback(false);
    setFlashbackMessage('');
    setFlashbackStatus('');
  }, 3000);
};

export default FlashbackMessageUtils;
