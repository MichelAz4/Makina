import React, { Component } from "react";
import partcard from './PartCard.module.css';


class PartCard extends Component{
     // constructor(props){
    //     super(props);
    // }
    render(){
                return(

                        <div className={partcard.card}>
                            <img src={this.props.img} alt='Part' />
                            <div className={partcard.cardContent}>
                                <p>{this.props.name}</p>
                                <p>$ {this.props.price} s.p</p>
                                <i class="fa-solid fa-trash" style={{
                                "color":"red",
                                "cursor":"pointer",
                                "position":"absolute",
                                "width": "24px",
                                "height": "24px",
                                "left": "45px",
                                "top": "84px"
                                }}>
                                </i>
                                <button>Buy Now</button>
                                <a href="#">View Details</a>
                            </div>
                        </div>
                );
            }
}
export default PartCard;