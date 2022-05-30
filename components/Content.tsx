import { Stack } from '@chakra-ui/react'
import Post from './Post'
import styled from 'styled-components'

const ContentContainer = styled.div`
  flex: 1;
  margin: 20px 15% 20px 15%
`;

const Content = () => {
  return (
    <ContentContainer>
      <Stack spacing={'24px'} direction='column'>
        <Post
          title='Title 1'
          desc='Desc 1'
        />
        <Post
          title='Title 2'
          desc='Desc 2'
        />
      </Stack>
    </ContentContainer>
  )
}

export default Content;