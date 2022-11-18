import JobsPage from "./pages/JobsPage/JobsPage";
import {Route, Routes} from "react-router-dom";
import DetailedJob from "./components/DetailedJob/DetailedJob";
import JobsBoard from "./components/JobsBoard/JobsBoard";
import {FC} from "react";

type Props = {}

const App: FC<Props> = () => {
    return (
        <div className='text-main'>
            <Routes>
                <Route path='/' element={<JobsPage/>}>
                    <Route path='/detailed-job/:id' element={<DetailedJob/>}/>
                    <Route path='/' element={<JobsBoard/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App