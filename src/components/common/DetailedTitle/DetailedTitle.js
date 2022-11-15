const DetailedTitle = ({title, children}) => (
    <div>
        <div className='flex items-center justify-between gap-2'>
            <div className='grow text-title text-3xl font-bold'>{title}</div>
            <div className='sm:flex gap-2 hidden'>
                {children}
            </div>
        </div>
        <hr className='mt-2'/>
        <div className='sm:hidden flex gap-2'>
            {children}
        </div>
    </div>

)
export default DetailedTitle


