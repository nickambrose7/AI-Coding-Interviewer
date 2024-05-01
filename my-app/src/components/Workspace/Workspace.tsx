'use client';
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Testcases from './Testcases/Testcases';


type WorkspaceProps = {
    problem: Problem;
};


const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {

    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
            <Split className="split" direction='horizontal' minSize={0}>
                <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={[60, 60]}>
                    <div className='w-full overflow-auto'>
                        <ProblemDescription problem={problem} />
                    </div>
                    <div className='w-full overflow-auto'>
                        <Testcases problem={problem} />
                    </div>
                </Split>
                <Playground problem={problem} />
            </Split>
        </div>
    );
}
export default Workspace;