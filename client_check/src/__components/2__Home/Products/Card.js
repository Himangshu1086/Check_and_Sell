import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'

function Card() {

    const [ productData , setProductData] = useState({});
    const [loading , setLoading] = useState(true);

    useEffect(async ()=>{

        const res = await fetch("/getProduct" , {
        method:"GET" ,
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
    
        } , 
        credentials:"include"
      });
      const res2 = await res.json();
      setProductData(res2);
      setLoading(false);
    },[]);

    
    if(loading) return <>loading..</>
    console.log(productData)
    console.log("hello")

    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
            
            <Link to={`/product/${productData[0]._id}`}><div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded"
                    /> 
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </Link>


            <div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded-start"
                    />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>



            <div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded-start"
                    />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>



            <div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded-start"
                    />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>


            <div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded-start"
                    />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>



            <div class="card m-2 p-2" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        class="img-fluid rounded-start"
                    />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </p>
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
