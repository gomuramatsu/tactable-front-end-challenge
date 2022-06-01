import { Heading, propNames, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { Post, Author } from '../../utils/types/post'

const PostContainer = styled.div`
  border-radius: 6px;
  border: 1px solid darkgray;
  padding: 24px 36px 24px 36px;
  background-color: white;
  margin: 12px 0 12px 0;

  &:hover {
    border: 1px solid black;
  }
`;

const AuthorImage = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  margin: 0 12px 0 0;
`;

const AuthorListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AuthorContainer = styled.div`
  margin: 16px 16px 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const FullPost = (props: { post: Post | null }) => {
  return (
    <>
      {props.post ? 
        <PostContainer>
          <Heading fontSize='xl'>{props.post.title}</Heading>
          <AuthorListContainer>
          {props.post.authors.map((author : Author) => {
            return (
              <AuthorContainer key={author.id}>
                <AuthorImage src={author.avatar} />
                <p>{author.name}</p>
              </AuthorContainer>
            );
          })}
          </AuthorListContainer>
          {'' + new Date(props.post.createdAt).toLocaleDateString("en-US")}
          <Text mt={4}>{props.post.description}</Text>
          <Text mt={1} color='gray.500'>
            {props.post.comments ? 
              <>{
                props.post.comments.length + (props.post.comments.length === 1 ? ' comment' : ' comments')
              }</> 
              : '0 Comments'
            }
          </Text>
        </PostContainer>
      : null}
    </>
  )
}

export default FullPost;
