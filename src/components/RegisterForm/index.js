import { useFormik } from "formik";
import * as Yup from "yup";
import Auth from "../../assets/auth.svg";

import { useHistory } from "react-router";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { fillUserData } from "../../store/authSlice";
import { Alert } from "..";
import { postService } from "../../services";
import { useState } from "react";

const RegisterForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await postService("register", {...user});

      await Alert({
        icon: "success",
        title: `Bienvenido ${user.firstName || ""}`,
        text: "Registro exitoso",
        showConfirmButton: false,
        timer: 1900,
      }).then(() => {
      
        history.push("/");
      });
    } catch (error) {
      await Alert({
        icon: "error",
        title: `${error.response.data?.msg || "Ops..."}`,
        text: error.response.data?.details?.map(d => d.msg),
      });
    }
  }
    
    
  
  return (
    <Container className="vh-90" fluid style={{ marginTop: "4%" }}>
      <Row className="justify-content-center">
        <Col xs={10} sm={10} md={4} className="p-5 d-flex">
          <Image fluid src={Auth} alt="" />
        </Col>

        <Col xs={12} sm={12} md={6} className="p-5">
          <h1 className="fw-bold">Registrate</h1>
          <Form onSubmit={handleSubmit} >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                     onChange={(e) => setUser({
                      ...user,
                      [e.target.name]: e.target.value
                    })}
                  required
                  name="firstName"
                  type="text"
                  placeholder="Ingresá tu nombre"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  onChange={(e) => setUser({
                    ...user,
                    [e.target.name]: e.target.value
                  })}
                required
                name="lastName"
                  type="text"
                  placeholder="Ingresá tu apellido"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
             onChange={(e) => setUser({
              ...user,
              [e.target.name]: e.target.value
            })}
             required
             name="email"
                type="email"
                placeholder="Ingresá tu email"
              />
              {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                 onChange={(e) => setUser({
                  ...user,
                  [e.target.name]: e.target.value
                })}
                 required
                 name="password"
                type="password"
                placeholder="Ingresá tu contraseña"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrate
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
