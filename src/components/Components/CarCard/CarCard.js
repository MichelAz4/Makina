import React from "react";
import CarCardEdit from './CarCard.module.css';

function CarCard(props){

    return(

                    <div className={CarCardEdit.crd} key={props.key}>
                        <img clasName={CarCardEdit.carImg} src={props.img} alt="car"/>
                        <div className={CarCardEdit.cardContent}>
                            <h5> {props.name}</h5>
                            <p> {props.model}</p>
                            <p> {props.price} s.p</p>
                            <span></span>
                                    <i class="fa-solid fa-trash" style={{
                                        "color":"red",
                                        "cursor":"pointer",
                                        "position":"absolute",
                                        "width": "24px",
                                        "height": "24px",
                                        "right": "10px",
                                        "top": "98px"
                                        }}>
                                    </i>
                        </div>
                
                    </div>
            )
                
            
}
export default CarCard;

