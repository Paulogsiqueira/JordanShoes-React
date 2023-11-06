import './Card.css'

const Card = ({ product }) => {
    return (
        <div className='products-item'>
            <div className='card-img'>
                <img className='products-img' src={product.img} />
            </div>
            <div className='card-description'>
                <h3>{product.name}</h3>
                <h5>R$ {(product.price).toFixed(2)}</h5>
                <h2>R$ {(product.price *0.9).toFixed(2)} no Pix</h2>
                <p>ou até 6x de R$ {(product.price /6).toFixed(2)} sem juros</p>

            </div>
        </div>
    )
}

export default Card