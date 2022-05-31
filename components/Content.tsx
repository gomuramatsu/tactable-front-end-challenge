import React, { useEffect, useContext } from 'react';
import {
  useQuery,
  useQueryClient,
} from 'react-query'
import { Stack } from '@chakra-ui/react'
import Post from './Post'
import styled from 'styled-components'
import { fetchPosts } from '../utils/api/posts'
import { PostContext } from '../utils/state/Context'
import Pagination from './Pagination'
import FullPost from './FullPost/FullPost'
import Link from 'next/link'

const ContentContainer = styled.div`
  flex: 1;
  margin: 20px 15% 20px 15%;
`;

const Content = () => {
  const [state, setState] = useContext(PostContext);

  const queryClient = useQueryClient()
  const { data, status } = useQuery('fetchPosts', fetchPosts);

  useEffect(() => {
    if (data) {
      setState({...state, posts: data, page: 0});
    }
  }, [data]);

  return (
    <ContentContainer>
      {status === 'loading' && (
        <div>loading...</div>
      )}

      {status === 'error' && (
        <div>error getting data</div>
      )}

      {status === 'success' && (
        <>
          <Stack direction='column'>
            {state.posts && state.posts.map((post:any, index: number) => {
              if ( index >= state.page * 5 && index < (state.page + 1) * 5) {
                return <Link href={"/" + post.id}>
                <a><FullPost
                  key={post.id}
                  post={post}
                />
                </a></Link>
              }
            })}
            hello
          </Stack>
          <Pagination />
        </>
      )}
      </ContentContainer>
  )
}

export default Content;
