import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	
        }

    }

    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(commentsArray){

        if (commentsArray != null)
        {   
                     
            const commentSection = commentsArray.map((element) => {
            return (
              
                
                    <li>{element.comment} <br></br><br></br>--{element.author} , {element.date}<br></br><br></br></li>
                 
            
            );
            });
             

            return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {commentSection}
                </ul>
            </div>
            );
        }
            
        else
            return(
                <div></div>
            );
    }

    render() {
        if (this.props.selectedDish!=null){
            return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                   </div>
                   <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            </div>
        );
        }
        else
            return(
        <div></div>
        )
        
    }
}

export default Dishdetail;