import {createSelector} from "reselect";
import {RootState} from "./store";

export const selectJobs = (state: RootState) => state.job.jobs
export const selectPageNumber = (state: RootState) => state.job.pageNumber
export const selectIsFetching = (state: RootState) => state.job.isFetching

export const selectDetailedJob = (id: string | undefined) => createSelector(selectJobs, jobs => {
    return jobs.find(job => job.id === id) || null
})