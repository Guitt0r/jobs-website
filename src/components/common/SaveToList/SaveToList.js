import saveIcon from "../../../assets/savedIcon.svg";

const SaveToList = () => {
    return (
        <div className='flex gap-2'>
            <img src={saveIcon} alt="save"/>
            <div className='text-title text-base font-normal'>Save to my list</div>
        </div>
    )
}
export default SaveToList