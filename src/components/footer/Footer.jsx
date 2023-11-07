import linkedin from '../../img/icon/linkedin.png'
import github from '../../img/icon/github.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <div className='footer-links__linkedin'><a><img src={linkedin} alt="Icone para LinkedIn"/></a></div>
        <div className='footer-links__github'><img src={github} alt="Icone para GitHub" /></div>
      </div>
      <div className='footer-text'>
        <p> © 2023 Paulo Gustavo Siqueira</p>
      </div>
    </footer>
  )
}

export default Footer