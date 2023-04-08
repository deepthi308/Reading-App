import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ title, category, short, readMore ,image,purpleMode}) => {
    const veryShort = short.slice(0, 78);
  return (
    <div className={`_book ${!purpleMode?"blue_book":""}`}>
          <div className="card-top">
              <img src={image} alt="Image" />
          </div> 
          <div className="card-bottom">
              <h2>{title}</h2>
              <h3>{category}</h3>
              <p className="short">
                  {veryShort}.....<Link to="read" className='card-btn'>ReadMore</Link>
              </p>
          </div>
    </div>
  )
}

export default Book