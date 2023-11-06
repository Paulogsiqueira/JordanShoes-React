import { useState } from 'react'
import { CardsList } from './CardsList/CardsList'
import './Gallery.css'

const Gallery = () => {
    const [page, setPage] = useState(1)

    return (
        <div className='products'>
            <div className='product gallery'>
                <CardsList page={page} />
            </div>
        </div>
    )
}

export default Gallery