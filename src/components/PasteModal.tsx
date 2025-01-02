import { useEffect } from 'react';

interface PasteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PasteModal({ isOpen, onClose }: PasteModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card w-full max-w-2xl rounded-2xl shadow-lg border border-border animate-in fade-in slide-in-from-bottom-4">
        <div className="border-b border-border p-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Paste Your Text
          </h2>
        </div>
        
        <div className="p-6">
          <textarea
            className="w-full h-64 bg-muted/50 border border-border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Paste your text here..."
            autoFocus
          />
        </div>
        
        <div className="border-t border-border p-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition"
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
}