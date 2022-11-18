import {FC} from "react";
import preloader from '../../../assets/preloader.svg'

type Props = {}

const Preloader: FC<Props> = () => {
    return (
        <div className='w-fullScreen h-fullScreen flex flex-col justify-center items-center'>
            <img className='animate-spinSlow h-40 w-40' src={preloader} alt="loading..."/>
            <span className='text-4xl'>Loading, please wait</span>
        </div>
    )
}
export default Preloader