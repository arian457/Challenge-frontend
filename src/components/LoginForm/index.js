import * as Yup from "yup";
import Auth from "../../assets/auth.svg";

import { useHistory } from "react-router";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { fillUserData } from "../../store/authSlice";

import { Alert } from "..";
import { postService } from "../../services";
import { useState } from "react";

const LoginForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await postService("login", { ...user });
        localStorage.setItem("token_id",response.data?.token)
       dispatch(fillUserData(response.data?.user))
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
        text: error.response.data?.details?.map((d) => d.msg),
      });
    }
  };

  return (
    <Container className="vh-90" fluid style={{ marginTop: "4%" }}>
      <Row className="justify-content-center">
        <Col xs={10} sm={10} md={4} className="p-5 d-flex">
          <Image fluid src={Auth} alt="" />
        </Col>

        <Col xs={12} sm={12} md={6} className="p-5">
          <h1 className="fw-bold">Ingresá</h1>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  name="email"
                  type="email"
                  placeholder="Ingresá tu email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  name="password"
                  type="password"
                  placeholder="Ingresá tu contraseña"
                />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
