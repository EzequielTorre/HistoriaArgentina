'use client';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SearchHeader from './SearchHeader';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      className="mb-4 border-bottom sticky-top shadow-sm navbar-glass"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          href="/"
          className="d-flex align-items-center gap-2 fw-bold text-decoration-none brand-text"
        >
          <i className="bi bi-book-half text-primary fs-4"></i>
          <span>Historia Argentina</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-3">
          <div className="d-none d-sm-block">
            <SearchHeader />
          </div>
          <ThemeToggle />
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        </div>

        <Navbar.Collapse id="navbar-nav" className="order-lg-2">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link
              as={Link}
              href="/"
              className="d-flex align-items-center gap-2 px-3 nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-house-door"></i> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/timeline"
              className="d-flex align-items-center gap-2 px-3 nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-clock-history"></i> Línea de Tiempo
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about"
              className="d-flex align-items-center gap-2 px-3 nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-people"></i> Sobre nosotros
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              className="d-flex align-items-center gap-2 px-3 nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-envelope"></i> Contacto
            </Nav.Link>
          </Nav>
          <div className="d-block d-sm-none mt-3 mb-2">
            <SearchHeader />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
