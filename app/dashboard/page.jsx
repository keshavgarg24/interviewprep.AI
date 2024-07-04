import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import Image from 'next/image'

function Dashboard() {
  return (
    <div>
      <div className='fixed inset-0 z-[-10]'>
        <Image 
          src='/grid.svg' 
          layout='fill'
          objectFit='cover'
          alt="Grid Background" 
        />
      </div>
      <div className='p-10 relative z-10'>
        <h2 className='inline-block bg-blue-100 text-sm text-blue-600 mb-4 p-2 rounded-xl'>
          #interviewprep.AI - powered by GEMINI
        </h2>
        <h1 className='font-black text-5xl mb-4'>
          Ready to start mastering your interview skills?
        </h1> 
        <h2 className='text-gray-600 mb-8'>
          Practice job interview questions tailored to your job description. Get instant AI feedback and suggestions to improve your answers. Click ADD NEW below to create and start your AI mock Interview.
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
          <AddNewInterview/>
        </div>
        <InterviewList/>
      </div>
    </div>
  )
}

export default Dashboard

