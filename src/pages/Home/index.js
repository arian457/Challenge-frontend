import { Image , Row , Col, Container } from 'react-bootstrap';
import  HomeImage  from '../../assets/homeimage.svg'
import  HomeImageUpdate  from '../../assets/homeimageupdate.svg'


const Home =()=>{
    return(
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={6} lg={4} className='text-center p-5'>
                    <Image fluid src={HomeImage} alt='' />
                </Col>
                <Col xs={12} sm={6} className='d-flex flex-row  p-5 align-items-center'>
                    <h1 className='fw-bold'>Ten a todos tus contactos en la palma de tu mano</h1>
                </Col>
            </Row>
            <Row className='justify-content-md-center flex-row-reverse mt-5 mb-5'>
                <Col xs={12} sm={6} lg={4} className='text-center p-5'>
                    <Image fluid src={HomeImageUpdate} alt='' />
                </Col>
                <Col xs={12} sm={6} className='d-flex flex-row  p-5 align-items-center'>
                    <h1 className='fw-bold'>Agrega todas sus redes sociales en un solo lugar</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default Home;