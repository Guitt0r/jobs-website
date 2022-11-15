import {fetchData} from "../api/api";

const SET_JOBS_SUCCESS = 'jobs/SET_JOBS_SUCCESS'
const SET_PAGE_NUMBER_SUCCESS='jobs/SET_PAGE_NUMBER_SUCCESS'

const initialState = {
    jobs: [],
    pageNumber:1//for pagination
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.jobs
            }
        case SET_PAGE_NUMBER_SUCCESS:
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        default:
            return state
    }
}
export const setJobsSuccess = (jobs) => ({type: SET_JOBS_SUCCESS, jobs})
export const setPageNumberSuccess = (pageNumber) => ({type: SET_PAGE_NUMBER_SUCCESS, pageNumber})

export const getJobs = () => async (dispatch) => {
    const res = await fetchData()
    dispatch(setJobsSuccess(res))
}

export default jobsReducer