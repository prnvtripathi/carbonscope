import './Home.css'
import image1 from '../../images/image1.jpg'

const Home = () => {
    return (
        <div className='main-container'>
            <div className='top'>
                <div className='heading-container'>
                    <h1 className='heading'>Calculate your <span className='carbon'>Carbon Footprints</span> 👣</h1>
                </div>
                <div className='img-container'>
                    <img className='hero-image' src={image1} alt='Carbon' width={400} />
                </div>
            </div>
            <div className='calc-text-container'>
                <h2 className='calc-text'>Check out our interactive calculator, learn about your carbon footprints and actions to reduce it.</h2>
            </div>

        </div>
    )
}

export default Home