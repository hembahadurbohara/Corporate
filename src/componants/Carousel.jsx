import React from 'react'

function Carousel() {
  return (
    <>
    <div className="container pt-2">
 <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.asianlife.com.np/images/collections/banner1.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.asianlife.com.np/images/collections/banner2.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.asianlife.com.np/images/collections/banner3.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.asianlife.com.np/images/collections/banner4.jpg" className="d-block w-100 rounded-4" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </>
  )
}

export default Carousel