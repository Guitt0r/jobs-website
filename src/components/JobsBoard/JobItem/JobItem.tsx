import {NavLink} from "react-router-dom";
import locationPic from '../../../assets/location.svg'
import {dateConvertor} from "../../../utils/dateConvertor";
import {FC} from "react";
import {JobType} from "../../../types/types";

type Props = {
    job: JobType
}
const JobItem: FC<Props> = ({job}) => {
    const daysAgo = dateConvertor(job.createdAt)
    return (
        <div className=''>
            <NavLink to={`/detailed-job/${job.id}`}>
                <div
                    className='relative m-0.5  max-w-full flex flex-row items-center py-1.5 px-1 gap-2 rounded bg-white shadow-md'>
                    <div className='min-w-max'>
                        <img className='object-fill w-20 h-20  rounded-full' src={job.pictures[0]} alt="company logo"/>
                    </div>
                    <div className='font-bold grow mt-5 sm:mt-0'>
                        <div className='text-title text-xl font-bold'>
                            {job.title}
                        </div>
                        <div className='text-desc text-base font-normal'>
                            Department name
                            <span className='text-desc text-base font-bold'> &middot; </span>
                            {job.address}
                        </div>
                        <div className='flex items-center text-desc text-base font-normal'>
                            <img className='pr-0.5' src={locationPic} alt="location"/>
                            {job.address}
                        </div>
                    </div>
                    <div
                        className='text-right whitespace-nowrap absolute top-1 right-1 sm:static self-start sm:self-end text-desc text-base font-normal'>
                        {
                            daysAgo >= 365
                                ? <span>Posted {Math.floor(daysAgo / 365)} year(s) ago</span>
                                : <span>Posted {daysAgo} day(s) ago</span>
                        }
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default JobItem