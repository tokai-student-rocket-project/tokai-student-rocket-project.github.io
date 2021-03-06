import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" as={Link}>
          <a>
            <div className={styles["logo"]}>
              <ExportedImage
                src="images/logo.svg"
                layout="fill"
                alt="Tokai Student Rocket Project"
              />
            </div>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ps-md-5">
            <Link href="/team" passHref>
              <Nav.Link className={styles["nav-link"]}>TEAM</Nav.Link>
            </Link>
            <Link href="/vehicle" passHref>
              <Nav.Link className={styles["nav-link"]}>VEHICLE</Nav.Link>
            </Link>
            <Link href="/mission" passHref>
              <Nav.Link className={styles["nav-link"]}>MISSION</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link className={styles["nav-link"]}>NEWS</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className={styles["nav-link"]}>CONTACT</Nav.Link>
            </Link>
            <Link href="/link" passHref>
              <Nav.Link className={styles["nav-link"]}>LINK</Nav.Link>
            </Link>
          </Nav>
          <Navbar.Text className="ms-auto pe-md-5">
            <a
              href="https://twitter.com/Tokai_SRP"
              target="_brank"
              aria-label="Twitter"
              rel="noreferrer noopener"
            >
              <FaTwitter className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.instagram.com/tokai_srp/"
              target="_brank"
              aria-label="Instagram"
              rel="noreferrer noopener"
            >
              <FaInstagram className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.youtube.com/c/TokaiSRP"
              target="_brank"
              aria-label="Youtube"
              rel="noreferrer noopener"
            >
              <FaYoutube className={styles["react-icon"]} />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
