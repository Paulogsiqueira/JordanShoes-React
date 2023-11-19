import Gallery from '@/components/gallery/Gallery'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>

      <header className='home-header' >
        <div className='home-img'>
          <h2>A Melhor Loja de Tênis Nike</h2>
          <p>Liberte o seu potencial, ultrapasse limites e alcance o extraordinário.<br/> Com a Nike, você não é apenas um atleta, você é uma força imparável. Just Do It</p>
        </div>
      </header>
      <div>
        <h2 className='home-highlight'>Destaques</h2>
        <p>Frete grátis e chinelo de brinde por tempo limitado.</p>
        <Gallery />
      </div>
    </div>
  )
}

export default Home