import React from "react";
import Timeline from "../components/ui/timeline/timeline";
import { Accordion } from "@/components/ui/accordion/accordion";

function Work() {
  return (
    <div className="px-4 md:px-[10%] lg:px-[20%]">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-secondary bg-primary p-4 rounded-b-lg drop-shadow-2xl">
          <div>
            <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
            <ul className="text-sm space-y-1">
              <li>
                <strong>Python:</strong> BeautifulSoup
              </li>
              <li>
                <strong>JavaScript:</strong> React, Redux, Node.js, Express.js,
                Tiptap.js, Recharts.js
              </li>
              <li>
                <strong>React:</strong> Next.js, Remix, Vite, MaterialUI, Ant
                Design, Mantine, PrimeReact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Styling & Infrastructure</h3>
            <ul className="text-sm space-y-1">
              <li>
                <strong>CSS:</strong> Tailwind CSS, Styled Components,
                SCSS/SASS, CSS Modules
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, SQL Server
              </li>
              <li>
                <strong>Cloud:</strong> AWS, Azure
              </li>
              <li>
                <strong>Testing:</strong> Jest, React Testing Library,
                Playwright
              </li>
              <li>
                <strong>Other:</strong> Docker, Git, CI/CD (GitHub Actions),
                REST APIs
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <Accordion
          items={[
            {
              id: "1",
              title: "XPM Mortgage Sourcing",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    React Remix | C# | Docker | AWS
                  </p>
                  <p className="text-sm">
                    Led complete platform modernization, migrating legacy
                    Knockout.js application to React Remix. Redesigned data
                    architecture for AWS DynamoDB and maintained existing C# API
                    layer for seamless mortgage sourcing workflows. Established
                    containerized development environment with Docker for
                    consistent deployments.
                  </p>
                </div>
              ),
            },
            {
              id: "2",
              title: "VSAP (ValueSelling)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    React | Salesforce | PowerFX
                  </p>
                  <p className="text-sm">
                    Developed embedded React applications for Salesforce and
                    Microsoft Dynamics environments. Created flexible,
                    JSON-configurable tools that integrate seamlessly with CRM
                    workflows, enabling sales teams to access ValueSelling
                    methodologies directly within their existing platforms.
                  </p>
                </div>
              ),
            },
            {
              id: "3",
              title: "ValueSelling AI",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Node.js | Express | CosmosDB | OpenAI
                  </p>
                  <p className="text-sm">
                    Built AI-powered roleplay API combining Replicate.ai and GPT
                    technologies for sales training scenarios. Implemented
                    secure client data storage in CosmosDB with comprehensive
                    authentication and authorization layers to protect sensitive
                    sales information.
                  </p>
                </div>
              ),
            },
            {
              id: "4",
              title: "LIO (ValueSelling)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Lightning Web Components | Docebo API
                  </p>
                  <p className="text-sm">
                    Created standalone Salesforce-Docebo integration tool that
                    automates learning management workflows. Significantly
                    reduced administrative overhead by enabling automatic course
                    enrollment and progress tracking between platforms, saving
                    hours of manual work weekly.
                  </p>
                </div>
              ),
            },
            {
              id: "5",
              title: "PRISM (Promatica)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    React | Mantine UI | TailwindCSS | C# | SQL
                  </p>
                  <p className="text-sm">
                    Developed comprehensive analytics dashboard for healthcare
                    providers to identify patients missing from clinical
                    registers. Implemented advanced filtering and reporting
                    capabilities with intuitive Mantine UI components, improving
                    patient care coordination and regulatory compliance.
                  </p>
                </div>
              ),
            },
            {
              id: "6",
              title: "Consult (Promatica)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    React | C# | SQL Server
                  </p>
                  <p className="text-sm">
                    Built end-to-end consultation booking application with
                    real-time availability, automated notifications, and
                    comprehensive appointment management. Integrated with
                    existing healthcare systems to streamline patient scheduling
                    workflows and reduce booking conflicts.
                  </p>
                </div>
              ),
            },
            {
              id: "7",
              title: "Medications Platform (EMIS)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">React | C#</p>
                  <p className="text-sm">
                    Developed modern React frontend for NHS medications
                    management, integrating with legacy EMISWeb API systems.
                    Ensured seamless user experience while maintaining
                    compatibility with existing healthcare infrastructure used
                    by thousands of medical professionals daily.
                  </p>
                </div>
              ),
            },
            {
              id: "8",
              title: "Clinical API (EMIS)",
              content: (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Go | AWS | DynamoDB | CloudWatch
                  </p>
                  <p className="text-sm">
                    Architected secure, scalable backend service for patient
                    record collection and querying. Implemented comprehensive
                    logging with CloudWatch and maintained strict healthcare
                    compliance standards while handling sensitive NHS patient
                    data across multiple healthcare providers.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </section>

      <section className="mb-8">
        <Timeline
          events={[
            {
              date: "Oct 2024 - Oct 2025",
              title: (
                <p>
                  <a
                    href="https://www.iress.com/au/"
                    className="underline hover:text-secondary/80"
                  >
                    Iress (Contract)
                  </a>
                  {" - Senior Full Stack Engineer"}
                </p>
              ),
              description: (
                <>
                  <p>
                    Led modernization of XPlan Mortgage Sourcing platform,
                    migrating from Knockout.js to React Remix. Redesigned data
                    models for AWS DynamoDB and implemented C# communication
                    layer. Established containerized development environment
                    with Docker and wrote comprehensive Playwright test suites
                    achieving 90%+ reduction in regression issues.
                  </p>
                </>
              ),
            },
            {
              date: "June 2023 - Aug 2023",
              title: (
                <p>
                  <a
                    href="https://www.valueselling.com"
                    className="underline hover:text-secondary/80"
                  >
                    ValueSelling
                  </a>
                  {" - Full Stack Engineer"}
                </p>
              ),
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
              title: (
                <p>
                  <a
                    href="https://www.promaticadigital.co.uk/"
                    className="underline hover:text-secondary/80"
                  >
                    Promatica Digital
                  </a>
                  {" - Full Stack Developer"}
                </p>
              ),
              description: (
                <>
                  <p>
                    Led frontend development as React expert, mentoring
                    colleagues and building frontend application from scratch.
                    Set up codebase with linting, formatting, and testing
                    configurations. Built consultation application in three
                    weeks and implemented Mantine UI library to improve
                    development time.
                  </p>
                </>
              ),
            },
            {
              date: "Apr 2019 - Feb 2022",
              title: (
                <p>
                  <a
                    href="https://www.emishealth.com/"
                    className="underline hover:text-secondary/80"
                  >
                    EMIS Health
                  </a>
                  {" - Junior Full Stack Engineer"}
                </p>
              ),
              description: (
                <>
                  <p>
                    Developed EMIS-X Medications and Patient Data platforms for
                    NHS professionals. Achieved 100% test coverage ensuring
                    high-quality monthly releases. Contributed to EMIS UI Kit
                    for reusable components and built backend services using
                    AWS, Golang, and DynamoDB maintaining health industry
                    compliance.
                  </p>
                </>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Work;
