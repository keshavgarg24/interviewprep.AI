import React from 'react'
import { Button } from '../../../components/ui/button';
import { useRouter } from 'next/navigation';

function InterviewItemCard({interview}) {

    const router=useRouter()
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
    }

  return (
    <div className='bg-gray-100 shadow-sm rounded-lg p-3 mt-5 hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <h2 className='font-bold text-blue-500'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-500'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created at: {interview?.createdAt}</h2>
        <div className='flex justify-between mt-3 gap-5'>


            <Button size="sm" variant="outline" className='w-full'
            onClick={onFeedbackPress}
            >Feedback</Button>


            <Button size="sm" className='bg-blue-500 hover:bg-blue-700 w-full'
            onClick={onStart}
            >Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard