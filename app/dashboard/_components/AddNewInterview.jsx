"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '../../../components/ui/dialog'
  import { Button, buttonVariants } from '../../../components/ui/button'
  import { Input } from '../../../components/ui/input'
  import { Textarea } from '../../../components/ui/textarea'
  import { chatSession } from '../../../utils/GeminiAIModal'
  import { LoaderCircle } from 'lucide-react'
  import { db } from '../../../utils/db'
  import { MockInterview } from '../../../utils/schema'
  import { v4 as uuidv4 } from 'uuid'
  import { useUser } from '@clerk/nextjs'
  import moment from 'moment'
import { useRouter } from 'next/navigation'
  
function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false)
    const [jobPosition, setJobPosition] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobExperience, setJobExperience] = useState('')
    const [loading, setLoading] = useState(false)
    const [jsonResponse, setJsonResponse] = useState([])
    const router = useRouter()
    const { user } = useUser()

    const onSubmit = async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition, jobDescription, jobExperience)

        const InputPrompt="Job position: "+jobPosition+"\nJob description: "+jobDescription+"\nYears of experience: "+jobExperience+", depending on Job position, Job description and Years of experience, give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview questions with answers in JSON format, give questions and answers field in JSON, never return an empty string or array "

        const result = await chatSession.sendMessage(InputPrompt);
        const MockJsonResp = (result.response.text()).replace('```json','').replace('```','')
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp)

        if(MockJsonResp){
            const resp = await db.insert(MockInterview).values({
                mockId: uuidv4(),
                jsonMockResp: MockJsonResp,
                jobPosition: jobPosition,
                jobDesc: jobDescription,
                jobExperience: jobExperience,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-YYYY')
            }).returning({mockId: MockInterview.mockId})

            console.log("INSERTED ID:", resp)
            if(resp){
                setOpenDialog(false)
                router.push('/dashboard/interview/'+resp[0]?.mockId)
            }
        }
        else{
            console.log("Error in generating questions")
        }

        setLoading(false)
    };

    return (
        <div>
            <div className='flex justify-center items-center w-full h-64 p-10 border rounded-lg bg-gray-200 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => setOpenDialog(true)}>
                <h2 className='font-medium text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog}>
                <DialogContent className='max-w-2xl'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Tell us about the interview you want to start</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2>Add details about your job position/role job description and years of experience</h2>
                                    <div className='mt-7 my-3'>
                                        <label>Job role/position</label>
                                        <Input 
                                            placeholder="Ex. Software Developer" 
                                            required
                                            onChange={(e) => setJobPosition(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-7 my-3'>
                                        <label>Job description/tech stack</label>
                                        <Textarea 
                                            placeholder="Ex. React, node, next, vue, java, python etc" 
                                            required
                                            onChange={(e) => setJobDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className='mt-7 my-3'>
                                        <label>Years of experience</label>
                                        <Input 
                                            placeholder="Ex. 2" 
                                            type='number' 
                                            max="60" 
                                            required
                                            onChange={(e) => setJobExperience(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                    <Button type="submit" className='bg-blue-500 hover:bg-blue-700' disabled={loading}>
                                        {loading ?
                                            <>
                                                <LoaderCircle className='animate-spin' />'Generating from AI'
                                            </> : 'Start Interview'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
