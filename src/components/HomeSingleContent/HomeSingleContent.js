import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { urlKey } from '../../utils';
import "./HomeSingleContent.css";


function HomeSingleContent({data}) {
  

  return (
    <div className='mainComp shadow p-2  mb-5 bg-white'>
     <Link style={{textDecoration:"none",color:"black"}}
           to= "/hostle"
           state={{  id: data.id }}
          >
      <img className='image' src={data.image && urlKey + data.image } alt="hostel" />
        <div className='d-flex justify-content-between '>
          <h5 className='hostelName'>{data.Hostel_name ? data.Hostel_name : data.roomCatecoryName}{data.sharing && '( '}{data.sharing}{data.sharing && ' sharing)'}</h5>
            <div className='d-flex align-items-center m-2'>
              <h4 className='m-0'>{data.rating }</h4>
              <img className='starImage' src="https://res.cloudinary.com/lithin-stay/image/upload/v1653735368/stay/icons8-rating-24_fusvnu.png" alt="star" />
            </div>
        </div>
        </Link>
    </div>
  )
}

export default HomeSingleContent
