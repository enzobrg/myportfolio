import php from "../assets/img/php-logo.png";
import nodejs from "../assets/img/nodejs.png";
import react from "../assets/img/reactjs.png";
import symfony from "../assets/img/symfony.png";
import mysql from "../assets/img/nav-icon5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Compétences</h2>
                            <p>Voici un aperçu des langages et frameworks avec lesquels j'ai pu travailler à travers mes différentes expériences.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={php} alt="Image" />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={symfony} alt="Image" />
                                    <h5>Symfony</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
