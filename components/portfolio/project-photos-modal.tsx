'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface ProjectPhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export function ProjectPhotosModal({
  isOpen,
  onClose,
  title,
  images,
}: ProjectPhotosModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-card/95 border border-border/60 rounded-2xl shadow-2xl overflow-hidden text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/40 bg-secondary/30">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-base sm:text-lg truncate max-w-[250px] sm:max-w-md">
              {title}
            </h3>
            {images.length > 1 && (
              <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full font-medium ml-2">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Close photo gallery"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 min-h-[300px] max-h-[65vh] flex items-center justify-center bg-black/40 p-4 sm:p-6 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain rounded-lg shadow-lg select-none transition-all duration-300"
          />

          {/* Previous / Next Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 shadow-lg backdrop-blur-sm transition-transform active:scale-95 focus:outline-none"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 shadow-lg backdrop-blur-sm transition-transform active:scale-95 focus:outline-none"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector Bar (if multiple photos) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 px-4 py-3 border-t border-border/40 bg-secondary/20 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-14 h-14 rounded-md overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-primary ring-2 ring-primary/30 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
