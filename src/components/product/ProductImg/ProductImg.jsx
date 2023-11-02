import { products } from '../../../data/products.jsx';
import { useState } from 'react';
import './ProductImg.css'

const ProductImg = (props) => {
    const [ mainImg,setMainImg] = useState(products[props.item].img)



    return (
        <div className='product-img'>
            <div className='product-gallery'>
                <ul>
                    <li>
                        <img src={products[props.item].img} onClick={() => setMainImg(products[props.item].img)} alt="Imagem do modelo selecionado"/>
                    </li>
                    {products[props.item].othersImg.map((image, index) => (
                        <li key={index}>
                            <img src={image} onClick={() => setMainImg(image)}/>
                        </li>
                    ))}
                </ul>
            </div>
            <img className="product-img__main" src={mainImg} alt="Imagem do modelo selecionado" />
        </div>
    )
}

export default ProductImg