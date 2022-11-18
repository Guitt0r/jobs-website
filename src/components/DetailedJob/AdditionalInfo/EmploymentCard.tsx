import {FC} from "react";

type Props = {
    employment_type: string
}

const EmploymentCard: FC<Props> = ({employment_type}) => (
    <div
        className='flex items-center justify-center rounded text-employ font-bold w-56 h-12 border border-employ border-opacity-30 bg-employ bg-opacity-30'>
        {employment_type}
    </div>

)
export default EmploymentCard