import { useState } from 'react'
import { CardsList } from './CardsList/CardsList'
import './Gallery.css'
import { Pagination } from '@mui/material'

const Gallery = () => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(2)

    const handlePagination = (e) => {
        let newPage = e.target.innerHTML[0]
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