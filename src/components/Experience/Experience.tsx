import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'

type Props = {}

export default function Experience({}: Props) {
  return (
    <>
    <h1>Experience</h1>
    <div className="flex flex-column justify-between width-full h-auto m-16 px-4">
      <div className='max-w-md'>
        <h1>Front-End</h1>
        React
        <ProgressBar progressPercentage={70} />
        Angular
        <ProgressBar progressPercentage={10} />
        CSS/SCSS
        <ProgressBar progressPercentage={60} />
        TailwindCSS
        <ProgressBar progressPercentage={70} />
        HTML5
        <ProgressBar progressPercentage={100} />
        Javascipt/Typescript
        <ProgressBar progressPercentage={70} />
      </div>
      <div className='max-w-md'> 
        <h1>Back-End</h1>
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
        Serverless (AWS, Firebase, Azure)
        <ProgressBar progressPercentage={30} />
      </div>
      <div className='max-w-md'>
        <h1>Other</h1>
        Go
        <ProgressBar progressPercentage={30} />
        DevOps
        <ProgressBar progressPercentage={30} />
        CI/CD
        <ProgressBar progressPercentage={50} />
        AutoHotKey
        <ProgressBar progressPercentage={50} />
        Operating Systems
        <ProgressBar progressPercentage={40} />
        Network Security
        <ProgressBar progressPercentage={30} />
      </div>
    </div>
    <div>
      <ul>
        <li>EMIS Health - April 2019-February 2022</li>
        <li>Apprentice Developer - April 2019-January 2021</li>
        <li>Junior Software Engineer - January 2021-February 2022</li>
        <br></br>
        <li>Promatica Digital - February 2022-Present</li>
        <li>Software Developer - February 2022-Present</li>
      </ul>
    </div>
    </>
  )
}