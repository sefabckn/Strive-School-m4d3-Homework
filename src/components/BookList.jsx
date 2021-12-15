import { Component } from "react"
import SingleBook from "./SingleBook"



class BookList extends Component {
    render(){
        return(
            this.props.books.map((book)=>{<SingleBook book={book}/>}))
    }
}
export default BookList