import { Problem } from '@/utils/types/problem';
import {useState} from 'react';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

type TestcasesProps = {
    problem: Problem;
};

const Testcases: React.FC<TestcasesProps> = ({problem}) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    const [showInterviewerTestCase, setShowInterviewerTestCase] = useState<boolean>(false);
    // need some state to track if we want the AI generated test case to show

    function addInterviewerTestCase() {
        // add interviewer test case to the problem
        // set the active test case to the interviewer test case
        // set the showInterviewerTestCase to true
    }

    return (
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
                    {problem.examples.map((example, index) => (
                        <div className='mr-2 items-start mt-2 text-gray-500' key={example.id}
                        onClick={() => setActiveTestCaseId(index)}>
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                     hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
                     ${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}>
                                    Case {index + 1}
                                </div>
                            </div>
                        </div>))}
                    {/* add interviewer testcase */}
                    <div className='mr-2 items-start mt-2 text-gray-500' key='add-testcase'
                    onClick={addInterviewerTestCase} 
                    title="This will have the interviewer generate a test case for you. Only use if completely stuck and 
                    you can't come up with a testcase yourself!">
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3
                        hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap text-orange-400`}>
                                Interviewer Testcase
                            </div>
                        </div>
                    </div>

                    <button className='my-3'>
                        <FaPlusCircle size={25} color='lightblue' />
                    </button>
                </div>
            </div>
            <div className='font-semibold my-4 w-full'>
                <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                    {problem.examples[activeTestCaseId].inputText}
                </div>
            </div>
            <div className='font-semibold my-4'>
                <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                <div className='flex w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2 justify-between'>
                    {problem.examples[activeTestCaseId].outputText}
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
        </div>)
}
export default Testcases;