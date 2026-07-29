export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
          About Me
        </h2>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            {/* Profile Photo */}
            <div className="w-32 sm:w-36 md:w-44 max-w-[200px] aspect-square rounded-2xl border border-border/60 bg-card p-2 shadow-sm overflow-hidden">
              <img
                src="/fqdev.jpeg"
                alt="Francis Quintinita"
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am a Full Stack Developer dedicated to crafting robust, high-performance web applications.
              Bridging the gap between clean, engaging user experiences and scalable backend architectures,
              I design solutions that are as intuitive as they are technically sound.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With a passion for technical excellence, I thrive in collaborative environments that push the
              boundaries of modern web technology. I focus on writing maintainable code, optimizing performance,
              and implementing engineering best practices.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My engineering philosophy centers on thorough planning, clear communication, and precise execution,
              ensuring every product delivers outstanding user experiences and business value.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-secondary/30 rounded-lg p-10 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-10">
            Key Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold text-primary mb-3">Frontend</h4>
              <p className="text-muted-foreground">
                HTML, CSS, JavaScript, React, TypeScript
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Backend</h4>
              <p className="text-muted-foreground">
                Node.js, Express, PostgreSQL, REST APIs
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Tools</h4>
              <p className="text-muted-foreground">
                Git, Docker, AWS, Vercel, Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
