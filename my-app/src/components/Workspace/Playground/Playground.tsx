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
};



const Playground:React.FC<PlaygroundProps> = ({problem}) => {    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav />
            <Split className='h-[calc(100vh-94px)] w-full' direction='vertical' sizes={[60, 40]} minSize={[60,60]}>
                <div className='w-full overflow-auto'>
                    <CodeMirror
                    value={problem.starterCode}
                    theme={vscodeDark}
                    extensions={[javascript()]}
                    style={{fontSize:16}}
                    />
                </div>
                <div className='w-full overflow-auto'>
                    <Interviewer />
                </div>
            </Split>
        </div> 
        
    );
}
export default Playground;