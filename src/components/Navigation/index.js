import Button from "@restart/ui/esm/Button";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetUserData } from "../../store/authSlice";

export default function Navigation() {
    const { user, isLogged } = useSelector((state) => state.user_auth);
    const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(resetUserData());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Contactos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!isLogged && (
              <>
                <Nav.Link href="/login">Ingresá</Nav.Link>
                <Nav.Link href="/register">Registrate</Nav.Link>{" "}
              </>
            )}
          </Nav>
          <Nav>
            {isLogged && (
              <>
                {" "}
                <Container>
                  <Navbar.Brand>
                    <img
                      src={user.image}
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                      alt="avatar"
                    />
                  </Navbar.Brand>
                  <Navbar.Brand>
                    {user.firstName} {user.lastName}{" "}
                  </Navbar.Brand>
                </Container>{" "}
                <Navbar.Brand>
                  <Button
                    style={{
                      background: "none",
                                          borderColor: "white",
                    borderStyle:"groove",
                      borderRadius:"5px",
                      color: "white",
                    }}
                    onClick={(e) => handleClick(e)}
                  >
                    Cerrar sesión
                  </Button>
                </Navbar.Brand>
                <Nav.Link href="/profile">Profile</Nav.Link>{" "}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
