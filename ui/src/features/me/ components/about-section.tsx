import React from "react";

function AboutSection() {
  return (
    <div className="max-w-3xl mx-auto ">
      <div className="bg-primary dark:bg-secondary rounded-b-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-secondary dark:text-primary">
          About Me
        </h1>

        <div className="space-y-4 text-secondary dark:text-primary">
          <p className="text-lg">
            👋 Hey there! I&apos;m Oli, a Senior Software Engineer with a
            passion for building great software and tinkering with technology.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                What I Do
              </h2>
              <p>
                As a senior software engineer, I love solving complex problems
                and mentoring other developers. I&apos;m always exploring new
                technologies and best practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Open Source
              </h2>
              <p>
                I&apos;m passionate about contributing to open-source projects
                and believe in the power of collaborative development to make
                technology better for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Home Lab
              </h2>
              <p>
                My home lab is my playground - from self-hosted services to
                experimenting with containerization, networking, and
                infrastructure automation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Gaming & DIY
              </h2>
              <p>
                When I&apos;m not coding, you&apos;ll find me gaming or working
                on DIY projects. I love building things with my hands as much as
                I do with code.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-secondary dark:border-primary">
            <p className="text-center italic">
              Always learning, always building, always curious about what&apos;s
              next in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
