import shareIcon from "../../../assets/shareIcon.svg";
import {FC} from "react";

type Props = {}

const Share: FC<Props> = () => {
    return (
        <div className='flex gap-2'>
            <img src={shareIcon} alt="share"/>
            <div className='text-title text-base font-normal'>Share</div>
        </div>
    )
}
export default Share