import './Home.css'
import Gallery from '../../components/gallery/Gallery'
import Wallpaper from '../../img/wallpaper/wallpaper.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <h1>Jordan Shoes</h1>
      <header className='home-header' >
        <div className='home-img'>
          <h2>A Melhor Loja de Jordan</h2>
          <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan</p>
        </div>
      </header>
      <div>
        <h2>Destaques</h2>
        <p>Frete grátis e chinelo de brinde por tempo limitado.</p>
        <Gallery />
      </div>
    </div>
  )
}

export default Home