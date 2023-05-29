import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Développeur backend", "Développeur fullstack", "Pentester en autodidacte"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Bienvenue sur mon portfolio</span>
                                <h1>{`Salut ! Moi c'est Enzo B.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Développeur backend", "Développeur fullstack", "Pentester en autodidacte" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Développeur depuis 2 ans, le code me passionne.
                                    J'ai choisi d'être développeur car depuis petit, l'informatique et les jeux vidéos m'intéressent fortement.
                                    J'aime le code car j'ai de grandes capacités creatives et imaginatives, et j'adore passer du temps derrière mon pc à trouver une solution à mon problème.
                                    </p>
                                <a href="#connect" className="nav-link"><button className="vvd" onClick={() => console.log('connect')}>Contactez-moi ! <ArrowRightCircle size={25} /></button></a>
                            </div>}
                    </TrackVisibility>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
