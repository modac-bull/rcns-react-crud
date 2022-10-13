import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

import { timeToDate } from 'utils';

import axios from 'axios'; // axios

import HeaderContainer from "components/HeaderContainer";
import FooterContainer from 'components/FooterContainer';


/* 
axios 활용해서 처리해보기 -> 추후 과제
- fetch 개념 이해하기

// fetch('https://codingapple1.github.io/shop/data2.json')
// .then(result => result.json())
// .then(data=> {
//   console.log(data, 'fetch')
// })

*/
const MAX_PAGINATION = 10; // 최대 페이지네이션 숫자
let CURRENT_PAGE = 1; // 초기 데이터
const NEWS_URL = `https://api.hnpwa.com/v0/news/${CURRENT_PAGE}.json`



export default function NoticeList(props) {
  // const [list, setList] = useState([]); // 게시판 데이터
  const [index, setIndex] = useState(CURRENT_PAGE); // 데이터 
  console.log(props.list)
  
  useEffect(() => { // mount시 1회 실행
    console.log('useEffect')

    fetch(NEWS_URL,{
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}, // CORS 정책 이슈 ..? 뭔지 모르겠음
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }  
      throw new Error('Network response was not ok.');
    }).then((data) => {
      props.setList(data); // 
    }).catch((error) => {
      console.log(`error: ${error}`)
    });

    
  }, [])
  /* 
    1. return 문 안에 for문 사용할 수 없어 함수를 만들어 return문에 반복된 jsx 배열이 포함되도록 하였음
    2. 이렇게 될 경우 함수 생성 위치는 어디가 좋을까?
  */
  function RenderPagniation() {
    const result  = [];
    for(let i = 0; i < MAX_PAGINATION ; i++) {
      result.push(
        index === i+1 ? // 현재 인덱스 일치할 경우 bold
          <span key={i+1} className={"ml-5 mr-5 font-bold cursor-pointer"} onClick={(e) => handleClick(e, i)}>{i+1}</span>
        : 
          <span key={i+1} className={"ml-5 mr-5 text-gray-400 cursor-pointer"} onClick={(e) => handleClick(e, i)}>{i+1}</span>
      )
    }

    /* 
    클릭했을 때 내용이 변경되게 하기 위해서 필요한 개념
    -> HOOK? 
    */
    function handleClick(e, index) {
      setIndex(index+1); // 페이지네이션
      e.preventDefault();
      fetch(`https://api.hnpwa.com/v0/news/${index+1}.json`, {
        // crossDomain:true,
        // method: 'GET',
        // headers: {
        //   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        // }, // CORS 정책 이슈 ..? 뭔지 모르겠음
      })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }  
        throw new Error('Network response was not ok.');
      }).then((data) => {
        props.setList(data); // 
      }).catch((error) => {
        console.log(`error: ${error}`)
      });
      // axios.get(`https://api.hnpwa.com/v0/news/${index+1}.json`, {
      //   headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',}, 
      // })
      // .then((data) => {
      //   props.setList(data.data)
      // })
      // .catch(() => { 
      //   // AJAX 요청 숨기기. 예외처리 코드
      //   console.log("실패했을 경우")
      // })
    }

    return (
      <div className="mt-10 text-center">
        {result}
      </div>
    )
      
  }



  return (
    <>
      <HeaderContainer />
      <PageWrap>
        <h1 className="text-3xl text-center font-bold mb-10 ">게시판 실습</h1>
        <List className="bg-gray">
          { (props.list.length === 0) ? (
            <p className="text-l text-center mt-12 mb-12 font-bold">게시물이 없습니다.</p>
          ) : (
            props.list.map((props) => {
              {/* return NoticeItem(props) // 이렇게 할 경우 함수컴포넌트에서 .변수명 으로 한번 더 타고 들어갈 필요는 없는것 같다. */}
              return <NoticeItem key={props.id}  list={props}></NoticeItem>
            })
          )}
        </List>
        {/* 페이지네이션 */}
        <RenderPagniation></RenderPagniation>
      </PageWrap>
      <FooterContainer />
    </>
  ) 
}

function NoticeItem(props) {
  // console.log(props)
  // console.log(props.type);


  return(
    <Item className="py-4 flex">
      <LinkItem
        to={'/notice/details/'+props.list.id}
      >
        <div className="ml-3">
          <p className="text-m font-medium text-gray-900">
            {props.list.title} 
            <span className="text-sm ml-1 font-medium text-gray-500">
              ({props.list.comments_count})
            </span>
          </p>
          <p className="text-sm text-gray-500">{props.list.user}</p>
          <p className="text-xs text-gray-300">{timeToDate(props.list.time)}</p>
        </div>
      </LinkItem>
    </Item>
  )
}


const PageWrap = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 1500px;
`
const List = styled.ul`
  border: 1px solid #ddd;
  border-radius: 5px;
`

const Item = styled.li`
  :not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`
const LinkItem = styled(Link)`
  cursor: pointer
`