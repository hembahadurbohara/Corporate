import React from 'react'

function TopHeader() {
  return (
    <>
    <nav>
        <div className="container-fluid  co  ">
            <div className="container  con">
            <div className="content d-flex gap-3">
                <div className="detail text-white "><i class="fa-solid fa-location-arrow"></i>Subidhanagar, Tinkune Kathmandu</div>
                <div className="detail text-white"><i class="fa-solid fa-phone"></i>+977-9805761214/+977-9840046062</div>
                <div className="detail text-white"><i class="fa-solid fa-envelope"></i>hbohara54@gmail.com</div>
            </div>
            <div className="content-2 d-flex align-items-center gap-2">
                <div id='d' className="detail "> <a href=""><i class="fa-regular fa-user"></i> Log In</a> </div>
                <div id='d' className="detail "> <a href=""><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign Up</a></div>
            </div>
            </div>
      </div>
    </nav>
    </>
  )
}

export default TopHeader