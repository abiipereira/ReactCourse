import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    
    function RenderDish({dish}) {
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

    function RenderComments({commentsArray}){

        if (commentsArray != null)
        {   
                     
            const commentSection = commentsArray.map((element) => {
            return (
              
                
                    <li>{element.comment} <br></br><br></br>--{element.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}<br></br><br></br></li>
                 
            
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

    const  Dishdetail = (props) => {
        if (props.dish!=null){
            return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsArray={props.comments} />
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


export default Dishdetail;