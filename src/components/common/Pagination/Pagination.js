import prevArrow from '../../../assets/prevArrow.svg'
import nextArrow from '../../../assets/nextArrow.svg'
import separator from '../../../assets/Separator.svg'
import {useState} from "react";

const Pagination = ({totalItemsCount, pageSize = 1, pageNumber, onPageChange, pageRange = 5}) => {
    const totalPagesCount = Math.ceil(totalItemsCount / pageSize)
    const [startPageNumber, setStartPageNumber] = useState(1)
    const [endPageNumber, setEndPageNumber] = useState(pageRange)
    const pages = []
    for (let i = 1; i <= totalPagesCount; i++)
        pages.push(i)
    let pagesElems = totalPagesCount > (pageRange + 1)
        ? pages.filter(page => page >= startPageNumber && page <= endPageNumber)
        : pages
    pagesElems = pagesElems.map(page => {
        if (page === pageNumber)
            return <span key={page} onClick={() => onPageChange(page)}
                         className='cursor-pointer p-2 text-[#5876C5] border-b-2 border-b-[#5876C5]'>{page}</span>
        else
            return <span key={page} onClick={() => onPageChange(page)} className='cursor-pointer p-2'>{page}</span>
    })
    const onPrevPageClick = () => {
        debugger
        if (pageNumber !== 1) {
            if (pageNumber === startPageNumber) {
                setStartPageNumber(startPageNumber - 1)
                setEndPageNumber(endPageNumber - 1)
            }
            onPageChange(pageNumber - 1)
        }
    }
    const onNextPageClick = () => {
        if (pageNumber < (totalPagesCount)) {
            if (pageNumber === endPageNumber) {
                setStartPageNumber(startPageNumber + 1)
                setEndPageNumber(endPageNumber + 1)
            }
            onPageChange(pageNumber + 1)
        }
    }
    return (
        <div className='bg-white font-bold text-[#70778B] text-xl p-1 shadow-md rounded-lg '>
            <div className='relative flex justify-between items-center gap-2 box-border'>
                <img onClick={onPrevPageClick} className='cursor-pointer opacity-40 mx-4 p-2' src={prevArrow}
                     alt="prevPage"/>
                <img className='my-2 max-h-6' src={separator} alt="separator"/>
                <div>
                    {pagesElems}
                    {totalPagesCount - endPageNumber > 1 && <span className='p-2'>...</span>}

                    {
                        totalPagesCount !== endPageNumber &&
                        totalPagesCount > (pageRange + 1) &&
                        <span onClick={() => {
                            onPageChange(totalPagesCount)
                            setStartPageNumber(totalPagesCount - (pageRange - 1))
                            setEndPageNumber(totalPagesCount)
                        }}
                              className='cursor-pointer p-2'>
                            {totalPagesCount}
                        </span>
                    }
                </div>
                <img className='my-2 max-h-6' src={separator} alt="separator"/>
                <img onClick={onNextPageClick} className='cursor-pointer opacity-40 mx-4 p-2' src={nextArrow}
                     alt="nextPage"/>
            </div>
        </div>
    )
}
export default Pagination