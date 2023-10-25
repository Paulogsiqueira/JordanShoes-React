import './Gallery.css'
import { Link } from 'react-router-dom'
import { products} from '../../data/products.jsx'


const Gallery = () => {

    return (
        <div className='products'>
            <ul className='products-list'>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link to={`/product/${index}`}>
                            <div className='products-item'>
                                <img className='products-img' src={product.img} />
                                <p>{product.name}</p>
                            </div>
                        </Link>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Gallery