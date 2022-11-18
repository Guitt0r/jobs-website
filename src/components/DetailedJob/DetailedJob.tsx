import {selectDetailedJob} from "../../redux/jobsSelector";
import {useParams} from "react-router-dom";
import JobDetails from "./JobDetails/JobDetails";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import AttachedImages from "./AttachedImages/AttachedImages";
import BackToPrevPageButton from "../common/BackToPrevPageButton/BackToPrevPageButton";
import Contacts from "./Contacts/Contacts";
import {FC} from "react";
import {useAppSelector} from "../../hooks/react-redux-hooks";
import Preloader from "../common/Preloader/Preloader";

type Props = {}

//TODO:Typescript
const DetailedJob: FC<Props> = () => {
    const {id} = useParams()
    const job = useAppSelector(selectDetailedJob(id))
    if (!job) return <Preloader/>
    return (
        <div className='bg-white'>
            <div className='sm:container sm:w-4/5 sm:flex sm:flex-row mx-auto text-title'>
                <div className='sm:w-3/5 flex flex-col px-4 sm:my-14 sm:my-14'>
                    <JobDetails title={job.title} salary={job.salary} description={job.description}
                                createdAt={job.createdAt}/>
                    <AdditionalInfo employment_type={job.employment_type} benefits={job.benefits}/>
                    <AttachedImages pictures={job.pictures}/>
                    <BackToPrevPageButton path='/'/>
                </div>
                <div className='sm:my-14 m-4 grow'>
                    <Contacts {...job.location} email={job.email} phone={job.phone} address={job.address}/>
                </div>
            </div>
        </div>
    )
}


export default DetailedJob