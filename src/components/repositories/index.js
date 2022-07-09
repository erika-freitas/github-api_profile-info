import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name="4uc-projects" 
          linkToRepo="https://github.com/erika-freitas/4uc-projects"
          fullName="erika-freitas/4uc-projects" 
        />
        </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name="erika-freitas" 
          linkToRepo="https://github.com/erika-freitas/erika-freitas"
          fullName="erika-freitas/erika-freitas" 
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories