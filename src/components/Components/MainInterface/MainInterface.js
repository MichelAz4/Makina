import React, { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import Axios from 'axios'

import mainEdit from './MainInterface.module.css'
import PartCard from '../PartCard/PartCard'
import CarCard from '../CarCard/CarCard'




function MainInterface() {
    const url = '';

    const navigate= useNavigate();

    const [model,setModel]=useState('');
    const [company,setCompany]=useState('');

    const [budget,setBudget]=useState(0);
    const [search,setSearch]=useState('');
    
    const [cars,setCars] = useState([

        {key:"0" , img:"./img/car1.jpg" , name:"car10" , model:"TOYOTA" , price:"100000000"},
        {key:"1" , img:"./img/car2.jpg" , name:"car2" , model:"MERCEDES" , price:"150000000"},
        {key:"2" , img:"./img/car3.jpg" , name:"car19" , model:"KIA" , price:"200000000"},
        {key:"3" , img:"./img/car4.jpg" , name:"car4" , model:"BMW" , price:"250000000"},
        {key:"4" , img:"./img/car5.jpg" , name:"car5" , model:"JEEP" , price:"300000000"},
        {key:"5" , img:"./img/car5.jpg" , name:"car1" , model:"JEEP" , price:"300000000"},
        {key:"6" , img:"./img/car5.jpg" , name:"car8" , model:"JEEP" , price:"300000000"},
        {key:"7" , img:"./img/car5.jpg" , name:"car6" , model:"JEEP" , price:"300000000"},
        {key:"8" , img:"./img/car5.jpg" , name:"car11" , model:"JEEP" , price:"300000000"},
        {key:"9" , img:"./img/car5.jpg" , name:"car7" , model:"JEEP" , price:"300000000"},
        
    ]);

    const deleteItem = ()=>{
        
    }

    useEffect(()=>{
        fetch('')
        .then((res)=>{
          // if(!res.ok){
          //   throw Error ('NOT FOUND');
          // }
          return res.json();
        })
        .then((data)=>{
          setCars(data)
        })
        .catch((err)=>{
          <div className="erroe">{err}</div>
        })
       },[]
    )

    

    const car = Array.from(cars).map(function(member){
        return (
            <CarCard
                key = {member.key}
                img = {member.img}
                name = {member.name}
                model = {member.model}
                price = {member.price}
                deleteFunc={deleteItem}
            />
        )
      });

    const [parts,setParts]= useState([

        {key:"0" , img:"./img/part1.png" , model:'2000', name:"part1" , price:"100000"},
        {key:"1" , img:"./img/part2.png" , model:'2001', name:"part2" , price:"150000"},
        {key:"2" , img:"./img/part3.png" , model:'2002', name:"part3" , price:"200000"},
        {key:"3" , img:"./img/part4.png" , model:'2001', name:"part4" , price:"250000"},
        {key:"4" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
        {key:"5" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
        {key:"6" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
        {key:"7" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
        {key:"8" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
        {key:"9" , img:"./img/part5.png" , model:'2000', name:"part5" , price:"300000"},
    ])

    useEffect(()=>{
        fetch('http')
        .then((res)=>{
          // if(!res.ok){
          //   throw Error ('NOT FOUND');
          // }
          return res.json();
        })
        .then((data)=>{
          setParts(data)
        })
        .catch((err)=>{
          <div className="erroe">{err}</div>
        })
       },[]
    )
    

    const part = Array.from(parts).map(function(member){
        return (
                    <PartCard
                        img = {member.img}
                        name = {member.name}
                        price = {member.price}
                    />
                )
    });


    function submitBudget(){
        
        Axios
        .post(url,{
          budget : budget,
        })
        .then(res=>{
          res.json();
        })
      }

      function submitSearch(){
        
        Axios
        .post(url,{
          search : search,
        })
        .then(res=>{
          res.json();
        })
      }


   

    return(
        <div className={mainEdit.container}>
            
            <nav id ='home' className={mainEdit.nav}>
                <img src='\img\Logo.png' alt='Makina Logo' />
                <ul class="list-group list-group-horizontal" className={mainEdit.list1}>
                    <li>
                        <Link to='/'>Home</Link>
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
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <ul class="list-group list-group-horizontal" className={mainEdit.list2}>
                    <li>
                       <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                       <Link to='/signup'>Sign Up</Link>
                    </li>
                </ul>
            </nav>
            
            <div className={mainEdit.headerSection}>
                    <div className={mainEdit.hdrImg}>
                    </div>
                    <img src='\img\cosy.png' alt='Car' />
                    <div className={mainEdit.title}>
                         <section>
                                We Have Everything
                                Your Car Need
                         </section>
                         <section>
                                We Provide An Online Platform For Selling
                                Cars And It’s Parts .
                         </section>
                    </div>
                    <div className={mainEdit.filterSection}>
                            <button type='button' className={mainEdit.btn} onClick={()=>navigate('/filter')}>
                                    <span>Filter</span>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                            </button>
                            <input type='text' placeholder='Search ...' value={search} onChange={(e)=>setSearch(e.target.value)} />
                    </div>
            </div>

            <div className={mainEdit.carSection}>
               <h1>Great Cars For Evrey Budget</h1>
               <div className={mainEdit.searchBar}>
                    <input type='text' placeholder='You’r Car Budget' value={budget} onChange={e=>setBudget(e.target.value)}/>
                    <button type='submit' className={mainEdit.searchBarBtn} onClick={()=>submitBudget}>Surprise Me</button>
               </div>
               <h2>BODY TYPE</h2>
               <div className={mainEdit.bodyTypeHolder}>
                   <div>
                        <img src='\img\sedan.svg' alt='SEDAN' />
                        <label>SEDAN</label>
                   </div>

                   <div>
                        <img src='\img\coupe.svg' alt='COUPE' />
                        <label>COUPE</label>
                   </div>

                   <div>
                        <img src='\img\hatch.svg' alt='HATCH' />
                        <label>HATCH</label>
                   </div>

                   <div>
                        <img src='\img\suv.svg' alt='SUV' />
                        <label>SUV</label>
                   </div>

                   <div>
                        <img src='\img\wagon.svg' alt='WAGON' />
                        <label>WAGON</label>
                   </div>

                   <div>
                        <img src='\img\pickup.svg' alt='PICKUP' />
                        <label>PICKUP</label>
                   </div>
               </div>

               <h2>MAKES</h2>
               <div className={mainEdit.makesHolder}>
                  
                    <div>
                        <img src='\img\Kia.png' alt='kia'/>
                        <label>KIA</label>
                    </div>
                  
                    <div>
                        <img src='\img\Toyota.png' alt='toyota'/>
                        <label>TOYOTA</label>
                    </div>
                  
                    <div>
                        <img src='\img\Chery.png' alt='chery'/>
                        <label>CHERY</label>
                    </div>
                  
                    <div>
                        <img src='\img\Chevrolet.png' alt='cheverolet'/>
                        <label>CHEVEROLET</label>
                    </div>
                  
                  
                    <div>
                        <img src='\img\BMW.png' alt='bmw' />
                        <label>BMW</label>
                    </div>
                  
                    <div>
                        <img src='\img\Hyundai.png' alt='hyundai' />
                        <label>HYUNDAI</label>
                    </div>
                  
                    <div>
                        <img src='\img\Lexus.png' alt='lexus' />
                        <label>LEXUS</label>
                    </div>
                  
                    <div>
                        <img src='\img\Nissan.png' alt='nissan' />
                        <label>NISSAN</label>
                    </div>
                  
                    <div>
                        <img src='\img\Mercedes-Benz.png' alt='mercedes' />
                        <label>MERCEDES-BENZ</label>
                    </div>
                
               </div>

               <h2>LATEST CARS</h2>
               <div className={mainEdit.latestCar}>
               {car}
               </div>
               <button type='button' className={mainEdit.viewAllBtn} onClick={()=>navigate('/cars')}>View All</button>
            </div>

            <div  className={mainEdit.beSellerSection}>
                <img src='\img\about.png'/>
                <section>
                    <p>
                       Want To Become A Seller ?
                    </p>

                    <p>You can benifit from our website to show you’r cars , parts 
                       And everything that a car customer will need .
                    </p>

                    <button type='button' onClick={()=>navigate('/signup')} >Join Now</button>
                </section>
            </div>

            <div  className={mainEdit.partsSection}>

                 <div className={mainEdit.description}>
                     <p>What We Offer</p>
                     <p>Our Car Is Always Excellent</p>
                     <p>Find You’r Car Parts In One Destination</p>
                 </div>

                 <div className={mainEdit.partscards}>
                      {part}
                 </div>

                 <div className={mainEdit.searchPart}>

                      <section>

                         <article>

                            <h1>
                               Car Parts
                            </h1>
                            <p>
                               Are you looking for A spesific car Part ?
                               fill Information below
                            </p>

                         </article>

                         <form>

                            <div>
                                <label>CAR COMPANY :</label>
                                <select value={company} onChange={e=>setCompany(e.target.value)}>

                                    <option value=''></option>
                                    <option value='nissan'> NISSAN</option>
                                    <option value='mercedes'> MERCEDES</option>
                                    <option value='bmw'> BMW</option>
                                    <option value='chery'> CHERY</option>
                                    <option value='kia'> KIA</option>
                                    <option value='lexus'> LEXUS</option>
                                    <option value='hyundai'> HYUNDAI</option>
                                    <option value='cheverolet'> CHEVEROLET</option>
                                    <option value='toyota'> TOYOTA</option>
                                    
                                </select>
                            </div>
                            <div>
                                <label>CAR MODEL :</label>
                                <select value={model} onChange={e=>setModel(e.target.value)}>
                                    <option></option>
                                    <option value='1999' >1999</option> 
                                    <option value='2000' >2000</option>
                                    <option value='2001' >2001</option>
                                    <option value='2002' >2002</option>
                                    <option value='2003' >2003</option>
                                    <option value='2004' >2004</option>
                                    <option value='2005' >2005</option>
                                    <option value='2006' >2006</option>
                                    <option value='2007' >2007</option>
                                    <option value='2008' >2008</option>
                                    <option value='2009' >2009</option>
                                    <option value='2010' >2010</option>
                                    <option value='2011' >2011</option>
                                    <option value='2012' >2012</option>
                                    <option value='2013' >2013</option>
                                    <option value='2014' >2014</option>
                                    <option value='2015' >2015</option>
                                    <option value='2016' >2016</option>
                                    <option value='2017' >2017</option>
                                    <option value='2018' >2018</option>
                                </select>
                            </div>
                           
                            <hr/>
                            <button >View All</button>
                            <hr/>

                         </form>

                      </section>

                      <section>

                          <h1>Kinds Of Car Parts</h1>
                          <hr/>
                          <ul>
                             <li>
                                Tyers : <br/>
                                We provide tyers from the best 
                                Companies in the world for you’r car .
                             </li>
                             <li>
                                Engiens : <br/>
                                We provide engiens from the best 
                                Companies in the world for you’r car .
                             </li>
                             <li>
                                Kits : <br/>
                                We provide kits from the best 
                                Companies in the world for you’r car .
                             </li>
                             <li>
                                Accesores : <br/>
                                We provide accesores from the best 
                                Companies in the world for you’r car .
                             </li>
                          </ul>

                      </section>
                 </div>

            </div>

            <footer className={mainEdit.footer}>
                        <section className={mainEdit.firstSection}>
                            <img src='\img\Logo.png' alt='MAKINA'/>
                            <article>
                                The Future of Car Classifieds in MENA. Makina is an Easy, Fast and Free
                                car classifieds website for all and it tops it up with exposure across
                                all the countries in the MENA region in a matter of seconds.
                            </article>
                        </section>
                        <section className={mainEdit.secondSection}>
                            <label className={mainEdit.quickLinks}>Quick Links</label>
                            <ul className={mainEdit.list3}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to = '/cars'>Car Shop</Link></li>
                                <li><Link to= '/parts'>Car Parts</Link></li>
                                <li><Link to = '/login'>Log In</Link></li>
                                <li><Link to= '/signup'>Sign Up</Link></li>
                                <li><Link to = '#contact'>Contact Us</Link></li>
                            </ul>
                        </section>
                        <section className={mainEdit.thirdSection} id='contact'>
                        <label className={mainEdit.contactUs}>Contact Us</label>
                        <div className={mainEdit.contactUsList}>
                            <p><a>
                                    <i class="fa-solid fa-envelope" style={{
                                    color:'gray',
                                    'fontSize':'20px',
                                    'paddingRight':'10px'

                                    }}></i>
                                    Makina@gmail.com
                                </a>
                            </p>

                            <p><a>
                                    <i class="fa-brands fa-whatsapp" style={{
                                    color:'green',
                                    'fontSize':'20px',
                                    'paddingRight':'10px'
                                    }}></i>
                                +963554405224
                                </a>
                            </p>

                            <p><a>
                                    <i class="fa-solid fa-location-dot" style={{
                                    color:'brown',
                                    'fontSize':'20px',
                                    'paddingRight':'10px'
                                    }} ></i>
                                    Syria , Homs
                                </a>
                            </p>
                        </div>
                        
                        </section>
                        <hr className={mainEdit.endHr}/>
                        <p className={mainEdit.end}>Copyright © Makina 2022. All rights reserved.</p>
            </footer>

</div>

    );

}

export default MainInterface;