interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/30 hover:border-primary hover:bg-primary/20 transition-colors dark:bg-primary/15 dark:border-primary/40 dark:hover:bg-primary/25">
      {skill}
    </span>
  );
}
