'use client';
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';

type WorkspaceProps = {

};

 
const Workspace: React.FC<WorkspaceProps> = () => {

    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
            <Split className="split" direction='horizontal' minSize={0}>
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={[60,60]}>
                    <div className='w-full overflow-auto'>
                        <ProblemDescription />
                    </div>
                    <div className='text-white'>
                        testcases go here!
                    </div>
                </Split>
                <Playground />
            </Split>
        </div>
    );
}
export default Workspace;