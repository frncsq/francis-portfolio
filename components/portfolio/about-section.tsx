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
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg border-4 border-primary overflow-hidden bg-muted shadow-lg">
                <img
                  src="/profile-photo.jpg"
                  alt="Francis Quintinita"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full stack developer with a strong foundation in
              building web applications. With expertise in both frontend and
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

          <div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Key Skills
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                  <p className="text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS, JavaScript
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Backend</h4>
                  <p className="text-muted-foreground">
                    Node.js, Express, Python, REST APIs, GraphQL
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Database</h4>
                  <p className="text-muted-foreground">
                    PostgreSQL, MongoDB, Firebase, Prisma ORM
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Tools</h4>
                  <p className="text-muted-foreground">
                    Git, Docker, AWS, Vercel, Figma, Linux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
