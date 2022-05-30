import { Heading, Text } from '@chakra-ui/react'
import styled from 'styled-components'

const PostContainer = styled.div`
  border-radius: 6px;
  border: 1px solid darkgray;
  padding: 10px 10px 10px 10px;
  background-color: white;
`;

const Post = ({ title, desc, ...rest }: {title: string, desc: string}) => {
  return (
    <PostContainer>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </PostContainer>
  )
}

export default Post;