import { useState } from 'react';
import { FileText, Image, Type } from 'lucide-react';
import PasteModal from './PasteModal';

export default function UploadSection() {
  const [showPasteModal, setShowPasteModal] = useState(false);

  return (
    <>
      <div className="bg-card/80 backdrop-blur rounded-xl p-8 shadow-lg border border-border">
        <h3 className="text-xl font-semibold mb-4">Upload Your Data</h3>
        <div className="flex justify-center items-center gap-4 p-2 border border-border rounded-lg bg-muted/50">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-lg transition-all">
            <Image className="w-5 h-5" />
            <span>Image</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-lg transition-all">
            <FileText className="w-5 h-5" />
            <span>Text Doc</span>
          </button>
          <button
            onClick={() => setShowPasteModal(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-lg transition-all"
          >
            <Type className="w-5 h-5" />
            <span>Plain Text</span>
          </button>
        </div>
      </div>
      <PasteModal
        isOpen={showPasteModal}
        onClose={() => setShowPasteModal(false)}
      />
    </>
  );
}
