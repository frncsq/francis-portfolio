import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

        <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 flex gap-3 border-t border-border pt-6">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-primary text-primary hover:bg-primary/10"
          asChild
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>

        <Button
          size="sm"
          className="flex-1 bg-primary hover:bg-primary/90 text-white"
          asChild
        >
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live
          </a>
        </Button>
      </div>
    </div>
  );
}
