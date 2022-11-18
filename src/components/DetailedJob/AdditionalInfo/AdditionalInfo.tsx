import DetailedTitle from "../../common/DetailedTitle/DetailedTitle";
import {FC} from "react";
import EmploymentCard from "./EmploymentCard";
import BenefitCard from "./BenefitCard";

type Props = {
    employment_type: Array<string>,
    benefits: Array<string>
}

const AdditionalInfo: FC<Props> = ({employment_type, benefits}) => {
    return (
        <div className='mt-16 sm:order-none order-3'>
            <DetailedTitle title='Additional Info'/>
            <div className='mt-2'>
                Employment type
                <div className='flex gap-2'>
                    {employment_type.map((type, index) => <EmploymentCard key={index} employment_type={type}/>)}
                </div>
            </div>
            <div>
                Benefits
                <div className='flex gap-2'>
                    {benefits.map((benefit, index) => <BenefitCard key={index} benefit={benefit}/>)}
                </div>
            </div>
        </div>
    )
}
export default AdditionalInfo


