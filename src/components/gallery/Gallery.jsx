import { useState } from 'react'
import { CardsList } from './CardsList/CardsList'
import { Pagination } from '@mui/material'
import './Gallery.css'

const Gallery = () => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(2)

    const handlePagination = (e) => {
        const newPage = e.target.innerHTML[0]
        setPage(newPage)
    }

    const changeCount  = (value) => {
        setCount(value)
    }

    return (
        <div className='products'>
            <div className='gallery'>
                <CardsList page={page} changeCount={changeCount} />
                <Pagination count={count} variant="outlined" color="primary" className='pagination' onChange={(e) => (handlePagination(e))} />
            </div>
        </div>
    )
}

export default Gallery