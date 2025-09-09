import React from "react";
import Timeline from "../components/ui/timeline/timeline";
import CV from "@/components/ui/cv";

function Work() {
  return (
    <div className="px-4 md:px-[10%] lg:px-[20%]">
      <Timeline
        events={[
          {
            date: "Oct 2024 - Oct 2025",
            title: "Iress (Contract) - Senior Full Stack Engineer",
            description: (
              <>
                <p>
                  Led modernization of XPlan Mortgage Sourcing platform,
                  migrating from Knockout.js to React Remix. Redesigned data
                  models for AWS DynamoDB and implemented C# communication
                  layer. Established containerized development environment with
                  Docker and wrote comprehensive Playwright test suites
                  achieving 90%+ reduction in regression issues.
                </p>
              </>
            ),
          },
          {
            date: "June 2023 - Aug 2023",
            title: "ValueSelling - Full Stack Engineer",
            description: (
              <>
                <p>
                  Collaborated on Sales Learning Management System. Upgraded
                  React 16 to 18, replaced Syncfusion with Ant Design saving
                  $7,000, and developed custom rich text editor. Created
                  PowerPoint print feature generating new revenue streams and
                  implemented Node Express API with OpenAI Assistant
                  integration.
                </p>
              </>
            ),
          },
          {
            date: "Feb 2022 - May 2023",
            title: "Promatica Digital - Full Stack Developer",
            description: (
              <>
                <p>
                  Led frontend development as React expert, mentoring colleagues
                  and building frontend application from scratch. Set up
                  codebase with linting, formatting, and testing configurations.
                  Built consultation application in three weeks and implemented
                  Mantine UI library to improve development time.
                </p>
              </>
            ),
          },
          {
            date: "Apr 2019 - Feb 2022",
            title: "EMIS Health - Full Stack Engineer",
            description: (
              <>
                <p>
                  Developed EMIS-X Medications and Patient Data platforms for
                  NHS professionals. Achieved 100% test coverage ensuring
                  high-quality monthly releases. Contributed to EMIS UI Kit for
                  reusable components and built backend services using AWS,
                  Golang, and DynamoDB maintaining health industry compliance.
                </p>
              </>
            ),
          },
        ]}
      />
      <CV />
    </div>
  );
}

export default Work;
