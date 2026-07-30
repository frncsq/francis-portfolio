'use client';

import { useState } from 'react';
import { Github, ChevronDown, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { ProjectPhotosModal } from './project-photos-modal';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  tags: string[];
  github: string;
}

export function ProjectCard({
  title,
  description,
  image,
  images,
  tags,
  github,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPhotosOpen, setIsPhotosOpen] = useState(false);

  const photoList = images && images.length > 0 ? images : image ? [image] : [];

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={toggleExpand}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-border/50 bg-card hover:bg-secondary/30 hover:border-primary/40 transition-all duration-300 group cursor-pointer select-none ${
          isExpanded ? 'border-primary/50 bg-secondary/30 shadow-md ring-1 ring-primary/20' : ''
        }`}
      >
        {image && (
          <div
            className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-lg border border-border/40 bg-muted mt-0.5 group/img"
            onClick={(e) => {
              if (photoList.length > 0) {
                e.stopPropagation();
                setIsPhotosOpen(true);
              }
            }}
            title="Click to view photos"
          >
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isExpanded ? 'scale-105' : 'group-hover:scale-105'
              }`}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
              <ImageIcon className="h-5 w-5 drop-shadow" />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
          <div>
            <div className="flex items-start justify-between mb-1.5 gap-2">
              <h3
                className={`text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight ${
                  isExpanded ? 'break-words' : 'line-clamp-1 sm:line-clamp-2'
                }`}
              >
                {title}
              </h3>
              <div className="flex items-center gap-1 shrink-0 -mt-0.5">
                {photoList.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPhotosOpen(true);
                    }}
                    title="View Photos"
                    aria-label={`View photos of ${title}`}
                    className="p-1.5 text-muted-foreground hover:text-primary rounded-md hover:bg-secondary transition-colors"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </button>
                )}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View on GitHub"
                  aria-label={`View ${title} on GitHub`}
                  className="p-1.5 text-muted-foreground hover:text-primary rounded-md hover:bg-secondary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <div className="p-1 text-muted-foreground">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-primary' : 'group-hover:translate-y-0.5'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Simple description preview (visible when not clicked/expanded) */}
            {!isExpanded && (
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Full details expanded ONLY when clicked */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isExpanded
                ? 'grid-rows-[1fr] opacity-100 mt-2'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 pt-1">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs text-muted-foreground font-medium bg-secondary/80 px-2 py-0.5 rounded-md border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-1 pb-0.5 flex-wrap">
                {photoList.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPhotosOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span>View Photos</span>
                  </button>
                )}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:underline"
                >
                  <span>View Source Code</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectPhotosModal
        isOpen={isPhotosOpen}
        onClose={() => setIsPhotosOpen(false)}
        title={title}
        images={photoList}
      />
    </>
  );
}



