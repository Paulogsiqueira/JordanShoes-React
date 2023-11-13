import { useState } from 'react'
import { CardsList } from './CardsList/CardsList'
import { Pagination } from '@mui/material'
import './Gallery.css'

const Gallery = () => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(2)

    const handlePagination = (value) => {
        setPage(value)
    }

    const changeCount = (value) => {
        setCount(value)
    }

    return (
        <div className='products'>
            <CardsList page={page} changeCount={changeCount} count={count} setPage={setPage}/>
            <Pagination count={count} variant="outlined" color="primary" className='pagination' onChange={(e, value) => handlePagination(value)} />
        </div>
    )
}

export default Gallery