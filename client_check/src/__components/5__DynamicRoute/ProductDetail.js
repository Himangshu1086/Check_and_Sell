import React ,{ useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../__static/2__Other/ProductDetail.css'


function ProductDetail() {

        const {id } = useParams();
        const [ productData , setProductData] = useState({});
        const [loading , setLoading] = useState(true);
        const [quantity , setQuantity] = useState(1);
        
        useEffect(async ()=>{
     
            const res = await fetch(`/productDesp` , {
            method:"GET" ,
            headers:{
              "Content-Type":"application/json",
              "id":id
            }
          });
        const res2 = await res.json();
        setProductData(res2);
        setLoading(false);  

        },[id]);


      if(loading) return <>loading..</>
        console.log(productData);
        const addToCart = async (e)=>{
            e.preventDefault();
            console.log(productData.productName);
          

        //   const res = await fetch("/cart" , {
        //       method:"PUT",
        //       headers:{
        //           "Content-Type":"application/json"
        //       },
        //       body:JSON.stringify({
        //           quantity , productId:productData._id
        //       })
        //   });

        //   const data = await res.json();
        //   console.log(data);

          window.alert("product added to the cart")
      }


    return (
        <div>
            <div className="container rounded shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop:"120px"}}>
                <div className="left">
                    <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="image" />
                </div>
                <div className="right">
                    
            <div className="right-items">
                <p>{productData.productName}</p>
                    <strong>⭐⭐⭐⭐</strong>
                    <strong>Discount price : ₹ {productData.DiscountPrice} </strong>
                    <p> MRP : ₹ <span>{productData.MRP}</span></p>
                    <input type="number" value={quantity} min='1'   autoFocus onChange={(e)=>{setQuantity(Number(e.target.value))}} />
                    <div className="stock">
               {productData.availableQuantity>0 ? <h2 className="text-primary">In Stock </h2>:<h2 className="text-primary" >Out of Stock</h2>}
            </div> 
            
            <button className="text-dark" onClick={addToCart} >Add to Cart</button>
            </div>
                    
                    
                    
                </div>
            </div>
            <div className="desp container">
                <h4>{productData.description}</h4>
            </div>
            
            
        </div>
    )
}



export default ProductDetail ;