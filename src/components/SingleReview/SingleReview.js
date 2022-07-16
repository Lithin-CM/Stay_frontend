import React from "react";
import "./SingleReview.css";

function SingleReview() {
  return (
    <div className="SingleReviewMainDiv d-flex">
      <img
        className="reviewProfile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLq94jSrrW2e3_jpucwE90GNFv5c1qUqdWw&usqp=CAU"
        alt=""
      />
      <div>
        <div className="reviewHead">
          <h5 className="m-2">musk</h5>
          <img
            className="SingleReviewStar m-2"
            src="https://www.pngmart.com/files/16/Gold-Star-PNG-Photos.png"
            alt="star"
          />
          <h5 className="m-2">3.6</h5>
        </div>
        <div className="reviewContent">
          <p>
            of a page when looking at its layout. The point of using Lorem Ipsum
            is tha t it has a more-or-less normal distribut ion of letters, as
            opposed to using 'Con tent here, content here', making it loo k like
            readable English. Many desktop publis hing packages and web page
            editors now us e Lorem Ipsum as their default model te xt, and a
            search for 'lorem ipsum' will unco ver many web sites still in their
            infancy. Various versio ns have evolved over the years, sometimes by
            accident, sometimes on pu rpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
