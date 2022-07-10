import React from 'react';
import * as S from './styled';

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <h4>full name:</h4>
      <S.WrapperLink href={linkToRepo} rel="noreferrer" target="_blank">{fullName}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem