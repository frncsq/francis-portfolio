export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            {/* Profile Photo */}
            <div className="mb-8 md:mb-0 flex justify-center md:justify-start">
              <div className="w-48 md:w-72 rounded-lg border-4 border-primary overflow-hidden bg-muted shadow-lg">
                <img
                  src="/fqdev.jpeg"
                  alt="Francis Quintinita"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full stack developer with a strong foundation in
              building modern web applications. With expertise in both frontend and
              backend technologies, I create seamless, user-centric solutions
              that solve real problems.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              I love learning new technologies, collaborating with teams, and
              pushing the boundaries of what's possible on the web. When I'm not
              coding, you can find me contributing to open-source projects or
              exploring the latest web development trends.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My approach is problem-solving first. I focus on understanding
              requirements deeply, planning thoroughly, and executing cleanly
              to deliver solutions that exceed expectations.
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
