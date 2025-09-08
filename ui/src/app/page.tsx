import Header from "@/components/header";

export default async function Home() {
  return (
    <main className="p-4">
      <Header />

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              🚧 Website Currently in Progress
            </p>
            <p className="text-sm text-yellow-600 mt-1">
              This site is under active development. Some features may not be
              fully functional yet.
            </p>
          </div>
        </div>
      </div>

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
      </div>
    </main>
  );
}
