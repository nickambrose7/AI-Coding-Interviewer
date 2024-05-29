'use client';
import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import Interviewer from '../Interviewer/Interviewer';
import { Problem } from '@/utils/types/problem';

type PlaygroundProps = {
    problem: Problem
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    inputText: string;
    showInterviewerResponse: boolean;
    interviewerResponse: string;
    code: string;
    handleCodeChange: (code: string) => void;
    showAsciiDiagram: boolean;
};



const Playground:React.FC<PlaygroundProps> = ({problem, handleInputChange, handleKeyUp, inputText, showInterviewerResponse, 
    interviewerResponse, code, handleCodeChange, showAsciiDiagram}) => {    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav />
            <Split className='h-[calc(100vh-94px)] w-full' direction='vertical' sizes={[60, 40]} minSize={[60,60]}>
                <div className='w-full overflow-auto'>
                    <CodeMirror
                    value={code}
                    theme={vscodeDark}
                    extensions={[javascript()]}
                    style={{fontSize:16}}
                    onChange={(value) => handleCodeChange(value)}
                    />
                </div>
                <div className='w-full overflow-auto'>
                    <Interviewer handleInputChange={handleInputChange} handleKeyUp={handleKeyUp}
                    inputText={inputText} showInterviewerResponse={showInterviewerResponse} interviewerResponse={interviewerResponse}
                    showAsciiDiagram={showAsciiDiagram}
                    />
                </div>
            </Split>
        </div> 
        
    );
}
export default Playground;