import React from 'react';
import { IoMicCircle } from "react-icons/io5";


type InterviewerProps = {

};

const Interviewer: React.FC<InterviewerProps> = () => {

    return (
        // heading
        <div className='mx-4 flex flex-col bg-dark-layer-1 '>
            <div className='flex h-10 items-center space-x-6'>
                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                    <div className='text-sm font-medium leading-5 text-white'>Ask your interviewer</div>
                    <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                </div>
            </div>
            <div className='flex items-center space-x-4 '>
                <IoMicCircle size={50} color='lightblue' />
                <div className='font-normal my-4'>
                    <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                        Type here to ask for a hint or problem constraints.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Interviewer;