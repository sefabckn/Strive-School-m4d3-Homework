import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const SingleBook = (props) =>{
    return(
        <Container>
            <Row>{
               
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={props.book.img}/>
                        <Card.Body>
                            <Card.Title>{props.book.category}</Card.Title>
                            <Card.Text>
                            {props.book.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>        
               
                }</Row>
        </Container>
    )}
export default SingleBook