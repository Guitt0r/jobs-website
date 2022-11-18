import {dateConvertor} from "../../../utils/dateConvertor";
import DetailedTitle from "../../common/DetailedTitle/DetailedTitle";
import ApplyButton from "../../common/ApplyButton/ApplyButton";
import JobInfoTitle from "./JobInfoTitle/JobInfoTitle";
import JobInfo from "./JobInfo/JobInfo";
import SaveToList from "../../common/SaveToList/SaveToList";
import Share from "../../common/Share/Share";
import {FC} from "react";

type Props = {
    title: string,
    salary: string,
    description: string,
    createdAt: string
}

const JobDetails: FC<Props> = ({title, salary, description, createdAt}) => {
    const daysAgo = dateConvertor(createdAt)
    return (
        <div className='sm:order-none order-1'>
            <DetailedTitle title='Job Details'>
                <SaveToList/>
                <Share/>
            </DetailedTitle>
            < div className={'mb-8 mt-8 order-last sm:order-none'}>
                <ApplyButton/>
            </div>
            <JobInfoTitle title={title} salary={salary} daysAgo={daysAgo}/>
            <JobInfo description={description}/>
            <div className='mb-8 mt-8 sm:block hidden'>
                <ApplyButton/>
            </div>
        </div>
    )
}
export default JobDetails

