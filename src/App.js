import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from './hooks/github-hooks';

function App() {
  const {githubState} = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (<p>Loading...</p>) : (
          <>
            <Profile/>
            <Repositories/>
          </>
        )}
      </> : <div>Search for a user to see its information</div> }
    </Layout>
  );
}

export default App;
