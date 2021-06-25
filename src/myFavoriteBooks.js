import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      booksAll:[],
    }
  }
  componentDidMount=()=>{
    this.getBooks();
  }

  getBooks =async()=>{
    const { user } = this.props.auth0;
    console.log('inside request lets wait ',user.email)
    let URL = `http://localhost:3010/book?email=${user.email}`;
     let booksData= await axios.get(URL);
     console.log(booksData);
     try{
     this.setState({
       booksAll:booksData.data,
     })
     
     console.log(this.state.booksAll);
     console.log('in state');
    }
    catch{
      console.log("error");
    }

  }

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <p>{this.getBooks}</p>
        <BestBooks all={this.state.booksAll}/>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
