'use client';
import React, { useState } from 'react';
import { IoMicCircle } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

const Interviewer: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [showInterviewerResponse, setShowInterviewerResponse] = useState<boolean>(true);
    const [interviewerResponse, setInterviewerResponse] = useState<string>("This is the interviewer's response.");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // this works
        setInputText(e.target.value);
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();  // This prevents adding a new line on pressing Enter
            handleSubmit();
        }
    };


    const handleSubmit = async () => {
        if (inputText.trim() === "") return; // Prevents submitting empty strings
        try {
            const data = await fetchData(inputText);
            console.log("setting the interviewer response")
            setInterviewerResponse(data);
            if (!showInterviewerResponse) setShowInterviewerResponse(true);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setInputText("");  // Clear the textarea
    };
    

    const fetchData = async (userInput: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: [{ role: 'system', content: userInput }] }),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            return data;  // Ensure data is always an object
        } catch (error) {
            console.error('Error fetching data:', error);
            return { messages: [] };  // Return an empty messages array on error
        }
    };

    return (
        <div className='mx-4 flex flex-col bg-dark-layer-1 w-13/14 '>
            <div className='flex h-10 items-center space-x-6'>
                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                    <div className='text-sm font-medium leading-5 text-white'>Ask your interviewer</div>
                    <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                </div>
            </div>
            <div className='flex w-full space-x-4 mt-2'>
                <button>
                    <IoMicCircle size={57} color='lightblue' />
                </button>
                <textarea
                    className='mr-10 font-normal my-4 w-full cursor-text rounded-lg border px-3 py-[10px]
                     bg-dark-fill-3 border-transparent text-white'
                    style={{ minHeight: '75px', maxHeight: '100px' }}
                    placeholder="Type here to ask for a hint or problem constraints...."
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                />
            </div>
            {showInterviewerResponse && (
                <div className='flex w-full space-x-4'>
                    <FaRobot size={57} color='orange' />
                    <textarea
                        className='mr-10 font-normal my-4 w-full  cursor-text rounded-lg border px-3 py-[10px]
                     bg-dark-fill-3 border-transparent text-white'
                        style={{ minHeight: '100px', maxHeight: '300px' }}
                        value={interviewerResponse}
                    />
                </div>
            )}
        </div>
    );
};

export default Interviewer;

