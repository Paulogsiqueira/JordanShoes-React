import { products } from '../../../data/products.jsx';
import { useEffect, useState } from 'react';
import teste from '../../../img/icon/teste.png';
import './ProductImg.css'

const ProductImg = (props) => {
    const [mainImg, setMainImg] = useState(products[props.item].img)
    const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url('${mainImg}')` })
    const [showImg, setShowImg] = useState(mainImg)
    const MAGNIFY_SIZE = 200;


    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { offsetWidth, offsetHeight } = target;
        const xPercentage = (offsetX / offsetWidth) * 100;
        const yPercentage = (offsetY / offsetHeight) * 100;
        setShowImg(teste)

        setMagnifyStyle((prev) => ({ ...prev,display:'block',top:`${offsetY +100}px`,left:`${offsetX+100 }px`, backgroundPosition: `${xPercentage}% ${yPercentage}%` }))
    }

    useEffect(() => {
        setMagnifyStyle((prev) => ({...prev,backgroundImage: `url('${mainImg}')` }))
        setShowImg(mainImg)
     }, [mainImg])

    const handleMouseLeave = (e) => {
        setShowImg(mainImg)
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
                <img className="product-img__main" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} draggable={false} src={showImg} alt="Imagem do modelo selecionado" />
                <div className='magnify' style={magnifyStyle}></div>
            </div>
        </div>
    )
}

export default ProductImg