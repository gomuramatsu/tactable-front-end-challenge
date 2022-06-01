import { Textarea, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { Post, Comment } from '../../utils/types/post'

const CommentContainers = styled.div`
  border-radius: 6px;
  border: 1px solid darkgray;
  padding: 20px 36px 10px 36px;
  background-color: white;
`;

const CommentContainer = styled.div`
  margin: 8px 0 8px 0;
`;

const Description = styled.div`
  margin: 12px 0 8px 0;
`;

const Divider = styled.div`
  border-top: 1px solid #bbb;
  margin: 16px 5% 16px 5%;
`;

const Comments = (props: { post: Post | null }) => {
  return (
    <>
      {props.post ? 
        <CommentContainers>
          { props.post && props.post.comments ? 
            <>
              <Textarea isDisabled placeholder='Log in or sign up to comment' />
              {props.post.comments.map((comment : Comment, index : number) => {
                return (
                <CommentContainer key={'comment-' + comment.id}>
                  {index === 0 ? null : <Divider/>}
                  <Description>
                    {comment.description}
                  </Description>
                  <Text mt={0} color='gray.500'>{'' + new Date(comment.createdAt).toLocaleDateString("en-US")}</Text>
                </CommentContainer>);
              })}
            </>
            : null
          }
        </CommentContainers>
      : null}
    </>
  )
}

export default Comments;
