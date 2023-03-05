import './About.css'
import image4 from '../../images/image4.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='about-heading'>
                What are <span className='carbon'>Carbon Footprints</span>? 👣
            </h2>
            <hr />
            <div className='about-text-container'>
                <div className='abt-image-container'>
                    <img className='abt-image' src={image4} alt='Smoke' width={475} />
                </div>
                <div className='abt-text'>
                    <p className='para'>
                        The entire amount of greenhouse gases—including carbon dioxide and
                        methane—that are produced as a result of human actions is known as a carbon footprint.
                    </p>
                    <p className='para'>
                        One of the highest rates in the world, the average carbon footprint of a person in the
                        United States is 16 tonnes. The average carbon footprint throughout the globe is closer
                        to 4 tonnes. By 2050, the average worldwide carbon footprint per year must fall to under
                        2 tonnes in order to have the best chance of preventing an increase in global temperatures of 2°C.
                    </p>
                    <p className='para'>
                        Individual carbon footprint reduction from 16 tonnes to 2 tonnes takes time! We may start to
                        have a significant impact by making minor adjustments to our behaviour, such as eating less meat,
                        booking fewer connecting flights, and line-drying our clothing.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About