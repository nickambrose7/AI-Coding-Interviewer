'use client';
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import EditorFooter from './Playground/EditorFooter';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

type WorkspaceProps = {

};


const Workspace: React.FC<WorkspaceProps> = () => {

    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
            <Split className="split" direction='horizontal' minSize={0}>
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={[60, 60]}>
                    <div className='w-full overflow-auto'>
                        <ProblemDescription />
                    </div>
                    <div className='w-full px-5 overflow-auto'>
                        <div className='w-full  overflow-auto'>
                            {/* testcase heading */}
                            <div className='flex h-10 items-center space-x-6'>
                                <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                                    <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                                    <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                                </div>
                            </div>
                            <div className='flex'>
                                {/* Testcase 1 */}
                                <div className='mr-2 items-start mt-2 text-white'>
                                    <div className='flex flex-wrap items-center gap-y-4'>
                                        <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                                         hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                            Case 1
                                        </div>
                                    </div>
                                </div>
                                {/* Testcase 2 */}
                                <div className='mr-2 items-start mt-2 text-white'>
                                    <div className='flex flex-wrap items-center gap-y-4'>
                                        <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                                         hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                            Case 2
                                        </div>
                                    </div>
                                </div>
                                <button className='my-3'>
                                    <FaPlusCircle size={25} color='lightblue'/>
                                </button>
                            </div>
                        </div>
                        <div className='font-semibold my-4 w-full'>
                            <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                            <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                                nums = [2, 7, 11, 15], target: 9
                            </div>
                        </div>
                        <div className='font-semibold my-4'>
                            <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                            <div className='flex w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 justify-between'>
                                [0, 1]
                                <FaCheckCircle size={25} color='lightgreen' />
                            </div>
                        </div>
                        <div className="flex justify-end items-end">
                            <button
                                className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'
                            >
                                Submit Textcase
                            </button>
                        </div>
                    </div>
                </Split>
                <Playground />
            </Split>
        </div>
    );
}
export default Workspace;