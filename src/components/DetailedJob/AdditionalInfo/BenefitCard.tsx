import {FC} from "react";

type Props = {
    benefit: string
}

const BenefitCard: FC<Props> = ({benefit}) => (
    <div
        className='flex items-center justify-center rounded text-benefit font-bold w-56 h-12 border border-benefit bg-benefit bg-opacity-20'>
        {benefit}
    </div>

)
export default BenefitCard