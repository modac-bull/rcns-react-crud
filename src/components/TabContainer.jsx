import styled from "@emotion/styled"
import { css } from "@emotion/react"


import { Link } from "react-router-dom"


export default function TabContainer({
  tab,
  status // active된 메뉴
}) {
  return(
    <TabWrap>
      {
        tab.map((val, idx) => {
          console.log(status, val.id)
          return (
            <TabItem 
              key={idx} 
              to={val.link}
              active={status === val.id ? 'true' : null}
            >
              {val.title}
            </TabItem>
          )
        })
      }
    </TabWrap>
  )
}



const TabWrap = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`

const TabItem = styled(Link)`
  font-size: 20px;
  margin-right: 15px;
  padding-bottom: 20px;
  ${props => 
    props.active &&
    css`
      font-weight: 700;
      border-bottom: 3px solid black;
    `  
  }
`