import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import { Button } from './../../../../../../components/ui/button'; 
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from './../../../../../../utils/GeminiAIModal';
import { UserAnswers } from '../../../../../../utils/schema'
import { useUser } from '@clerk/nextjs';
import { db } from './../../../../../../utils/db';
import moment from 'moment';

function RecordAnswerSection({mockInterviewQuestions, activeQuestionIndex, interviewData}) {
  const [userAnswer, setUserAnswer] = useState('');
  const [lastRecordedResults, setLastRecordedResults] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const handleStopRecording = () => {
    setLastRecordedResults(results.map(result => result.transcript));
  };

  const handleStartRecording = () => {
    setLastRecordedResults([]);
  };

  useEffect(() => {
    const allTranscripts = results.map(result => result.transcript).join(' ');
    setUserAnswer(allTranscripts);
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);

    const feedbackPrompt = "Question:" + mockInterviewQuestions[activeQuestionIndex]?.question +
      ", User Answer:" + userAnswer + ", Depending on the questions and user answers for the given interview questions" +
      "please give us the rating for the user answer in numerical from out of 10 and feedback as area of improvement if any and be a bit strict with rating and feedback" +
      "in just 3 to 5 lines to improve it in JSON format with rating fiedl and feedback field."

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);

      const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
      console.log(MockJsonResp);
      const JsonFeedbackResp = JSON.parse(MockJsonResp);

      const resp = await db.insert(UserAnswers).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestions[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      })

      if (resp) {
        toast('Your answer has been saved successfully'); // Display toast on success
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);

    } catch (error) {
      console.error('Error saving user answer:', error);
      toast.error('Failed to save your answer. Please try again.'); // Display error toast on failure
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col mt-20 justify-center items-center bg-blue-500 rounded-lg p-5 relative">
        <Image src="/webcam.png" width={200} height={200} className="absolute" />
        <Webcam mirrored={true} style={{ height: '100%', width: '100%', zIndex: 10 }} />
      </div>
      <Button
        disabled={loading}
        variant="outline" className="my-10" onClick={StartStopRecording}>
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <StopCircle />
            Stop Recording
          </h2>
        ) : (
          <h2 className='text-blue-500 flex gap-2'><Mic />Record Answer</h2>
        )}
      </Button>

      <ul>
        {lastRecordedResults.map((transcript, index) => (
          <li key={index} style={{ color: '#333', fontSize: '0.2rem', margin: '5px 0' }}>{transcript}</li>
        ))}
        {isRecording && interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}

export default RecordAnswerSection;
