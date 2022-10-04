import HeaderContainer from "../../../components/HeaderContainer"

/* 
axios 활용해서 처리해보기 -> 추후 과제
- fetch 개념 이해하기

*/
const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json" 
ajax.open(
  'GET', // GET 방식
  NEWS_URL,
  false // 동기적으로 처리하겠다.
);
ajax.send(); // 데이터를 가져옴
const newsFeed = JSON.parse(ajax.response);

console.log(newsFeed);


export default function NoticeList() {
  return (
    <>
      <HeaderContainer />
      <div>게시판 리스트</div>
      
    </>
  )
}