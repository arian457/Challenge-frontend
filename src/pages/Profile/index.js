import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";



const Profile = () => {
    const {user} = useSelector(state => state.user_auth)
    return(
        <Container fluid>
            <Col className='vh-100 vw-70 b-4'>
                <h1>{user.firstName} {' '} {user.lastName} </h1>
                
            </Col>
        </Container>
    );
};

export default Profile;