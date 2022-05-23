import { createContext, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [navSpecs, setNavspecs] = useState([
    {
      id: 1,
      name: 'ABOUT',
      link: '/main-page',
    },
    {
      id: 2,
      name: 'PROJECTS',
      link: '/main-page/projects',
    },
    {
      id: 3,
      name: 'CONTACT',
      link: '/main-page/contact',
    },
  ]);
  return (
    <GlobalContext.Provider value={{ navSpecs: [navSpecs, setNavspecs] }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
