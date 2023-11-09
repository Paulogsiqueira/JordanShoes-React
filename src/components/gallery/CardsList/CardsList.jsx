import { Link } from 'react-router-dom'
import { products } from '../../../data/products.jsx'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './CardsList.css'

export const CardsList = ({ page, changeCount }) => {
    const [filter, setFilter] = useState('')
    const [productsPage, setProductsPage] = useState([])

    const selectProductsPage = () => {
        if (page == 1) {
            setProductsPage(products.slice(0, 8))
        } else {
            const productIni = 8 * (page - 1);
            const productFin = productIni + 8;
            setProductsPage(products.slice(productIni, productFin));
        }
    }

    useEffect(() => {
        selectProductsPage()
    }, [page])

    useEffect(() => {

    }, [productsPage])

    const handleFilter = () => {
        if (filter != "") {
            const filteredProducts = products.filter((produto) => produto.name.includes(filter));
            setProductsPage(filteredProducts)
            if (filteredProducts.length > 8) {
                changeCount(2)
            } else {
                changeCount(1)
            }
        } else {
            selectProductsPage()
            changeCount(2)
        }
    }

    return (
        <div>
            <div>
                <div className='filter-products'>
                    <label className='filter-label'>
                        Nome do produto
                    </label>
                    <input type="text" className='filter-text' placeholder='Digite o nome do produto que esta buscando' value={filter} onChange={(e) => (setFilter(e.target.value))} />
                    <button className='btn' onClick={handleFilter}>Buscar</button>
                </div>
                <ul className='products-list'>
                    {productsPage.map((product, index) => {
                        const adjustedIndex = page === 1 ? index : index + (8 * (page - 1));
                        return (
                            <li key={index}>
                                <Link to={`/product/${adjustedIndex}`} className="link-no-decoration">
                                    <Card product={product} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
