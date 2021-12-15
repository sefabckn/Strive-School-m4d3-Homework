import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const SingleBook = (props) =>{
    return(
        <Container>
            <Row>{
               
                    <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={props.img}/>
                        <Card.Body>
                            <Card.Title>{props.category}</Card.Title>
                            <Card.Text>
                            {props.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>        
                </Col>
                
                }</Row>
        </Container>
    )}
export default SingleBook