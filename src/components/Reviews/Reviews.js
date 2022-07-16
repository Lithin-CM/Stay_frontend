import React from 'react'
import SingleReview from '../SingleReview/SingleReview'
import "./Reviews.css"

function Reviews() {
  return (
    <div className='ReviewMainDiv text-white'>
      <div className='ReviewHead d-flex '>
          <h2>Rating and Reviews</h2>
          <div className='d-flex'>
            <img style={{width: "5vh", height: "5vh", background: "white", marginRight: "1vh"}} src="https://res.cloudinary.com/lithin-stay/image/upload/v1653735368/stay/icons8-rating-24_fusvnu.png" alt="" />
            <h3>3.5</h3>
          </div>
      </div>
      <hr />
      <div className='reviews'>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
          <SingleReview/>
      </div>
    </div>
  )
}

export default Reviews
