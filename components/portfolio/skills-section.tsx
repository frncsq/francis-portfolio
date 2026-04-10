import { skillsData } from '@/lib/skills-data';
import { SkillBadge } from './skill-badge';

export function SkillsSection() {
  const skillCategories = [
    { title: 'Frontend', skills: skillsData.frontend },
    { title: 'Backend', skills: skillsData.backend },
    { title: 'Tools & DevOps', skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
