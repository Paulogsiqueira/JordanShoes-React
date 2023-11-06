import './CardsList.css'
import { Link } from 'react-router-dom'
import { products } from '../../../data/products.jsx'
import Card from '../Card/Card'

export const CardsList = ({ page }) => {
    console.log(page)
    let productsPage
    if (page == 1) {
        productsPage = products.slice(0, 8);
    } else{
        let productIni = 8 * (page-1);
        let productFin = productIni + 8 ;
        productsPage = products.slice(productIni, productFin);
    }

    return (
        <div>
            <ul className='products-list'>
                {productsPage.map((product, index) => (
                    <li key={index}>
                        <Link to={`/product/${index}`} className="link-no-decoration">
                            <Card product={product} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
