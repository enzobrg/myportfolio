import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from "../assets/img/nav-icon4.png";
import navIcon6 from "../assets/img/nav-icon6.png";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                            <a href="#"><img src={navIcon4} alt="Icon" /></a>
                            <a href="#"><img src={navIcon6} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. Tout droits réservés.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
