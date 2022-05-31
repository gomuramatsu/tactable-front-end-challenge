import React, { useState, createContext, FC, Dispatch, SetStateAction } from 'react'

interface IState {
  posts: any,
  page: number
}

const initialState : IState = {
  posts: null,
  page: 0
}

interface Props {
  children: React.ReactNode;
}

export const PostContext = createContext<[IState, Dispatch<SetStateAction<IState>>] | null>(null);

export const PostProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);

  return (
    <PostContext.Provider
      value={[state, setState]}
    >
      {children}
    </PostContext.Provider>
  );
};
