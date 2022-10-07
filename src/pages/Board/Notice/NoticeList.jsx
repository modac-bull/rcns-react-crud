import { css } from '@emotion/react'
import styled from '@emotion/styled'



import HeaderContainer from "../../../components/HeaderContainer";
import FooterContainer from '../../../components/FooterContainer';


/* 
axios 활용해서 처리해보기 -> 추후 과제
- fetch 개념 이해하기

*/
const ajax = new XMLHttpRequest();
const MAX_PAGINATION = 10;
let CURRENT_PAGE = 1;
const NEWS_URL = `https://api.hnpwa.com/v0/news/${CURRENT_PAGE}.json`
ajax.open(
  'GET', // GET 방식
  NEWS_URL,
  false // 동기적으로 처리하겠다.
);
ajax.send(); // 데이터를 가져옴
const newsFeed = JSON.parse(ajax.response); // 

console.log(newsFeed);



/* 
클릭했을 때 내용이 변경되게 하기 위해서 필요한 개념
-> HOOK? 
*/
function handleClick(e, index) {
  e.preventDefault();
}

export default function NoticeList() {
  /* 
    1. return 문 안에 for문 사용할 수 없어 함수를 만들어 return문에 반복된 jsx 배열이 포함되도록 하였음
    2. 이렇게 될 경우 함수 생성 위치는 어디가 좋을까?
  */
  function RenderPagniation() {
    const result  = [];
    for(let i = 0; i < MAX_PAGINATION ; i++) {
      result.push(
        CURRENT_PAGE === i+1 ? 
          <span key={i+1} className={"ml-5 mr-5 font-bold"} onClick={(e) => handleClick(e, i)}>{i+1}</span>
        : 
          <span key={i+1} className={"ml-5 mr-5 text-gray-400"} onClick={(e) => handleClick(e, i)}>{i+1}</span>
      )
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
        <h1 className="text-3xl text-center font-bold mb-10 ">공지사항 게시판</h1>
        <List className="bg-gray">
          { (newsFeed.length === 0) ? (
            <p className="text-l text-center mt-12 mb-12 font-bold">게시물이 없습니다.</p>
          ) : (
            newsFeed.map((list) => (
              NoticeItem(list)
            ))
          )}
        </List>
        {/* 페이지네이션 */}
        <RenderPagniation></RenderPagniation>
      </PageWrap>
      <FooterContainer />
    </>
  ) 
}

function NoticeItem(list) {
  console.log(list.type);

  function timeToDate(date) {
    return (new Date(date * 1000)).toUTCString();
  }

  return(
    <Item key={list.id} className="py-4 flex">
      <div className="ml-3">
        <p className="text-m font-medium text-gray-900">{list.title}</p>
        <p className="text-sm text-gray-500">{list.user}</p>
        <p className="text-xs text-gray-300">{timeToDate(list.time)}</p>
      </div>
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