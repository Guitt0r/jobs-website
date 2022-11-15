import {useEffect} from "react";
import {getJobs} from "../../redux/jobsReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectJobs} from "../../redux/jobsSelector";
import {Outlet} from "react-router-dom";

const JobsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getJobs())
    }, [])
    const jobs = useSelector(selectJobs)
    if (!jobs) return <div>loading...</div>
    return (
       <Outlet context={jobs}/>
    )
}
export default JobsPage