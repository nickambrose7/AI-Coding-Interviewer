'use client';
import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

type PlaygroundProps = {
    
};



const Playground:React.FC<PlaygroundProps> = () => {
    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
            <PreferenceNav />
            <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={[60,60]}>
                <div className='w-full overflow-auto'>
                    <CodeMirror
                    value='const a = 1;'
                    theme={vscodeDark}
                    extensions={[python()]}
                    style={{fontSize:16}}
                    />
                </div>
                <div className='text-white'>
                    Chat box will be here!
                </div>
            </Split>
        </div> 
        
    );
}
export default Playground;