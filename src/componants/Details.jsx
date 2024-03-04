import React from 'react'

function Details() {
  return (
    <>
    <div className="container-fluid bg-dark-subtle mt-2 pb-5">
  <div className="container">
    <div className="text-center one">ABOUT US</div>
    <div className="text-center two">H Life Insurance</div>
    <div className="row">
      <div className="col-md-4">
        <div className="t pt-md-5 pb-2">H Life Insurance Company Limited (HLICL) established under the Company Act 2053 on 27th February, 2008 (Falgun 15, 2064) and started functioning on 3rd April, 2008 (Chaitra 21, 2064).</div>
        <div className="t pb-2">The Authorized Capital of the Company is Rs. 5 billion with Rs. 2.9 billion paid-up capital. (60 percent promoter and 40 percent public share.) ALICL has a Life Funds of Rs. 34 billion (Paush end 2079-80).</div>
        <div className="t pb-2">There are 93 promoters of the company: 2 institutional and the remaining 91 individual promoters. Among the institutional promoters, there are prominent BFIs and Corporate House.</div>
      </div>
      <div className="col-md-4">
        <div className="photo text-center pt-md-5"><img className src="https://www.asianlife.com.np/images/fav-logo.png" alt /></div>
      </div>
      <div className="col-md pt-md-3">
        <div className="de d-flex flex-column gap-3">
          <div className="de-item d-flex gap-2 align-items-center">
            <div className="no">1</div>
            <div className="content">Completely Transparent Process</div>
          </div>
          <hr className="d-md-none" />
          <div className="de-item d-flex gap-2 align-items-center">
            <div className="no">2</div>
            <div className="content">Instant Review of the Application</div>
          </div>
          <hr className="d-md-none" />
          <div className="de-item d-flex gap-2 align-items-center">
            <div className="no">3</div>
            <div className="content">Best Price Selection Curated toward you</div>
          </div>
          <hr className="d-md-none" />
          <div className="de-item d-flex gap-2 align-items-center">
            <div className="no">4</div>
            <div className="content"> Quick Claims</div>
          </div>
          <hr className="d-md-none" />
          <div className="de-item d-flex gap-2 align-items-center">
            <div className="no">5</div>
            <div className="content"> Personalized Service</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Details