import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-gray-200">
      <h1 className="uppercase text-center text-4xl my-8 font-semibold">
        Experience
      </h1>

      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-gray-500 col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">
              EMIS HEALTH - (April 2019-February 2022)
            </h3>
            <p className="leading-tight text-justity">
              <li>Apprentice Developer - April 2019-January 2021</li>
              <li>Junior Software Engineer - January 2021-February 2022</li>
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
          </div>
          <div className="bg-gray-500 col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">
              Promatica Digital - (February 2022-Present)
            </h3>
            <p className="leading-tight text-justify">
              <li>Software Developer - February 2022-Present</li>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around h-auto my-16 px-4">
        <div className="m-6">
          <h1 className="text-center font-semibold text-xl">Front-End</h1>
          React
          <ProgressBar progressPercentage={70} />
          Angular
          <ProgressBar progressPercentage={10} />
          Styling <p className="text-xs">(CSS, TailwindCSS, Modules)</p>
          <ProgressBar progressPercentage={60} />
          Cypress
          <ProgressBar progressPercentage={70} />
          HTML5
          <ProgressBar progressPercentage={100} />
          Javascipt/Typescript
          <ProgressBar progressPercentage={70} />
        </div>
        <div className="m-6">
          <h1 className="text-center font-semibold text-xl">Back-End</h1>
          C#
          <ProgressBar progressPercentage={50} />
          Python
          <ProgressBar progressPercentage={30} />
          Node
          <ProgressBar progressPercentage={60} />
          MongoDB
          <ProgressBar progressPercentage={40} />
          SQL
          <ProgressBar progressPercentage={50} />
          Serverless <p className="text-xs">(AWS, Firebase, Azure)</p>
          <ProgressBar progressPercentage={30} />
        </div>
        <div className="m-6">
          <h1 className="text-center font-semibold text-xl">Other</h1>
          Go
          <ProgressBar progressPercentage={30} />
          DevOps
          <ProgressBar progressPercentage={30} />
          CI/CD
          <ProgressBar progressPercentage={50} />
          Testing <p className="text-xs">(e2e, integration, unit)</p>
          <ProgressBar progressPercentage={50} />
          Operating Systems
          <ProgressBar progressPercentage={40} />
          Network Security
          <ProgressBar progressPercentage={30} />
        </div>
      </div>
    </div>
  );
}
