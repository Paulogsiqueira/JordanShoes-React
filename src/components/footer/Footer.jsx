import linkedin from '../../img/icon/linkedin.png'
import github from '../../img/icon/github.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <div className='footer-links'>
        <div className='footer-links__linkedin'><a href="https://www.linkedin.com/in/paulo-gustavo-siqueira-48994916a/"><img src={linkedin} alt="Icone para LinkedIn"/></a></div>
        <div className='footer-links__github'><a href="https://github.com/Paulogsiqueira"><img src={github} alt="Icone para GitHub"/></a></div>
      </div>
      <div className='footer-text'>
        <p> © 2023 Paulo Gustavo Siqueira</p>
      </div>
    </footer>
  )
}

export default Footer