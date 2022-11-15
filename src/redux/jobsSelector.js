import {createSelector} from "reselect";

export const selectJobs = state => state.jobs
export const selectPageNumber = state => state.pageNumber

export const selectDetailedJob = (id) => createSelector(selectJobs, jobs => {
    return jobs.find(job => job.id === id)
})