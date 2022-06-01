export interface Author {
  id: string,
  avatar: string,
  name: string,
  createdAt: string
}

export interface Comment {
  id: string,
  description: string,
  createdAt: string
}

export interface Post {
  title: string,
  description: string,
  authors: Author[],
  comments: Comment[],
  createdAt: string
}