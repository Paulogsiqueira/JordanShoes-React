import { products } from '../../../data/products.jsx';
import { useState } from 'react';
import './ProductImg.css'

const ProductImg = (props) => {
    const [mainImg, setMainImg] = useState(products[props.item].img)
    const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url('${mainImg}')` })
    const MAGNIFY_SIZE = 200;
    const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 2;

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { offsetWidth, offsetHeight } = target;
        const xPercentage = (offsetX / offsetWidth) * 100;
        const yPercentage = (offsetY / offsetHeight) * 100;

        setMagnifyStyle((prev) => ({ ...prev,display:'block',top:`${offsetY }px`,left:`${offsetX }px`, backgroundPosition: `${xPercentage}% ${yPercentage}%` }))
    }

    const handleMouseLeave = (e) => {
        setMagnifyStyle((prev) => ({...prev,display:'none'}))
    }
    return (
        <div className='product-img'>
            <div className='product-gallery'>
                <ul>
                    <li>
                        <img draggable={false} src={products[props.item].img} onClick={() => setMainImg(products[props.item].img)} alt="Imagem do modelo selecionado" />
                    </li>
                    {products[props.item].othersImg.map((image, index) => (
                        <li key={index}>
                            <img src={image} draggable={false} onClick={() => setMainImg(image)} alt="Posições diferentes do modelo selecionado" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='main-img'>
                <img className="product-img__main" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} draggable={false} src={mainImg} alt="Imagem do modelo selecionado" />
                <div className='magnify' style={magnifyStyle}></div>
            </div>
        </div>
    )
}

export default ProductImg