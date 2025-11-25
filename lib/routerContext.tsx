import React, { createContext, useContext, useState } from 'react';

// Simulating Next.js App Router navigation for this environment
type RouterContextType = {
  path: string;
  push: (path: string) => void;
};

const RouterContext = createContext<RouterContextType>({ path: '/', push: () => {} });

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  const [path, setPath] = useState('/');
  
  const push = (newPath: string) => {
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  );
};