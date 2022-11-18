import {NavLink} from "react-router-dom";
import arrow from "../../../assets/Arrow.svg";
import {FC} from "react";

type Props = {
    path: string
}

const BackToPrevPageButton: FC<Props> = ({path}) => (
    <NavLink className='max-w-max' to={path}>
        <div
            className=' mt-14 hidden sm:flex items-center justify-center gap-3 w-52 h-12 bg-backBtn bg-opacity-10 rounded-md ml-minus6'>
            <img className='object-fill w-2.5 h-4' src={arrow} alt="arrow"/>
            <span className='text-title text-xs uppercase font-bold'>Return to Job Board</span>
        </div>
    </NavLink>
)
export default BackToPrevPageButton