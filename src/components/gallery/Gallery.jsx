import { useState } from 'react'
import { CardsList } from './CardsList/CardsList'
import { Pagination } from '@mui/material'
import { products } from '@/data/products.jsx'
import './Gallery.css'

const Gallery = () => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(Math.ceil(products.length/8));

    const handlePagination = (value) => {
        setPage(value)
    }

    const changeCount = (value) => {
        setCount(() => value)
    }

    return (
        <div className='products'>
            <CardsList page={page} changeCount={changeCount} products={products} />
            <Pagination count={count} variant="outlined" color="primary" className='pagination' page={page} onChange={(e, value) => handlePagination(value)} />
        </div>
    )
}

export default Gallery
