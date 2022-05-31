import { createContext, useContext } from "react"

export interface GlobalContent {
  posts: any[],
  setPosts:(c: any[]) => void,
  page: number,
  setPage:(c: number) => void,
}

export const GlobalContext = createContext<GlobalContent>({
  posts: [],
  setPosts: () => {},
  page: 0,
  setPage: () => {}
})

export const useGlobalContext = () => useContext(GlobalContext)
