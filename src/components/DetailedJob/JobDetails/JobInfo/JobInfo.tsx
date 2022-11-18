import {FC} from "react";

type Props = {
    description: string
}

const JobInfo: FC<Props> = ({description}) => {
    const desc = description.split('Responsopilities:')[0]
    const responsibilities = description.split('Responsopilities:')[1].split('Compensation & Benefits:')[0]
    const compensations = description.split('Responsopilities:')[1].split('Compensation & Benefits:')[1]
    const compensationsElements = compensations.split('.')
    compensationsElements.pop()
    return (
        <div>
            <div className='text-lg'>
                {desc}
            </div>
            <div>
                <h2 className='text-xl font-bold'>Responsibilities</h2>
                {responsibilities}
            </div>
            <div>
                <h2 className='text-xl font-bold'>Compensation & Benefits:</h2>
                <ul className='list-square'>
                    {compensationsElements.map((compensation, index) => <li className='text-desc' key={index}>
                        <span className='text-title'>{compensation}</span></li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default JobInfo