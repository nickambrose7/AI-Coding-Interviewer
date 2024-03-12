import { problems } from '@/mockProblems/problems';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

type ProbelmsTableProps = {

};

const ProbelmsTable: React.FC<ProbelmsTableProps> = () => {

    return (
        <tbody className='text-white'>
            {problems.map((doc, idx) => { // use map here to generate the table rows
                const difficultyColor = doc.difficulty === "Easy" ? "text-dark-green-s" : doc.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
                return (
                    <tr className={`${idx % 2 === 0 ? "bg-dark-layer-1" : "bg-dark-layer-2"}`} key={doc.id} >
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={"18"} width={"18"} />
                        </th>
                        <td className='px-6 py-4'>
                            <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${doc.id}`}>
                                {doc.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficultyColor}`}>
                            {doc.difficulty}
                        </td>
                        <td className='px-6 py-4'>
                            {doc.category}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    );
}
export default ProbelmsTable;