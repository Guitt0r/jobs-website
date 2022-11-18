import JobItem from "./JobItem/JobItem";
import {useOutletContext} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import {selectPageNumber} from "../../redux/jobsSelector";
import {FC} from "react";
import {JobType} from "../../types/types";
import {actions} from "../../redux/jobsReducer";
import {useAppDispatch, useAppSelector} from "../../hooks/react-redux-hooks";

type Props = {}

const JobsBoard: FC<Props> = () => {
    const dispatch = useAppDispatch()
    const pageNumber = useAppSelector(selectPageNumber)
    const onPageChange = (page: number) => {
        dispatch(actions.setPageNumberSuccess(page))
    }
    const jobs: Array<JobType> = useOutletContext()
    return (
        <div className='sm:container sm:w-4/5 mx-auto'>
            {jobs.map(job => <JobItem key={job.id} job={job}/>)}
            <div className='sm:w-3/5 mx-auto my-4 '>
                <Pagination totalItemsCount={jobs.length} pageNumber={pageNumber} onPageChange={onPageChange}/>
            </div>
        </div>
    )
}
export default JobsBoard