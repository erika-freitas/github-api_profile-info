import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext ({
  loading: false,
  user: { },
  repositories: [],
  starred: [],
})

function GithubProvider({children}) {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      avatar_url: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_repos: 0,
      public_gists: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
    
    
    api.get(`users/${username}`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        hasUser: true, 
        user: {
          avatar_url: data.avatar_url,
          login: data.login,
          name: data.name,
          html_url: data.html_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
        } 
      }));
    })
    .finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
    });
  }
  
  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  }
  
  return (
    <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
  )
}

export default GithubProvider;