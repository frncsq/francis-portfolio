import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

        <p className="text-muted-foreground mb-4 flex-1 leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-[10px] font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5 flex gap-2 border-t border-border pt-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary text-primary hover:bg-primary/10"
          asChild
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
      </div>
    </div>
  );
}
