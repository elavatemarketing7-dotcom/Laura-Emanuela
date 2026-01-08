
import React from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/95 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button className="absolute top-8 right-8 text-white text-4xl">&times;</button>
      <img 
        src={imageUrl} 
        className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300" 
        alt="Enlarged result" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
