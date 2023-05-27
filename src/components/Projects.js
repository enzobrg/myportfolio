import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hopHopHop from "../assets/img/project-img1.png";
import idealJob from "../assets/img/project-img2.png";
import cyberPic from "../assets/img/project-img3.png";
import imgInBuild from "../assets/img/img-inbuild.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    const sideProjects = [
        {
            title: "En développement",
            description: "In progress",
            imgUrl: imgInBuild,
        },
        {
            title: "En développement",
            description: "In progress",
            imgUrl: imgInBuild,
        },
        {
            title: "En développement",
            description: "In progress",
            imgUrl: imgInBuild,
        },
    ];

    const wildProjects = [
        {
            title: "HopHopHop",
            description: "Bière et brasseries autour de toi !",
            imgUrl: hopHopHop,
        },
        {
            title: "IdealJob",
            description: "Recense tes candiatures et offres d'emploi ici",
            imgUrl: idealJob,
        },
        {
            title: "En développement",
            description: "In progress",
            imgUrl: imgInBuild,
        },
    ];

    const cyber = [
        {
            title: "En développement",
            description: "In progress",
            imgUrl: cyberPic,
        },
        {
            title: "En développement",
            description: "In progress",
            imgUrl: cyberPic,
        },
        {
            title: "En développement",
            description: "In progress",
            imgUrl: cyberPic,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projets</h2>
                                    <p>Retrouvez ici l'ensemble de mes projets, personnels ou issus de formation, ainsi qu'un onglet CyberSécurité pour consulter mes CTF et différents exercices sur la Cyber sécurité. </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Side projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Wild's projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Cyber (TryHackme...)</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        sideProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        wildProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <Row>
                                                    {
                                                        sideProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        cyber.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
