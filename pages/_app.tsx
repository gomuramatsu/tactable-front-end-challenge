import { useState } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'
import { GlobalContext } from '../utils/state/Context';

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

  const [posts, setPosts] = useState<any[]>([])
  const [page, setPage] = useState<number>(0)

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalContext.Provider value={{ posts, setPosts, page, setPage }}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </GlobalContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
