"use client"

import React, { useEffect, useState } from 'react'
import { db } from '../../../../utils/db'
import { eq } from 'drizzle-orm'
import { MockInterview } from '../../../../utils/schema'
import Webcam from 'react-webcam'
import { Lightbulb, Webcam as WebcamIcon } from 'lucide-react'
import { Button, buttonVariants } from '../../../../components/ui/button'
import Link from 'next/link'

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null) 
    const [webCamEnabled, setWebCamEnabled] = useState(false)
    
    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails()
    }, [])

    const GetInterviewDetails = async () => {
        try {
            const result = await db
                .select()
                .from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId))

            setInterviewData(result[0])
        } catch (error) {
            console.error('Error fetching interview details:', error)
        }
    }

    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                {webCamEnabled ? (
                    <Webcam 
                        onUserMedia={() => setWebCamEnabled(true)}
                        onUserMediaError={() => setWebCamEnabled(false)}
                        mirrored={true}
                        style={{
                            height: 300,
                            width: 300,
                        }}
                    />
                ) : (
                    <>
                        <WebcamIcon className='h-72 my-7 w-full p-20 bg-secondary rounded-lg border'/>
                <div className='flex justify-center mt-4'>
                    <Button variant="ghost"
                        className='w-full max-w-xs'
                        onClick={() => setWebCamEnabled(true)}
                    >
                        Enable Web Cam and Microphone
                    </Button>
                </div>
                    </>
                )}    
            </div>

            {interviewData ? (
                <div className='flex flex-col my-5 gap-5'>
                    <div className='flex flex-col my-5 gap-5 p-5 round-lg border'>
                    <h2 className='text-lg'><strong>Job role/position: </strong>{interviewData.jobPosition}</h2>
                    <h2 className='text-lg'><strong>Job description: </strong>{interviewData.jobDesc}</h2>
                    <h2 className='text-lg'><strong>Years of experience: </strong>{interviewData.jobExperience}</h2>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-200 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                        <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                    </div>
                </div>
            ) : (
                <div>Loading interview details...</div>
            )}
            </div>

            <div className='flex justify-end items-end'>
                <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                <Button
                className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                >Start Interview</Button>
                </Link>
            </div>

        </div>
    )
}

export default Interview
