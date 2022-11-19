import {FC, useEffect} from "react";
import {getJobs} from "../../redux/jobs-reducer";
import {selectIsFetching, selectJobs} from "../../redux/jobs-selector";
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/react-redux-hooks";
import Preloader from "../../components/common/Preloader/Preloader";

type Props = {}

const JobsPage: FC<Props> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getJobs())
    }, [])
    const jobs = useAppSelector(selectJobs)
    const isFetching = useAppSelector(selectIsFetching)
    if (isFetching) return <Preloader/>
    return (
        <Outlet context={jobs}/>
    )
}
export default JobsPage