import { Link } from 'react-router-dom'
import { useState, useRef, useEffect} from 'react'
import Card from '../Card/Card'
import './CardsList.css'

export const CardsList = ({ page, changeCount, products }) => {
    const filter = useRef('')
    const [productsFiltered, setProductsFiltered] = useState(products.slice(0, 8));

    const handleFilter = () => {
      const filterCurrentValue = filter.current.value;
      if (filterCurrentValue === ""){
        changeCount(Math.ceil(products.length/8));
        return setProductsFiltered(products.slice((page-1)*8, (page-1)*8 + 8));
      }
      const filtered = products.filter((product) =>
        product.name.includes(filterCurrentValue));

      changeCount(Math.ceil(filtered.length / 8));
      setProductsFiltered(filtered.slice((page-1)*8, (page-1)*8 + 8));
    }

    useEffect(() => {
      handleFilter();
    }, [page]);

    return (
        <div>
            <div className='filter-products'>
                <label className='filter-label'>
                    Nome do produto
                </label>
                <input type="text" className='filter-text' placeholder='Digite o nome do produto que esta buscando' ref={filter} />
                <button className='btn' onClick={handleFilter}>Buscar</button>
            </div>
            <ul className={`products-list ${productsFiltered.length > 3 ? '' : 'start'}`}>
            {productsFiltered?.map((product, index) =>
              <li key={index}>
                <Link to={`/product/${index}`} className="link-no-decoration">
                  <Card product={product} />
                </Link>
              </li>
            )}
            </ul>
        </div>
    )
}