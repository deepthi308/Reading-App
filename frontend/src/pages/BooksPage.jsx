import React from 'react'
import styled from 'styled-components'
import {data} from "../data/data"
import Book from '../components/BooksPage/Book'

const BooksPage = ({purpleMode,setPurpleMode}) => {
  return (
    <BooksContainer className={`book ${purpleMode?"purple_booktype":""}`}>
      <div className={`booktype`}>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Adventure</h3>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Classics</h3>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Fantasy</h3>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Fiction</h3>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Horror</h3>
        <h3 className={`${purpleMode?"purple_menu":""}`}>Homour</h3>
      </div>
      <div className="books">
        {data.map((item, index) => {
          const { title,category,short,readMore,image} = item;
          return <Book title={title} category={category} short={short} readMore={readMore} image={image} purpleMode={purpleMode} />
        })}
      </div>
    </BooksContainer>
  )
}

const BooksContainer = styled.div`
.purple_menu{
   background-color: #3e0569;
}
overflow-y:scroll;
`

export default BooksPage