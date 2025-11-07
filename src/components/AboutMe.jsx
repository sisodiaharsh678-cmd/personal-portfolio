import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">
              Passionate web Developer & Tech creator
            </h3>
            <p className="text-muted-foreground">
              I am a full-stack web developer skilled in both frontend and
              backend development. I build responsive, interactive, and
              efficient web applications using technologies like React, Tailwind
              CSS, Node.js, and MongoDB.
            </p>
            <p className="text-muted-foreground">
              I am passionate about turning ideas into real-world applications,
              solving problems, and continuously learning to improve my skills.
              I also enjoy reading, movies, and sports, which keep me balanced
              and creative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Harsh_Prajapati_CV.pdf"
                className="cosmic-button"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Card 1 */}
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p  className="text-muted-foreground text-sm">
                        Building responsive and dynamic websites and web applications using modern technologies.
                    </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p  className="text-muted-foreground text-sm">
                        Designing user-friendly interfaces and experiences that are both visually appealing and easy to navigate.
                    </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-4 card-hover">
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p  className="text-muted-foreground text-sm">
                        Coordinating and managing projects to ensure timely delivery and quality outcomes.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
