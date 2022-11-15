import JobItem from "./JobItem/JobItem";
import {useOutletContext} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageNumberSuccess} from "../../redux/jobsReducer";
import {selectPageNumber} from "../../redux/jobsSelector";

const JobsBoard = () => {
    const dispatch = useDispatch()
    const pageNumber = useSelector(selectPageNumber)
    const onPageChange = (page) => {
        dispatch(setPageNumberSuccess(page))
    }
    const jobs = useOutletContext()
    return (
        <div className='sm:container sm:w-4/5 mx-auto'>
            {jobs.map(job => <JobItem key={job.id} {...job}/>)}
            <div className='sm:w-3/5 mx-auto my-4 '>
                <Pagination totalItemsCount={jobs.length} pageNumber={pageNumber} onPageChange={onPageChange}/>
            </div>
        </div>
    )
}
export default JobsBoard