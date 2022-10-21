import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {useState, useEffect, useRef} from 'react';

import {Link} from 'react-router-dom'

import { timeToDate } from 'utils';

import axios from 'axios'; // axios

import HeaderContainer from "components/HeaderContainer";
import FooterContainer from 'components/FooterContainer';

const MAX_PAGINATION = 10; // 최대 페이지네이션 숫자
let CURRENT_PAGE = 1; // 초기 데이터
const NEWS_URL = `https://api.hnpwa.com/v0/news/${CURRENT_PAGE}.json`;

function getData(index, props) {
  return axios.get(
    `https://api.hnpwa.com/v0/news/${index}.json`, {
    headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',}, 
  })
  .then((data) => {
    let copy = [...props.list]
    // copy.push(data.data)
    copy = [...copy, ...data.data]
    props.setList(copy)
  })
  .catch(() => { 
    // AJAX 요청 숨기기. 예외처리 코드
    console.log("실패했을 경우")
  })
}

/* 
원하는 기능 : 스크롤해서 더보기 버튼이 보였을 때 리스트 30개를 추가 시킨다.
1. 스크롤했을 때 더보기 버튼이 보일 경우 index를 + 1 한다.
  -> 뷰포트 기준으로 더보기 버튼 들어왔을 때 index + 1 을 한다. => useEffect({}, [y]) 로 처리했으나, 이럴 경우 한번 조건에 만족했을 때 2 ~ 3번 반복호출되는 이슈 있음
  -> 해결 : Throttle 개념 사용해야할듯?
2. index가 변했으니 setList를 한다 => getData(index, props) 함수로 처리
*/


export default function NoticeAjaxList(props) {
  // const [list, setList] = useState([]); // 게시판 데이터
  const [index, setIndex] = useState(CURRENT_PAGE); // 데이터 
  // const [flag, setFlag] = useState(false); 
  const btnRef = useRef(); // useRef

  const setScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if(index < 10 ) {
      console.log(document.documentElement.scrollHeight)
      if( scrollTop + clientHeight >= scrollHeight) {
        // setFlag(true);
        setIndex(index+1); //  다음 목록 불러옴
        console.log(index);
      }
    };
  }
  
  useEffect(() => { // mount시 1회 실행
    getData(1, props) ;
    console.log('mount')
  }, []);


  useEffect(() => {
    getData(index, props);
    // setFlag(false);
  }, [index]);

  useEffect(() => {
    window.addEventListener('scroll', setScroll);
    return () => {
      window.removeEventListener('scroll', setScroll); // addEventListener 함수를 삭제
    }
  })
  
  /* 
  클릭했을 때 내용이 변경되게 하기 위해서 필요한 개념
  -> HOOK? 
  */
  function handleClick(e, index) {
    e.preventDefault();
    setIndex(index+1); // 페이지네이션
    getData(index, props) ;
  }

  return (
    <>
      <HeaderContainer />
      <PageWrap>
        <h1 className="text-3xl text-center font-bold mb-10 ">게시판 무한스크롤</h1>
        <List className="bg-gray">
          { (props.list.length === 0) ? (
            <p className="text-l text-center mt-12 mb-12 font-bold">게시물이 없습니다.</p>
          ) : (
            props.list.map((props) => {
              return <NoticeItem key={props.id}  list={props}></NoticeItem>
            })
          )}
        </List>
        {/* 더보기 버튼 */}
        {
          (index !== MAX_PAGINATION )
          ? <ButtonMore onClick={(e) => handleClick(e, index)} ref={btnRef}>더보기</ButtonMore>
          : null
        }
        
      </PageWrap>
      <FooterContainer />
    </>
  ) 
}

function NoticeItem(props) {
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
  cursor: pointer;
`

const ButtonMore = styled.button`
  display: block;
  text-align: center;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid black;

`