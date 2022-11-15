import DetailedTitle from "../../common/DetailedTitle/DetailedTitle";

const AdditionalInfo = ({employment_type, benefits}) => {
    return (
        <div className='mt-16 sm:order-none order-3'>
            <DetailedTitle title='Additional Info'/>
            <div className='mt-2'>
                Employment type
                <div className='flex gap-2'>
                    {employment_type.map((type,index) => <EmploymentCard key={index} type={type}/>)}
                </div>
            </div>
            <div>
                Benefits
                <div className='flex gap-2'>
                    {benefits.map((benefit,index) => <BenefitCard key={index} benefit={benefit}/>)}
                </div>
            </div>
        </div>
    )
}
export default AdditionalInfo

const EmploymentCard = ({type}) => (
    <div
        className='flex items-center justify-center rounded text-employ font-bold w-56 h-12 border border-employ border-opacity-30 bg-employ bg-opacity-30'>
        {type}
    </div>

)
const BenefitCard = ({benefit}) => (
    <div
        className='flex items-center justify-center rounded text-benefit font-bold w-56 h-12 border border-benefit bg-benefit bg-opacity-20'>
        {benefit}
    </div>

)