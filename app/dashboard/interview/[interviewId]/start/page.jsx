"use client"

import React, { useEffect, useState } from 'react'
import { db } from '../../../../../utils/db'
import { MockInterview } from '../../../../../utils/schema'
import { eq } from 'drizzle-orm'
import QuestionsSection from './_components/QuestionsSection'
import RecordAnswerSection from './_components/RecordAnswerSection'
import {Button} from '../../../../../components/ui/button'
import Link from 'next/link'

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null)
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState([])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

  useEffect(() => {
    GetInterviewDetails()
  }, [])

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId))

      if (result.length > 0) {
        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        console.log('jsonMockResp:', jsonMockResp)

        const questions = jsonMockResp.questions || []  
        console.log('questions:', questions)
        
        setMockInterviewQuestions(questions)
        setInterviewData(result[0])
      }
    } catch (error) {
      console.error('Error fetching interview details:', error)
    }
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <QuestionsSection
        mockInterviewQuestions={mockInterviewQuestions} 
        activeQuestionIndex={activeQuestionIndex}
        />

        <RecordAnswerSection 
        mockInterviewQuestions={mockInterviewQuestions} 
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}
        />

      </div>
  <div className='flex justify-end items-center gap-5 mb-5'  style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
  {activeQuestionIndex > 0 && 
    <Button
      onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Previous Question
    </Button>
  }

  {activeQuestionIndex !== mockInterviewQuestions?.length - 1 &&
    <Button
      onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Next Question
    </Button>
  }

  {activeQuestionIndex === mockInterviewQuestions?.length - 1 &&
    <Link href={'/dashboard/interview/'+interviewData?.mockId+'/feedback'}>
    <Button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      End Interview
    </Button>
    </Link>
  }
</div>

    </div>
  )
}

export default StartInterview
