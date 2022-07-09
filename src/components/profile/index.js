import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

function Profile() {

  const {githubState} = useGithub();
  
  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar_url} alt="Avatar" />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserExtraInfo>
            <h3>Username:</h3>
            <a href={githubState.user.html_url} rel="noreferrer" target="_blank">{githubState.user.login}</a>
          </S.WrapperUserExtraInfo>
          <S.WrapperUserExtraInfo>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserExtraInfo>
          <S.WrapperUserExtraInfo>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserExtraInfo>
          <S.WrapperUserExtraInfo>
            <h3>Blog/Site:</h3>
            <a href={githubState.user.blog} rel="noreferrer" target="_blank">{githubState.user.blog}</a>
          </S.WrapperUserExtraInfo>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile