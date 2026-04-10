import { experience } from '@/lib/experience-data';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function ExperienceSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="h-5 w-5 text-primary" />;
      case 'education':
        return <GraduationCap className="h-5 w-5 text-primary" />;
      case 'certification':
        return <Award className="h-5 w-5 text-primary" />;
      default:
        return <Briefcase className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
          Experience & Education
        </h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-10 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 bg-primary p-2 rounded-full">
                {getIcon(item.type)}
              </div>

              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[22px] md:left-[28px] top-16 bottom-0 w-0.5 bg-border" />
              )}

              {/* Content */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.period}
                  </span>
                </div>

                <p className="text-primary font-semibold mb-2">
                  {item.organization}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
