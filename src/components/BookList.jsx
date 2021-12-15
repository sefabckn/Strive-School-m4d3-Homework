import { Component } from "react"
import SingleBook from "./SingleBook"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class BookList extends Component {
    render(){
        return(
            <Row>{
                this.props.books.map((book)=>
                <Col>
                    <SingleBook book={book}/>
                </Col> 
                
    )}     
    </Row>
        )        
}}
export default BookList