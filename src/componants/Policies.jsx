import React from 'react'

function Policies() {
  return (
    <>
 <div className="container-fluid bg-dark-subtle pb-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="one pb-1">INSURANCE POLICIES</div>
        <div className="tt pb-3">MAKE A VISIBLE DIFFERENCE </div>
        <div className="te pb-3">H insurance is one of the leading general insurance companies in Nepal. H offers a wide range of policies including Fire, Earthquake, Motor, Engineering, Travel Medical, Marine or Agriculture policies etc. to its customers. H’s hassle free insurance claim process and excellent customer service has been the reason behind H’s strong brand image as being an outstanding insurance company in the country.</div>
        <button type="button" className="btn btt">See More</button>
      </div>
      <div className="col-md-8 conn">
        <div className="row d-flex justify-content-around">
          <div className="col-md-6 d-flex pb-2 justify-content-center gap-2">
            <div className="png"><i className="fa-solid fa-car" /></div>
            <div className="de">
              <div className="head pb-2">MOTOR POLICIES</div>
              <div className="det pb-5">A motor insurance policy is a policy to provide financial protection against physical damage and/or bodily injury resulting from...</div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center gap-2">
            <div className="png"><i className="fa-solid fa-fire-extinguisher" /></div>
            <div className="de">
              <div className="head pb-2">PROPERTY POLICIES</div>
              <div className="det pb-5">Property insurance protects people from the costs incurred by the fires or other defined perils up to an agreed amount....</div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center gap-2">
            <div className="png"><i className="fa-solid fa-plane" /></div>
            <div className="de">
              <div className="head pb-2">AVIATION POLICIES</div>
              <div className="det pb-5">Insurance against claims and losses arising from the ownership, maintenance, or use of aircraft, hangars, or airports including ...</div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center gap-2">
            <div className="png"><i className="fa-solid fa-scale-balanced" /></div>
            <div className="de">
              <div className="head pb-2">ENGINEERING POLICIES</div>
              <div className="det pb-5">Engineering insurance refers to the insurance that provides economic safeguard to the risks faced by the ongoing construction pr...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Policies