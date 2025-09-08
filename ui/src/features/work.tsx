import React from "react";
import Timeline from "../components/ui/timeline/timeline";

function Work() {
  return (
    <div>
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
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Led the development and modernization of a mortgage
                    quotation platform, using React with Remix to deliver a
                    high-performance, scalable user interface.
                  </li>
                  <li>
                    Maintained and extended a communication layer API in C#
                    (.NET 8), integrating seamlessly with internal product
                    sourcing systems and external data storage APIs, reducing
                    response times and enhancing data consistency.
                  </li>
                  <li>
                    Wrote comprehensive end-to-end Playwright test suites,
                    covering all major user journeys including multi-product
                    comparison, second charge selections, and dynamic
                    filtering—contributing to a 90%+ reduction in regression
                    issues during releases.
                  </li>
                  <li>
                    Containerized applications with Docker, ensuring consistent
                    deployment across development, staging, and production
                    environments.
                  </li>
                  <li>
                    Used Pulumi (TypeScript) and Terraform (HCL) to manage cloud
                    infrastructure as code, enabling reproducible infrastructure
                    environments to assist in delivering demos.
                  </li>
                  <li>
                    Gained hands-on experience working within isolated AWS VPC
                    environments, including Subnets, Internet Gateways, Route
                    Tables, ensuring secure and resilient networking setups for
                    sensitive mortgage data workflows.
                  </li>
                  <li>
                    Collaborated with cross-functional teams (QA, DevOps,
                    Product Owners) in Agile Scrum sprints, contributing
                    technical documentation and system design and feedback
                    discussions.
                  </li>
                  <li>
                    Reviewed code and offered improvements to assist in creating
                    a cleaner and more readable codebase.
                  </li>
                  <li>
                    Mentored Junior engineers moving away from KnockoutJS to
                    Remix React.
                  </li>
                </ul>
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
                <ul className="list-disc list-inside mt-2 space-y-1">
                  Collaborated in the creation and maintenance of a Sales
                  Learning Management System (LMS) and Sales methodology
                  platform.
                  <li>
                    Enhanced application performance by upgrading React from
                    version 16 to 18, reducing bundle size, and optimizing
                    library dependencies, enabling seamless integration with
                    Microsoft Dynamics.
                  </li>
                  <li>
                    Spearheaded cost-saving initiatives by replacing Syncfusion
                    with Ant Design, saving $7,000, and developed a custom rich
                    text editor using Tiptap, providing a seamless change to our
                    end users.
                  </li>
                  <li>
                    Created a new PowerPoint print feature based on client
                    feedback, leading to the development of a new sub-product
                    that generated additional revenue streams.
                  </li>
                  <li>
                    Streamlined operations by managing licensing budgets and
                    cutting costs through strategic replacements (e.g., Motion
                    and Adobe XD), reducing expenses while maintaining
                    functionality.
                  </li>
                  <li>
                    Proposed and implemented improvements to the codebase and
                    business processes reducing rollback risk and providing a
                    clear changelog for each release.
                  </li>
                  <li>
                    Designed and implemented a Typescript Node Express API
                    linking the embed application to OpenAI’s Assistant API,
                    enabling real-time AI-driven role plays for sales training,
                    enhancing training outcomes and efficiency.
                  </li>
                </ul>
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
    </div>
  );
}

export default Work;
