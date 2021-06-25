import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component{
    
    
    render(){
       
        return(
            <><Carousel fade  className="books">
            { this.props.all.map((book, index)=>{
                return (
                         <Carousel.Item  key={index}>
                           <img src={book.img} className="d-block w-100"  alt="your cover" />
                         <Carousel.Caption>
                          <h3 className="books">{book.bookname}</h3>
                          <p className="books">{book.des}</p>
                          <p className="books">{book.state}</p>
                        </Carousel.Caption>
                       </Carousel.Item>
                )
  
                
            })} </Carousel>
                   
            </>
            
        
        );
    };
};
export default BestBooks;