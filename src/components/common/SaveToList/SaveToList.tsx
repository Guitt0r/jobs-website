import saveIcon from "../../../assets/savedIcon.svg";
import {FC} from "react";

type Props = {}

const SaveToList: FC<Props> = () => {
    return (
        <div className='flex gap-2'>
            <img src={saveIcon} alt="save"/>
            <div className='text-title text-base font-normal'>Save to my list</div>
        </div>
    )
}
export default SaveToList