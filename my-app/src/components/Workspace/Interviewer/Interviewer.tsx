import React, { useState } from 'react';
import { IoMicCircle } from "react-icons/io5";


type InterviewerProps = {

};

const Interviewer: React.FC<InterviewerProps> = () => {
    const [inputText, setInputText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    }


    const handleSubmit = async () => {
        console.log(inputText);
        setInputText('Type here to ask for a hint or problem constraints....');
    };

    return (
        // heading
        <div className='mx-4 flex flex-col bg-dark-layer-1 w-13/14 '>
            <div className='flex h-10 items-center space-x-6'>
                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                    <div className='text-sm font-medium leading-5 text-white'>Ask your interviewer</div>
                    <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                </div>
            </div>
            <div className='flex w-full space-x-4 mt-2'>
                <button className=''>
                    <IoMicCircle size={57} color='lightblue' />
                </button>
                <textarea
                    className='mr-10 font-normal my-4 w-full cursor-text rounded-lg border px-3 py-[10px]
                     bg-dark-fill-3 border-transparent text-white '
                    style={{ minHeight: '10px', maxHeight: '100px' }}
                    placeholder="Type here to ask for a hint or problem constraints...."
                    value={inputText}
                    onChange={e => handleInputChange(e)}
                    onKeyUp={event => {
                        if (event.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                />
            </div>
        </div>
    );
}
export default Interviewer;