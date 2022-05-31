import React, { useEffect, useContext, useState } from 'react';
import {
  useQuery,
} from 'react-query'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { fetchPosts } from '../../utils/api/posts'
import { PostContext } from '../../utils/state/Context'
import FullPost from './FullPost'
import Comments from './Comments'

const MainContainer = styled.div`
  margin: 20px 15% 20px 15%;
  flex: 1;
`;

const FullPostMain = () => {
  const router = useRouter();

  const [state, setState] = useContext(PostContext);
  const [post, setPost] = useState<any>(null);

  const { data, status } = useQuery('fetchPosts', fetchPosts);

  useEffect(() => {
    if (data) {
      setState({...state, posts: data});
    }
  }, [data]);

  useEffect(() => {
    if (state.posts) {
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === router.query.postId) {
          setPost(state.posts[i]);
        }
      }
    }
  }, [state]);

  return (
    <>
      <MainContainer>
        {status === 'loading' && (
          <div>loading...</div>
        )}

        {status === 'error' && (
          <div>error getting data</div>
        )}

        {status === 'success' && (
          <>
            <FullPost post={post} />
            <Comments post={post} />
          </>
        )}
      </MainContainer>
    </>
  )
}

export default FullPostMain;
