import React, { Component } from 'react';
import { BrowserRouter, Link , Route , Switch} from "react-router-dom";

import carInfoEdit from "./CarInfo.module.css";


class CarInfo extends Component {
  render(){
              return (
                <div className={carInfoEdit.container}>
                <nav className={carInfoEdit.nav}>
                <img src='\img\Logo.png' alt='Makina' />
                <ul class="list-group list-group-horizontal" className={carInfoEdit.list1}>
                     <li>
                        <Link to=''>Home</Link>
                    </li>
                    <li>
                        <Link to='/cars'>Cars</Link>
                        
                    </li>
                    <li>
                        <Link to='/parts'>Parts</Link>
                        
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='#contact'>Contact</Link>
                        
                    </li>
                </ul>
                <ul class="list-group list-group-horizontal" className={carInfoEdit.list2}>
                  <li>
                     <Link to='/login'>Log In</Link>
                  </li>
                  <li>
                     <Link to='/signup'>Sign Up</Link>
                  </li>
                </ul>
            </nav>

                        <section className={carInfoEdit.carImg}>

                          <img src="img\i1.jpg" alt="1"/>
                          <img src="img\i2.jpg" alt="2" />
                          <img src="img\i3.jpg" alt="3" />
                          <img src="img\i4.jpg" alt="4" />
                          
                        </section>

                        <section className={carInfoEdit.carInfo}>
                          <p className={carInfoEdit.price}>170,000,000 S.P</p>
                          <button type="button" className={carInfoEdit.whatsappButton}>
                            <i class="fa-brands fa-whatsapp"></i> Whatsapp
                          </button>
                          <button type="button" className={carInfoEdit.showNumberButton}>Show Number</button>
                          <table className={carInfoEdit.carInfoTable}>
                            <tr>
                              <td>Year</td>
                              <td>2012</td>
                            </tr>
                            <tr>
                              <td>Make</td>
                              <td>kia</td>
                            </tr>
                            <tr>
                              <td>Model</td>
                              <td>optima</td>
                            </tr>
                            <tr>
                              <td>Cylinders</td>
                              <td>4</td>
                            </tr>
                            <tr>
                              <td>Transmission</td>
                              <td>automatic</td>
                            </tr>
                            <tr>
                              <td>Type</td>
                              <td>sedan</td>
                            </tr>
                            <tr>
                              <td>Doors</td>
                              <td>5</td>
                            </tr>
                            <tr>
                              <td>Color</td>
                              <td>brown</td>
                            </tr>
                            <tr>
                              <td>Fuel</td>
                              <td>petrol</td>
                            </tr>
                          </table>
                        </section>
                        <section className={carInfoEdit.description}>
                          <img src="img\logo.jpg" alt="Company" />
                          <a href="#" className={carInfoEdit.companyName}>blah blah company</a>
                          <h5 className={carInfoEdit.companyLoc}>Syria , Homs</h5>
                          <hr className={carInfoEdit.descriptionHr}/>
                          <h2>Car FullName</h2>
                          <h3>Model</h3>
                          <article className={carInfoEdit.companyInfo}>Company Information</article>
                        </section>
                        <footer className={carInfoEdit.footer}>
                                <section className={carInfoEdit.firstSection}>
                                <img src='\img\Logo.png' alt='MAKINA'/>
                                <article>
                                  The Future of Car Classifieds in MENA. Makina is an Easy, Fast and Free
                                  car classifieds website for all and it tops it up with exposure across
                                  all the countries in the MENA region in a matter of seconds.
                                </article>
                                </section>
                                <section className={carInfoEdit.secondSection}>
                                <label className={carInfoEdit.quickLinks}>Quick Links</label>
                                <ul className={carInfoEdit.list3}>
                                  <li><a>Home</a></li>
                                  <li><a>Car Shop</a></li>
                                  <li><a>Car Parts</a></li>
                                  <li><a>Log In</a></li>
                                  <li><a>Sign Up</a></li>
                                  <li><a href='#contact'>Contact Us</a></li>
                                </ul>
                                </section>
                                <section id='contact' className={carInfoEdit.thirdSection}>
                                  <label className={carInfoEdit.contactUs}>Contact Us</label>
                                  <div className={carInfoEdit.contactUsList}>
                                    <p><i class="fa-solid fa-envelope" style={{
                                      color:'gray',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }}></i> Makina@gmail.com</p>

                                    <p><i class="fa-brands fa-whatsapp" style={{
                                      color:'green',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }}></i> +963554405224</p>

                                    <p><i class="fa-solid fa-location-dot" style={{
                                      color:'brown',
                                      'fontSize':'20px',
                                      'paddingRight':'10px'
                                      }} ></i> Syria , Homs</p>
                                  </div>
                                  <button type="button" className={carInfoEdit.sellButton}>SELL</button>
                                </section>
                                <hr className={carInfoEdit.endHr}/>
                                <p className={carInfoEdit.end}>Copyright © Makina 2022. All rights reserved.</p>
                        </footer>
                </div>
              );
          }
}

export default CarInfo;



// *** WITH Link 
/*
                       

*/

// *** WITH a
/*
                     <nav className={carInfoEdit.nav}>
                            <img src='\img\Logo.png' alt='Makina' />
                            <ul class="list-group list-group-horizontal" className={carInfoEdit.list1}>
                            <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Cars</a>
                          </li>
                          <li>
                            <a href="#">Parts</a>
                          </li>
                          <li>
                            <a href="#">Profile</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                            </ul>
                            <ul class="list-group list-group-horizontal" className={carInfoEdit.list2}>
                                <li>
                                  <a href="#">Log in</a>
                                </li>
                                <li>
                                  <a href="#">Sign up</a>
                                </li>
                            </ul>
                        </nav>

*/