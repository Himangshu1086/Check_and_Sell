import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
  
<footer class="page-footer font-small pt-4 text-light b-2 mb-1" style={{background:"black"}}>

  <div class="container-fluid text-center text-md-left">


    <div class="row">

  
      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>

      </div>
    

      <hr class="clearfix w-100 d-md-none pb-3"/>

     
      <div class="col-md-6 mb-md-0 mb-3">

       
        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>


    </div>
   

  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/himangshu-baishya-b2406b183/">Himangshu1086.com</a>
    <Link to="/admin"><button className='btn ml-5' style={{color:"black"}}>Admin</button></Link>
  </div>
  

</footer>
        </div>
    )
}

export default Footer
