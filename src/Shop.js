import ItemList from './ItemList';

function Shop({shopList = {}}) {
   
    if(Object.keys(shopList).length){
    return (
      <div className="App">
       <div className='shopContainer'>
       {Array(Object.keys(shopList).length)
          .fill()
          .map((ignoredValue, index) => index)
          .map((id, index) =>{
             return <ItemList key={index} item={Object.values(shopList)[id]} id={Object.keys(shopList)[id]}/>
          })}
       </div>
       
        
      </div>
    )}else{
        return (
            <p>Loading....</p>
        )
    }
  }
  
  export default Shop;
  