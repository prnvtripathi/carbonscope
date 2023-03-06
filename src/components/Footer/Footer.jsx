import './Footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <div className='footer-container'>
                <div className='brand-container'>
                    <h2 className='footer-brand'>CarbonScope</h2>
                </div>
                <div className='socials'>
                    <ul>
                        <li><a href='https://github.com/prnvtripathi/carbonscope' className='social-icon'><FaGithub size={30} /></a></li>
                    </ul>
                </div>
            </div>
            <hr className='hr-footer'/>
            <div className='footer-credits'>
                <h3 className='footer-text'>Made with 🔥 by Team Ctrl-Alt-Elite</h3>
                <h3>© {year}</h3>
            </div>
        </>

    )
}

export default Footer