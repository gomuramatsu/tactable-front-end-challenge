import { render, screen} from '@testing-library/react'
import Home from '../pages/index'
import FullPost from '../components/FullPost/FullPost'
import Comments from '../components/FullPost/Comments'
import '@testing-library/jest-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import postData from '../utils/test/postData';
import { fetchPosts } from '../utils/api/posts';
import { Post } from '../utils/types/post';

describe('General', () => {
  let cachedFetch: any;

  beforeEach(() => {
    cachedFetch = global.fetch;
    global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(postData),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = cachedFetch;
  });

  it('Render home page navbar, footer', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const navbarLogo = screen.getByRole('img', {
      src: /logo.png/i,
    })
    const heading = screen.getByRole('img', {
      src: /Tactablog by Go Muramatsu/i,
    })

    expect(navbarLogo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  describe('Fetch Posts', () => {
    let posts: Post[];
    
    beforeEach(async () => {
      posts = await fetchPosts();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Render home page navbar, footer', () => {
      const queryClient = new QueryClient();
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
  
      const navbarLogo = screen.getByRole('img', {
        src: /logo.png/i,
      })
      const heading = screen.getByRole('img', {
        src: /Tactablog by Go Muramatsu/i,
      })
  
      expect(navbarLogo).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });  
});

describe('Post', () => {
  let cachedFetch: any;

  beforeEach(() => {
    cachedFetch = global.fetch;
    global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(postData),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = cachedFetch;
  });

  it('Render post without passing in fetched data', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FullPost post={null}/>
      </QueryClientProvider>
    );

    expect(screen.queryByText(/title 1/i)).toBeNull();
    expect(screen.queryByText(/5\/19\/2021/i)).toBeNull();
    expect(screen.queryByText(/3 comments/i)).toBeNull();
  });

  it('Render comment without passing in fetched data', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Comments post={null}/>
      </QueryClientProvider>
    );

    expect(screen.queryByText(/Est minus vel repellat accusamus/i)).toBeNull();
    expect(screen.queryByText(/4\/25\/2021/i)).toBeNull();
    expect(screen.queryByText(/7\/1\/2021/i)).toBeNull();
    expect(screen.queryByText(/1\/4\/2021/i)).toBeNull();
  })

  describe('Fetch Posts', () => {
    let posts: Post[];
    
    beforeEach(async () => {
      posts = await fetchPosts();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Render post and check if post content exists.', () => {
      const queryClient = new QueryClient();
      render(
        <QueryClientProvider client={queryClient}>
          <FullPost post={posts[0]}/>
        </QueryClientProvider>
      );
      
      const heading = screen.getByRole('heading', { level: 2 });
      const title1 = screen.getByText(/title 1/i);
      const date = screen.getByText(/5\/19\/2021/i);
      const numComments = screen.getByText(/3 comments/i);
      
      expect(heading).toBeInTheDocument();
      expect(title1).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(numComments).toBeInTheDocument();
    });

    it('Render comment and check if comment content exists.', () => {
      const queryClient = new QueryClient();

      render(
        <QueryClientProvider client={queryClient}>
          <Comments post={posts[0]}/>
        </QueryClientProvider>
      );
      
      const textareaPlaceholder = screen.getByRole('textbox');
      const desc2 = screen.getByText(/Est minus vel repellat accusamus/i);
      const date1 = screen.getByText(/4\/25\/2021/i);
      const date2 = screen.getByText(/7\/1\/2021/i);
      const date3 = screen.getByText(/1\/4\/2021/i);

      expect(textareaPlaceholder).toBeInTheDocument();
      expect(desc2).toBeInTheDocument();
      expect(date1).toBeInTheDocument();
      expect(date2).toBeInTheDocument();
      expect(date3).toBeInTheDocument();
    });
  })
});
