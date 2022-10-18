import { useState } from "react"

import { useSelector } from "react-redux"

import { useParams, useNavigate } from "react-router-dom"

import styled from "@emotion/styled"

import FooterContainer from "components/FooterContainer"
import HeaderContainer from "components/HeaderContainer"
import TabContainer from "components/TabContainer"

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

export default function CommonDetails() {
  let navigate = useNavigate()
  let {id} = useParams()
  const [tab] = useState( tabMenu );
  const lists = useSelector((state) => state.board);
  console.log(lists)

  return( 
    <>
      <HeaderContainer />
      <PageContentWrap >
        <div>
          <h2 className="common-sub-title">고객센터</h2>
        </div>
        <TabContainer tab={tab} status={'notice'}/>
        <ContentWrap>
          <TextWrap>
            <p>{lists[id].regDate}</p>
            <h3>
              {
                lists[id].type === 'notice' 
                ? <span className="badge-notice">공지</span>
                : null
              }
              {lists[id].title}
            </h3>
          </TextWrap>
          <TextContent>{lists[id].content}</TextContent>
        </ContentWrap>
        <ButtonList onClick={() => { navigate('/common') }}>목록으로</ButtonList>
      </PageContentWrap>
      <FooterContainer />
    </>
  )
}

const PageContentWrap = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  padding-bottom: 120px;
  .common-sub-title {
    margin-top: 50px;
    font-size: 35px;
    font-weight: 700;
  }
`

const ContentWrap = styled.div`
  padding: 30px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;

`

const TextWrap = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #888;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    line-height: 1.3;
  }
  .badge-notice {
    display: inline-block;
    vertical-align: top;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    padding: 2px 4px;
    margin-right: 10px;
    border-radius: 4px;
  }
`

const TextContent = styled.p`
  line-height: 1.4;

`

const ButtonList = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px;
  margin-top: 40px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`