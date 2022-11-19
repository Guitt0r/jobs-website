import {fetchData} from "../api/api";
import {JobType} from "../types/types";
import {AppActionTypes, AppThunk} from "./store";


type InitialStateType = {
    jobs: Array<JobType>,
    pageNumber: number,
    isFetching: boolean
}
const initialState: InitialStateType = {
    jobs: [],
    pageNumber: 1,//for pagination
    isFetching: false
}

const jobsReducer = (state = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case 'jobs/SET_JOBS_SUCCESS':
            return {
                ...state,
                jobs: action.jobs,
            }
        case 'jobs/SET_PAGE_NUMBER_SUCCESS':
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case "jobs/TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export const actions = {
    setJobsSuccess: (jobs: Array<JobType>) => ({type: 'jobs/SET_JOBS_SUCCESS', jobs} as const),
    setPageNumberSuccess: (pageNumber: number) => ({type: 'jobs/SET_PAGE_NUMBER_SUCCESS', pageNumber} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'jobs/TOGGLE_IS_FETCHING', isFetching} as const)
}

export const getJobs = (): Thunk => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    const res = await fetchData()
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setJobsSuccess(res))
}

export type Actions = AppActionTypes<typeof actions>
export type Thunk = AppThunk<Actions>

export default jobsReducer