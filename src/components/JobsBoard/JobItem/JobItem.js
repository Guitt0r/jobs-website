import {NavLink} from "react-router-dom";
import locationPic from '../../../assets/location.svg'
import {dateConvertor} from "../../../utils/dateConvertor";
import {useEffect, useState} from "react";
import axios from "axios";

const JobItem = (job) => {
    const [location, setLocation] = useState(null)
    // useEffect(() => {
    //     //only 1request for 1sec,so it may block request
    //     axios.get(` https://nominatim.openstreetmap.org/search?q=${job.lat},${job.long}&format=json`)
    //         .then(res => setLocation(res.data[0].display_name))
    //         .catch(err => console.log('Nominatim max quota exceeded'))
    // }, [job.lat, job.long])
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
                            {location ? location : job.address}
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