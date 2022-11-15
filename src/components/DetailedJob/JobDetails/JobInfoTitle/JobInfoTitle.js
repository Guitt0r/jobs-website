const JobInfoTitle = ({title, salary, daysAgo}) => (
    <div className='relative flex flex-row font-main text-2xl text-title font-bold gap-16'>
        <div className='mb-16'>
            {title}
        </div>
        <div className='whitespace-nowrap sm:static absolute bottom-0 right-0'>
            &euro; {salary}
            <div className='font-normal text-lg'>Brutto,per year</div>
        </div>
        <div className='absolute bottom-8  text-base text-desc font-normal'>
            {
                daysAgo >= 365
                    ? <span>Posted {Math.floor(daysAgo / 365)} year(s) ago</span>
                    : <span>Posted {daysAgo} day(s) ago</span>
            }
        </div>
    </div>
)
export default JobInfoTitle