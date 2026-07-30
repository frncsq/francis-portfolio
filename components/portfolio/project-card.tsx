import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
}: ProjectCardProps) {
  return (
    <a 
      href={github} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex gap-4 p-3 rounded-lg border border-border/50 bg-card hover:bg-secondary/20 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 h-full group"
    >
      {image && (
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-md border border-border/40 bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1 gap-2">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {title}
            </h3>
            <Github className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          
          {/* Compact single-line description by default */}
          <p className="text-muted-foreground text-[12px] leading-relaxed line-clamp-1 group-hover:hidden transition-all duration-200">
            {description}
          </p>
        </div>

        {/* Expandable container on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
          <div className="overflow-hidden">
            <p className="text-muted-foreground text-[12px] leading-relaxed mb-2 pt-1">
              {description}
            </p>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] text-muted-foreground font-medium bg-secondary/80 px-1.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
