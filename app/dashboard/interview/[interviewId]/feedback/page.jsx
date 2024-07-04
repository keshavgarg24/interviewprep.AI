"use client";

import React, { useEffect,useState } from 'react';
import { db } from '../../../../../utils/db';
import { UserAnswers } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import {Button} from '../../../../../components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '../../../../../components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
  

function Feedback({ params }) {

    const [feedbackList, setFeedbackList] = useState([]);
    const router=useRouter()

    useEffect(() => {
        GetFeedback();
    }, []);

    const GetFeedback = async () => {
        try {
            const result = await db.select()
                .from(UserAnswers)
                .where(eq(UserAnswers.mockIdRef, params.interviewId))
                .orderBy(UserAnswers.id)

            console.log(result);
            setFeedbackList(result);

        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    return (
        <div>

            {feedbackList?.length==0?
                        <h2 className='font-bold text-xl text-gray-600 mt-10'>No Interview Feedback Record found</h2>   
                    :
                    <>
            <h2 className='text-3xl font-bold text-green-500 mt-5'>Congratulations!</h2>
            <h2 className='font-bold text-2xl mt-2'>Here is your interview feedback</h2>
            <h2 className='text-sm text-gray-500'>Find below your score, interview question with correct answer, your answer and feedback for improvement</h2>
            <div className='mb-10'>
            {feedbackList&&feedbackList.map((item, index)=>(
                <Collapsible key={index} className='mt-7'>
                    <CollapsibleTrigger className='p-2 flex justify-between bg-gray-100 rounded-lg my-2 text-left gap-7 w-full'>
                    {item.question}<ChevronsUpDown className='h-5 w-5'/>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                    <div className='flex flex-col gap-2'>
                        <h2 className={`p-2 border rounded-lg ${item.rating > 5 ? 'text-green-500' : 'text-red-500'}`}>
                            <strong>Score:</strong> {item.rating[0]}
                        </h2>
                        <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-800'><strong>Your Answer: </strong>{item.userAns}</h2>
                        <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-800'><strong>Best Answer from AI: </strong>{item.correctAns}</h2>
                        <h2 className='p-2 border rounded-lg bg-yellow-50 text-sm text-yellow-800'><strong>Feedback: </strong>{item.feedback}</h2>
                    </div>
                    </CollapsibleContent>
                </Collapsible>
                ))}
            </div>
            </>}

            <div className='mb-10 mt-10'>
            <Button variant='outline'
            onClick={()=>router.replace('/dashboard')}>Go Home</Button>
            </div>
        </div>
    );
}

export default Feedback;
