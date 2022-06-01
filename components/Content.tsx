import React, { useEffect } from 'react';
import {
  useQuery,
} from 'react-query'
import { Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import { fetchPosts } from '../utils/api/posts'
import { useGlobalContext } from  '../utils/state/Context'
import Pagination from './Pagination'
import FullPost from './FullPost/FullPost'
import Link from 'next/link'
import { Post, Comment } from '../../utils/types/post'

const ContentContainer = styled.div`
  flex: 1;
  margin: 20px 15% 20px 15%;
`;

const Content = () => {
  const { posts, setPosts, page, setPage } = useGlobalContext();

  const { data, status } = useQuery('fetchPosts', fetchPosts);

  useEffect(() => {
    if (data) {
      setPosts(data);
      setPage(0);
    }
  }, [data, setPage, setPosts]);

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
            {posts && posts.map(( post: Post, index: number ) => {
              if ( index >= page * 5 && index < (page + 1) * 5) {
                return (
                <Link href={"/" + post.id} key={post.id}>
                  <a>
                    <FullPost
                      key={post.id}
                      post={post}
                    />
                  </a>
                </Link>
                );
              }
            })}
          </Stack>
          <Pagination />
        </>
      )}
      </ContentContainer>
  )
}

export default Content;
