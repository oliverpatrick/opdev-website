import { Alert } from "@/components/ui/common/alert";
import MacTerminal from "@/components/ui/mac-terminal";
import Pill from "@/components/ui/pill/pill";
import TopBar from "@/components/ui/top-bar";

export default async function Home() {
  return (
    <main className="p-4 pt-16">
      {/* <TopBar /> */}
      <Pill test="Hello World" />
      <Alert variant="warning" title="Website Currently in Progress">
        <p className="text-sm text-yellow-600 mt-1">
          This site is under active development. Some features may not be fully
          functional yet.
        </p>
      </Alert>
      <div className="w-full flex justify-center ">
        <MacTerminal />
      </div>
      {/* 
      <div className="my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="space-y-6">
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">Add blog support</h3>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">
                  Add language support
                </h3>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">
                  Improve a11y and Accessibility
                </h3>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">
                  Add storybook and component
                </h3>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">
                  Playwright e2e testing
                </h3>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
              <div className="ml-12 bg-white p-4 rounded-lg shadow-sm border">
                <h3 className="font-medium text-gray-900">
                  User functionality with wordle leaderboard support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
