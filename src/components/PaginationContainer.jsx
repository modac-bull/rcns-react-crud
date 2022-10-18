import styled from "@emotion/styled"

export default function PaginationContainer({
  currentPage,
  pageTotal
}) {
  console.log(currentPage, pageTotal)
  return(
    <Pagination>
      {
        <RenderPagination 
          currentPage={currentPage}  
          pageTotal={pageTotal} 
        />
      }
    </Pagination>
  )
}

function RenderPagination({currentPage, pageTotal}) {
  console.log(currentPage)
  const result = [];
  for (let i = 0 ; i < pageTotal ; i ++) {
    result.push(
      <span className={currentPage === i+1 ? 'active': null}>{i+1}</span>
      
    )
  }
  return result;
};

const Pagination = styled.div`
  padding : 20px 0;
  display: flex;
  justify-content: center;
  span {
    margin: 0 7px;
    font-size: 14px;
    color: #888;
    &.active {
      font-weight: 700;
      color: #000;
    }
  }
`