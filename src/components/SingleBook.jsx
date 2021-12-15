import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Component } from 'react'
class SingleBook extends Component{
    state= {
        selected: false
    }
    render(){
        return(
            <Container>
                <Row>{
                        <Card style={{ width: '12rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={this.props.book.img}
                            onClick={()=> {this.setState({selected:!this.state.selected})}}
                            style={{border:`2px solid ${this.state.selected?"red":"none"}`}}
                            />
                            <Card.Body>
                                <Card.Title>{this.props.book.category}</Card.Title>
                                <Card.Text>
                                {this.props.book.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>        
                   
                    }</Row>
            </Container>
        )
    }
   }
export default SingleBook