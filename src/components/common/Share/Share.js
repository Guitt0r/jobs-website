import shareIcon from "../../../assets/shareIcon.svg";

const Share = () => {
    return (
        <div className='flex gap-2'>
            <img src={shareIcon} alt="share"/>
            <div className='text-title text-base font-normal'>Share</div>
        </div>
    )
}
export default Share