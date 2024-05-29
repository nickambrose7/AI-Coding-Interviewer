'use client';
import React, { useState } from 'react';
import { IoMicCircle } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

type InterviewerProps = {
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    inputText: string;
    showInterviewerResponse: boolean;
    interviewerResponse: string;
    showAsciiDiagram: boolean;
    swapInterviewerTabs: () => void;
    ascciDiagram: string;
};

const Interviewer: React.FC<InterviewerProps> = ({ handleInputChange, handleKeyUp, inputText, showInterviewerResponse, interviewerResponse,
    showAsciiDiagram, swapInterviewerTabs, ascciDiagram }) => {


    return (
        <div className='mx-4 flex flex-col bg-dark-layer-1 w-13/14 '>
            <div className='flex h-10 items-center space-x-6'>
                {showAsciiDiagram ? (
                    <>
                        <div className='flex h-10 items-center space-x-6'>
                            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                <div className='text-sm font-medium leading-5 text-gray-400' onClick={
                                    swapInterviewerTabs
                                }>Ask your interviewer</div>

                            </div>
                        </div>
                        <div className='flex h-10 items-center space-x-6'>
                            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                <div className='text-sm font-medium leading-5 text-white' onClick={
                                    swapInterviewerTabs
                                }
                                >Draw a diagram</div>
                                <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                            </div>
                        </div>
                    </>
                ) :
                    (
                        <>
                            <div className='flex h-10 items-center space-x-6'>
                                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                    <div className='text-sm font-medium leading-5 text-white' onClick={
                                        swapInterviewerTabs
                                    }
                                    >Ask your interviewer</div>
                                    <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                                </div>
                            </div>
                            <div className='flex h-10 items-center space-x-6'>
                                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                    <div className='text-sm font-medium leading-5 text-gray-400' onClick={
                                        swapInterviewerTabs
                                    }
                                    >Draw a diagram</div>
                                </div>
                            </div>
                        </>
                    )}
            </div>
            {showAsciiDiagram ?
                (
                    <pre className='text-white text-sm p-4'>
                        {ascciDiagram}
                    </pre>

                ) :
                (
                <>
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
                                style={{ minHeight: '150px', maxHeight: '300px' }}
                                value={interviewerResponse}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Interviewer;

