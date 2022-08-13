import React, { Component } from 'react'
import editfilter from "./Filter.module.css";
import Axios from 'axios'

class Filter extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      model :'',
      minPrice : 0 ,
      maxPrice : 0 ,
      yearFrom : 1900 ,
      yearTo : 2000 ,
      doorNum : '2',
      carColor : 'brown',
      gear : 'Automatic',
      bodyType : 'SUV'
    };

    const clearSearch = ()=>{

      this.setState({

       model : null ,
       minPrice : null ,
       maxPrice : null ,
       yearFrom : null ,
       yearTo : null ,
       doorNum : null ,
       carColor : null,
       gear : null,
       bodyType : null
       
     })
    }

    function submit(e){
      e.preventDefault();
      Axios
      .post('',
      {
        model : this.model,
        minPrice : this.minPrice ,
        maxPrice : this.maxPrice ,
        yearFrom : this.yearFrom ,
        yearTo : this.yearTo ,
        doorNum : this.doorNum ,
        carColor : this.carColor ,
        gear : this.gear ,
        bodyType : this.bodyType ,
      })
      .then(res=>{
        res.json();
      })
    }
    
  }

    toggleDoor=(value)=>{
      this.setState({
        doorNum:value
    })
    }

    toggleColor=(value)=>{
    this.setState({
      carColor:value
    })
    }

    toggleGear=(value)=>{
      this.setState({
           gear:value
    })
  }

  toggleBodyType=(value)=>{
    this.setState({
      bodyType:value
  })
}



  render(){
    return (
      <form className={editfilter.container} onSubmit={(e)=>this.submit(e)}>
          <h2 className={editfilter.header1}>YOU ARE SEARCHING</h2>
          <h2 onClick={()=> this.clearSearch } className={editfilter.header2}>Clear Search</h2>
          <i onClick={()=> this.clearSearch } class="fa-solid fa-trash" style={{
            'position':'absolute',
            'color':'blue',
            'top':'49px',
            'left':'490px',
            'cursor':'pointer'
          }}></i>
          <hr className={editfilter.hr1} />
          
          <div className={editfilter.modelBox}>
            <label className={editfilter.model}>Make/Model :</label>

            <input className={editfilter.modelInput} placeholder="Add Make And Model" value={this.model} onChange={(e)=>{this.setState({model:this.e.target.value})}} />
          </div>

          <div className={editfilter.yearBox}>
            <label className={editfilter.year}>Year :</label>

            <input className={editfilter.fromIn} placeholder="From" value={this.yearFrom} onChange={(e)=>{this.setState({yearFrom:this.e.target.value})}} />
            <input className={editfilter.toIn} placeholder="To" value={this.yearTo} onChange={(e)=>{this.setState({yearTo:this.e.target.value})}}/>
          </div>

          <div className={editfilter.bodyTypeBox} >
            <label className={editfilter.bodyType} >Body Type :</label>
            <ul type="none" className={editfilter.bodyTypeList} >
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('COUPE')} ><img src='\img\coupe.svg' alt='COUPE' />COUPE</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('SEDAN')} > <img src='\img\sedan.svg' alt='SEDAN' />SEDAN</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('HATCH')} ><img src='\img\hatch.svg' alt='HATCH' />HATCH</button>
              </li>
            </ul>
            <ul type="none" className={editfilter.bodyTypeList2} >
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('SUV')} ><img src='\img\suv.svg' alt='SUV' />SUV</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('WAGON')}> <img src='\img\wagon.svg' alt='WAGON' />WAGON</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleBodyType('PICKUP')} > <img src='\img\pickup.svg' alt='PICKUP' /> <span>PICKUP</span></button>
              </li>
            </ul>
          </div>

          <div className={editfilter.priceBox}>
            <label className={editfilter.price}>Price :</label>

            <input className={editfilter.minPrice} placeholder="Min" value={this.minPrice} onChange={(e)=>{this.setState({minPrice:this.e.target.value})}} />
            <input className={editfilter.maxPrice} placeholder="Max" value={this.maxPrice} onChange={(e)=>{this.setState({maxPrice:this.e.target.value})}} />
          </div>

          <div className={editfilter.gearBox}>
            <label className={editfilter.gear}>Gear Box :</label>
            <ul type="none" className={editfilter.gearList}>
              <li>
                <button type ='button' onClick={()=>this.toggleGear('Automatic')}>Automatic</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleGear('Manual')} >Manual</button>
              </li>
            </ul>
          </div>

          <div className={editfilter.doorsBox}>
            <label className={editfilter.doors}>Doors :</label>
            <ul type="none" className={editfilter.doorsList}>
              <li>
                <button type ='button' onClick={()=>this.toggleDoor('2')}>2</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleDoor('3')}>3</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleDoor('4')}>4</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleDoor('5')}>5</button>
              </li>
            </ul>
          </div>

          <div className={editfilter.colorsBox}>
            <label className={editfilter.colors}>Colors :</label>
            <ul type="none" className={editfilter.colorsList} >
              <li>
                <button type ='button' onClick={()=>this.toggleColor('beige')}>beige</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('black')}>black</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('brown')}>brown</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('blue')}>blue</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('gray')}>gray</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('white')}>white</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('red')}>red</button>
              </li>
            </ul>
            <ul type="none" className={editfilter.colorsList2}>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('yellow')}>Yellow</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('purple')}>purple</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('orange')}>orange</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('silver')}>silver</button>
              </li>
              <li>
                <button type ='button' onClick={()=>this.toggleColor('green')}>green</button>
              </li>
              <li>
                <button type='button' onClick={()=>this.toggleColor('gold')}>gold</button>
              </li>
              <li>
                <input type='text' placeholder='other color, type it' style={{'position':'absolute', 'top' : '55px' , 'left':'37px' , 'border': '2px solid #497ecd' ,
                                                                               'box-sizing': 'border-box', 'border-radius': '10px', 'width': '180px' , 'height':'50px',
                                                                               'margin': '2px 10px'}}/>
              </li>
            </ul>
          </div>
          <button type="reset" className={editfilter.cancel}>
            Cancel
          </button>
          <button type="submit" className={editfilter.show}>
            show results
          </button>
      </form>
    );
        }
}
export default Filter;

