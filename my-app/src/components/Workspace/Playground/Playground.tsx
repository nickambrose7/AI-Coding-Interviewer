'use client';
import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import Interviewer from '../Interviewer/Interviewer';

type PlaygroundProps = {
    
};



const Playground:React.FC<PlaygroundProps> = () => {
    const boilerPlate = `def twoSum(nums, target):
    # write your code here`;
    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav />
            <Split className='h-[calc(100vh-94px)] w-full' direction='vertical' sizes={[60, 40]} minSize={[60,60]}>
                <div className='w-full overflow-auto'>
                    <CodeMirror
                    value={boilerPlate}
                    theme={vscodeDark}
                    extensions={[python()]}
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