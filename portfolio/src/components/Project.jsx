import React from 'react'

import '../styles/project.scss'

const Project = ({props}) => {
  const project = {...props};
  return (
    <section className='project'>
    <h1>
      {project.name}
    </h1>
    <div>
    </div>
    <h2>Overview</h2>
    <div>
      <p>{project.overview}</p>
    </div>
    <h2>Background</h2>
    <div>

      {project.background.map((text) => {
        return (
          <p>
            {text}
          </p>
        )
      }      
    )}
    </div>
    </section>
  )
}

export default Project;
