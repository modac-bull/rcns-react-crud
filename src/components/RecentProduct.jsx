import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function RecentProduct() {
  let navigate = useNavigate();
  const [watcehd, setWatched] = useState([]);
  let product = useSelector((state) =>  state.product)
  console.log(product)

  useEffect(() => {
    let watchedLists = JSON.parse(localStorage.getItem('watched'))
    setWatched(watchedLists)
  }, []);

  return(
    <>
      <RecentWrap>
        <div className="top">CART {0}</div>
        <h3>최근본상품</h3>
        <ul className="list-products">
          {
            watcehd.map((v, i) => {
              let matchProduct = product.filter((p,i) => {
                if(p.id === v) {
                  return true
                }
              })
              console.log(matchProduct[0].imgs)
              return (
                <li  className="cursor-pointer"
                  onClick={() => { navigate('/subpage/detail/'+v) }}>
                  <img className="img-wrap" src={matchProduct[0].imgs} alt={matchProduct[0].title}></img>
                </li>
              )
            })
          }
          
        </ul>
      </RecentWrap>
    </>
  )
}


const RecentWrap = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  width: 300px;
  height: 500px;
  background-color: #fff;
  border: 1px solid black;
  .top {
    background-color: #000;
    color: #fff;
    text-align: center
  }
  h3 {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }
  .list-products {
    padding: 0 10px;
  }
  .img-wrap {
    /* width: 150px; */
    /* height: 150px; */
    border: 1px solid black;
    margin: 5px auto;
    object-fit: cover;
  }

`