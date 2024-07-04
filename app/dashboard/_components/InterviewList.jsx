"use client";

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { db } from '../../../utils/db';
import { eq , desc} from 'drizzle-orm';
import { MockInterview } from '../../../utils/schema';
import InterviewItemCrad from './InterviewItemCard';

function InterviewList({params}) {

    const {user}=useUser()
    const [interviewList, setInterviewList] = useState([])

    useEffect(() => {
        if (user) {
            GetInterviewList()
        }
    }, [user])

    const GetInterviewList=async()=>{
        const result = await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id))

        console.log(result)
        setInterviewList(result)
    }

  return (
    <div>
        <div className=' flex justify-center bg-gray-100 rounded-lg'>
        <h2 className='font-bold text-xl'>Previous Mock Interview</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList&&interviewList.map((interview, index)=>(
                <InterviewItemCrad 
                interview={interview}
                key={index}/>
            ))}
        </div>
    </div>
  )
}

export default InterviewList