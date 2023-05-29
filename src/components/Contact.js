import {useState} from "react";
import { Container, Col, Row} from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Envoyer');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://wall4ce.netlify.app/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Le message a bien été envoyé.'});
        } else {
            setStatus({ succes: false, message: 'Quelque chose n\'a pas fonctionné, veuillez réessayer plus tard.'});
        }
    };

return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="contactez moi"/>
                </Col>
                <Col md={6}>
                    <h2>Entrons en contact</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Prénom" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Nom" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col size={12}sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Adresse mail" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col  size={12}sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Téléphone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col size={12} className="px-1">
                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                    <Col>
                                        <p className={status.message === false ? "Erreur" : "Succès"}>{status.message}</p>
                                    </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
)
}
