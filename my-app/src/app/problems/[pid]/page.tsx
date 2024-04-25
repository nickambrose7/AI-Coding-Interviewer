import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import React from 'react';

type ProblemPageProps = {
    params: { pid: string };
};

const ProblemPage: React.FC<ProblemPageProps> = ({ params }) => {

    // to fix error, can't pass function as prop to client components
    problems[params.pid].handlerFunction = problems[params.pid].handlerFunction.toString();
    return <div> 
        <Topbar problemPage/>
        <Workspace problem={problems[params.pid]}/>
    </div>
}
export default ProblemPage;


export async function generateStaticParams() {
    // map over keys of problems object and return an array of objects with params key
    // which is an object with pid key and value of the key
    const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));
   
    return paths;
  }

    
