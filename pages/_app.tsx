import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { PostProvider } from "../utils/state/Context";
import styled from 'styled-components'

const Container = styled.div`
  background-color: #DAE0E6;
  text-align:center;
  display:flex;
  flex-direction:column;
  min-height:100vh;
  text-align: left;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <PostProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </PostProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
