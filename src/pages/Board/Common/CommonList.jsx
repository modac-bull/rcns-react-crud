import { useState } from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

import FooterContainer from "components/FooterContainer"
import HeaderContainer from "components/HeaderContainer"
import TabContainer from "components/TabContainer"
import PaginationContainer from "components/PaginationContainer"

import dummyLists from "assets/data/dummy_lists" // 임시 데이터

const tabMenu = [ // 탭메뉴 임시 데이터
  {
    'id' : 'home',
    'title' : '홈',
    'link' : '/',
    'type' : 'page'
  },
  {
    'id' : 'notice',
    'title' : '공지사항',
    'link' : '/',
    'type' : 'page'
  },
  {
    'id' : 'faq',
    'title' : '자주묻는질문',
    'link' : '/',
    'type' : 'link'
  }
]

export default function CommonList() {
  const [tab] = useState( tabMenu );
  const lists = useSelector((state) => {return state.board});
  const [pageOption , setPageOption] = useState({
    'currentPage' : 1,
    'pageTotal' : 5
  });

  return(
    <>
      <HeaderContainer />
      <PageContentWrap>
        <div>
          <h2 className="common-sub-title">고객센터</h2>
        </div>
        <TabContainer tab={tab} status={'notice'}/>
        <BoardWrap>
          {
            lists.length > 0 ? 
            lists.map((val, idx) => {
              return <Lists props={val} />
            })
            : <BoardItem nocontent>게시물이 업습니다.</BoardItem>
          }
          <PaginationContainer 
            currentPage={pageOption.currentPage}
            pageTotal={pageOption.pageTotal}
            pageLimit={pageOption.limit}
          />
        </BoardWrap>
      </PageContentWrap>
      <FooterContainer />
    </>
  )
}

function Lists({props}) {
  console.log(props)
  return(
    <BoardItem 
      key={props.id}
      to={'/common/details/'+props.id}
    >
      
      <p className="ell">
        {
          props.type === 'notice' 
          ? <span className="badge-notice">공지</span>
          : null
        }
        {props.title}
      </p>
      <p>
        {props.regDate}
      </p>
    </BoardItem>
  )
}


const PageContentWrap = styled.div`
  min-height: 100vh;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  .common-sub-title {
    margin-top: 50px;
    font-size: 35px;
    font-weight: 700;
  }
`

const BoardWrap = styled.div`
  border: 1px solid #ddd;
  border-radius : 8px;
  margin-bottom: 100px;
`

const BoardItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 35px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  ${props => 
    props.nocontent && // nocontent 라는 props가 있을 때 스타일 구분
    css`
      justify-content: center;
      text-align : center;
    `
  };
  .ell {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 20px;
  }
  .badge-notice {
    display: inline-block;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 2px 4px;
    margin-right: 10px;
    border-radius: 4px;
  }
`