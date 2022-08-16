
import './App.css';

function Clothes( {itemsForSale} ) {


    return ( <div  className='container1'> 
   {itemsForSale.map(element => {
     const {id, name, image, price } = element;
     return( <div>
        <div key={id} >
            <img className='catalog' src={image}  alt="pic" />
            <div className='clothesName'>  <h2> {name} </h2>  </div>
             <div className='clothesPrice'><h2> $ {price}  </h2></div>
        </div>
        </div>
     )
   })}
  


</div>
 )
}

export default Clothes;