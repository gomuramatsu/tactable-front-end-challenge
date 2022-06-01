import { render, screen , fireEvent, cleanup, waitFor} from '@testing-library/react'
import Home from '../pages/index'
import Navbar from '../components/Navbar'
import FullPost from '../components/FullPost/FullPost'
import '@testing-library/jest-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

describe('Home', () => {
  it('Render home page elements - navbar, footer', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const navbarLogo = screen.getByRole('img', {
      src: /logo.png/i,
    })

    expect(navbarLogo).toBeInTheDocument()

    const heading = screen.getByRole('img', {
      src: /Tactablog by Go Muramatsu/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Post Page', () => {
  it('Render post', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FullPost />
      </QueryClientProvider>
    );
  })
})