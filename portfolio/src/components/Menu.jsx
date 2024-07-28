import { useState } from 'react'
import { Link } from 'react-router-dom';

import projects from './projects';

import '../styles/menu.scss'

const Menu = () => {
    const [focus,setFocus] = useState('');
    const [project,setProject] = useState({});

  return (
    <section className="menu">
        <div className='projects-list'>
            <div className='projects-container'>
            {
                projects.map((project,index) => {
                    return (
                        <div 
                            key={index} 
                            className={focus===index ?'menu-row menu-row-focus' :'menu-row'}
                            onMouseEnter={() => {
                                setFocus(index)}}
                            onClick = {() => {setProject(project)}}
                        >
                            <div className='menu-img-container'>
                                <img
                                    src={project.image}
                                />
                            </div>
                            <table key={index} className='project-table'>
                                <tbody >
                                    <tr>
                                        <td className='project-label'>Project:</td>
                                        <td className='project-value'>{project.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='project-label'>About: </td>
                                        <td className='project-value'>{project.description}</td>
                                    </tr>
                                    <tr>
                                        <td className='project-label'>{`Tech: `} </td>
                                        <td className='project-value'>{project.tech}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
            {/*<div className='menu-row'>
                <table className='project-table'>
                    <tbody>
                        <tr className='project-label'>Coming Soon...</tr>
                        <tr className='project-value'>Check back later to see what new projects I've been working on!</tr>
                    </tbody>
                </table>
            </div>*/}
            </div>
            <aside className='aside'>
                <div className='project-control'>
                    <div className='project-control-label'>Select Project</div>
                    <ul className='project-control-list'>
                        {
                            projects.map((project,index) => {
                                return(
                                    <li key={index}
                                        onMouseEnter={() => {
                                            setFocus(index)}}
                                        onClick = {() => {setProject(project)}}
                                    >
                                        <i className={`rightArrow ${focus===index ? 'visible' : 'hidden'}`}
                                        />
                                        {project.name}
                                    </li>
                                )
                            }
                            )
                        }
                        <li>
                            <Link to='/' className='link'> Quit </Link>
                        </li>
                    </ul>
                </div>
                <div className='current-links'>
                    <ul>
                        {!project.gitLink && !project.liveLink && <div>Select Project to View Links</div>}
                        {project.gitLink && <li><a href={project.gitLink} target="_blank" rel="noopener noreferrer" className='link'>View Code Source</a></li>}
                        {project.liveLink && <li><a href={project.liveLink} target="_blank" className='link'>View Live Link</a></li>}
                    </ul>
                </div>
            </aside>
            
        </div>
    </section>
  );
}

export default Menu
