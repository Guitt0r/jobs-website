import DetailedTitle from "../../common/DetailedTitle/DetailedTitle";

const AttachedImages = ({pictures}) => {
    return (
        <div className='mt-10 sm:order-none order-2'>
            <DetailedTitle title='Attached images'/>
            <div className='overflow-auto sm:overflow-hidden'>
                <div className='flex gap-1 my-4 min-w-max'>
                    {pictures.map((picture, index) => <img className='object-cover rounded shadow w-52 h-36' key={index}
                                                           src={picture} alt=""/>)}
                </div>
            </div>
        </div>
    )
}
export default AttachedImages