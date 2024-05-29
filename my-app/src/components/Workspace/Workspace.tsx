'use client';
import React, { useState } from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Testcases from './Testcases/Testcases';


type WorkspaceProps = {
    problem: Problem;
};


const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
    const [inputText, setInputText] = useState<string>(""); // users input text
    const [code, setCode] = useState<string>(problem.starterCode); // users code [javascript]
    const [showInterviewerResponse, setShowInterviewerResponse] = useState<boolean>(false);
    const [interviewerResponse, setInterviewerResponse] = useState<string>("This is the interviewer's response.");
    const [testcaseInput, setTestcaseInput] = useState<string>("waiting...."); // users input text
    const [testcaseOutput, setTestcaseOutput] = useState<string>("waiting...."); // users input text
    const [showAsciiDiagram, setShowAsciiDiagram] = useState<boolean>(true); // determines which tab is active
    const [ascciDiagram, setAsciiDiagram] = useState<string>(`
        5
      /   \\
     3     8
    / \\   / \\
   1   4  6   9
      `); // ascii diagram from gpt-4, need to take into account escape characters when the model returns, will take some tuning. 

    const swapInterviewerTabs = () => {
        setShowAsciiDiagram(!showAsciiDiagram);
        // This function also needs to generate the ascii drawing if necessary. 
    }


    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // this works
        setInputText(e.target.value);
    };

    const handleCodeChange = (value: string) => {
        setCode(value);
    }

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
            setInterviewerResponse(data);
            if (!showInterviewerResponse) setShowInterviewerResponse(true);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setInputText("");  // Clear the textarea
    };

    // This function gets the data from the api route that calls GPT-4
    const fetchData = async (userInput: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: userInput + "this is the code: " + code },

                    ]
                }),
            });
            const data = await response.json();
            // console.log('Data fetched:', data);
            return data;  // Ensure data is always an object
        } catch (error) {
            console.error('Error fetching data:', error);
            return { messages: [] };  // Return an empty messages array on error
        }
    };

    // this function gets the testcase data from the api route that calls GPT-4
    const fetchTestCaseData = async () => {
        try {
            console.log("Problem description:\n" + problem.problemStatement + "\ncode:\n" + code)
            const response = await fetch('http://localhost:3000/api/testcase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [{
                        role: 'user', content:
                            "Problem description:\n" + problem.problemStatement + "\nCode:\n" + code
                    },]
                }),
            });
            const data = await response.json();
            console.log('Data fetched:', data);
            let strArr = data.split("Output:");
            setTestcaseInput(strArr[0]);
            setTestcaseOutput(strArr[1]);
        } catch (error) {
            console.error('Error fetching data:', error);
            return { messages: [] };  // Return an empty messages array on error
        }
    };

    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
            <Split className="split" direction='horizontal' minSize={0}>
                <Split className='h-[calc(100vh-50px)]' direction='vertical' sizes={[60, 40]} minSize={[60, 60]}>
                    <div className='w-full overflow-auto'>
                        <ProblemDescription problem={problem} />
                    </div>
                    <div className='w-full overflow-auto'>
                        <Testcases problem={problem} interviewerInputTestCase={testcaseInput} interviewerOutputTestCase={testcaseOutput}
                            fetchTestCaseData={fetchTestCaseData} />
                    </div>
                </Split>
                <Playground problem={problem} handleInputChange={handleInputChange} handleKeyUp={handleKeyUp}
                    inputText={inputText} showInterviewerResponse={showInterviewerResponse} interviewerResponse={interviewerResponse}
                    code={code} handleCodeChange={handleCodeChange} showAsciiDiagram={showAsciiDiagram} swapInterviewerTabs={swapInterviewerTabs}
                    ascciDiagram={ascciDiagram}
                />
            </Split>
        </div>
    );
}
export default Workspace;