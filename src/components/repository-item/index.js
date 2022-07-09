import React from 'react'

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} rel="noreferrer" target="_blank">{fullName}</a>
    </div>
  )
}

export default RepositoryItem