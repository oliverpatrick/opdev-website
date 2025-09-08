"use client";

import React from "react";
import MacTerminal from "../../components/ui/mac-terminal";
import { Alert } from "../../components/ui/common/alert";

function Me() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <MacTerminal />

      <Alert title="Missing section!" variant="info">
        This is section will contain blog posts in the future...
      </Alert>

      <div className="max-w-3xl mx-auto ">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h1>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p className="text-lg">
              👋 Hey there! I&apos;m a 30-year-old senior software engineer with
              a passion for building great software and tinkering with
              technology.
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
                  When I&apos;m not coding, you&apos;ll find me gaming or
                  working on DIY projects. I love building things with my hands
                  as much as I do with code.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center italic">
                Always learning, always building, always curious about
                what&apos;s next in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
