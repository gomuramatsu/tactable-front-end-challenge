import React, { useContext } from 'react';
import styled from 'styled-components'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PostContext } from '../utils/state/Context'

const PaginationContainer = styled.div`
  margin: 36px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pagination = () => {
  const [state, setState] = useContext(PostContext);

  const pageNumber = state.posts && Math.ceil(state.posts.length / 5);

  const handlePageClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLInputElement;
    setState({...state, page: Number(target.value)});
    window.scrollTo(0, 0);
  }

  return (
    <PaginationContainer>
      <ButtonGroup gap='4'>
        {[...Array(pageNumber)].map((e, i) => 
          <Button key={'button-' + i} size='lg' colorScheme={state.page === i ? 'blue' : 'gray'} onClick={handlePageClick} value={i}>
            {i+1}
          </Button>
        )}
      </ButtonGroup>
    </PaginationContainer>
  )
}

export default Pagination;
