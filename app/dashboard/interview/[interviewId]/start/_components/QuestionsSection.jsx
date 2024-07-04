import { Lightbulb } from 'lucide-react';
import React from 'react'
import { Volume2 } from 'lucide-react';

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  console.log('mockInterviewQuestions:', mockInterviewQuestions);
  console.log('Array.isArray(mockInterviewQuestions):', Array.isArray(mockInterviewQuestions));

  const textToSpeech = (text) => {
    if('speechSynthesis' in window){
        const speech=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
    else{
        alert('Your browser does not support text to speech');
    }
  }

  return mockInterviewQuestions&&(
    <div className='p-5 border rounded-lg my-20'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {Array.isArray(mockInterviewQuestions) && mockInterviewQuestions.length > 0 ? (
          mockInterviewQuestions.map((item, index) => (
            <div key={index} className='mb-4'>
              <h2 className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'bg-black text-white'}`}>Question #{index + 1}</h2>
             
            </div>
          ))
        ) : (
          <p></p>
        )}

        
      </div>
      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestions[activeQuestionIndex]?.question}</h2>
      <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.question)}/>
      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-primary'>
        <Lightbulb style={{ color: 'blue' }} />
            <strong className='text-blue-700'>Note:</strong>
        </h2>
        <h2 className='text-sm text-blue-600 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  )
}

export default QuestionsSection
