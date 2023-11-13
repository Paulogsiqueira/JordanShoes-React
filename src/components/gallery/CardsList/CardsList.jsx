import { Link } from 'react-router-dom'
import { products } from '@/data/products.jsx'
import { useState, useRef } from 'react'
import Card from '../Card/Card'
import './CardsList.css'

export const CardsList = ({ page, changeCount }) => {
    const filter = useRef('')
    const [productsPage, setProductsPage] = useState(products)
    const [productsFiltered, setProductsFiltered] = useState()

    changeCount(Math.ceil(productsPage.length / 8))

    const handleFilter = () => {
        if (filter.current.value != "") {
            const filterValue = filter.current.value
            const filteredProducts = products.filter((product) => product.name.includes(filterValue));
            console.log("Filtro preenchido")
            showProductsPage(filteredProducts)
        } else {
            showProductsPage(products)
            console.log("Filtro vazio")
        }
    }

    const showProductsPage = (productFiltered) => {
        if (page == 1) {
            setProductsFiltered(productFiltered.slice(0, 8))
        } else {
            const init = Math.ceil(productFiltered.length / 8) - 1 * 8
            const end = init + 8;
            setProductsFiltered(productFiltered.slice(init, end))
        }

    }

    return (
        <div>
            <div className='filter-products'>
                <label className='filter-label'>
                    Nome do produto
                </label>
                <input type="text" className='filter-text' placeholder='Digite o nome do produto que esta buscando' ref={filter} />
                <button className='btn' onClick={handleFilter}>Buscar</button>
            </div>
            <ul className={`products-list ${productsPage.length > 3 ? '' : 'start'}`}>

                {
                    filter.current.value != "" && filter.current.value != undefined ? (
                        productsFiltered.map((product, index) => {
                            const adjustedIndex = page === 1 ? index : index + (8 * (page - 1));
                            return (
                                <li key={index}>
                                    <Link to={`/product/${adjustedIndex}`} className="link-no-decoration">
                                        <Card product={product} />
                                    </Link>
                                </li>
                            );
                        })
                    ) : (
                        productsPage.map((product, index) => {
                            const adjustedIndex = page === 1 ? index : index + (8 * (page - 1));
                            return (
                                <li key={index}>
                                    <Link to={`/product/${adjustedIndex}`} className="link-no-decoration">
                                        <Card product={product} />
                                    </Link>
                                </li>
                            );
                        })
                    )
                }


            </ul>
        </div>
    )
}
