import { useState } from 'react'
import { Link } from 'react-router-dom';

import projects from './projects';

import '../styles/menu.scss'
import Project from './Project';

const Menu = () => {
    const [focus,setFocus] = useState('');
    const [project,setProject] = useState({});

  return (
    <section className="menu">
        <div className='projects-list'>
            <div className='projects-container'>
            { !project.name ?
                projects.map((prj,index) => {
                    return (
                        <div className='project-container'>
                            <div 
                                key={index} 
                                className={focus===index ?'menu-row menu-row-focus' :'menu-row'}
                                onMouseEnter={() => {setFocus(index)}}
                                onMouseLeave={() => {setFocus('')}}
                                onClick = {() => {setProject(prj)}}
                            >
                                <div className='menu-img-container'>
                                    <img
                                        src={prj.image}
                                    />
                                </div>
                                <table key={index} className='project-table'>
                                    <tbody >
                                        <tr>
                                            <td className='project-label'>Project:</td>
                                            <td className='project-value'>{prj.name}</td>
                                        </tr>
                                        <tr>
                                            <td className='project-label'>About: </td>
                                            <td className='project-value'>{prj.description}</td>
                                        </tr>
                                        <tr>
                                            <td className='project-label'>{`Tech: `} </td>
                                            <td className='project-value'>{prj.tech}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                }) : <Project props={project} />
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
                    <div 
                        className='project-control-label'
                        onClick = {() => {setProject({})}}
                    
                    >Select Project</div>
                    <ul className='project-control-list'>
                        {
                            projects.map((prj,index) => {
                                return(
                                    <li key={index}
                                        onClick = {() => {prj.name!==project.name ?
                                            setProject(prj) : setProject({})}}
                                        onMouseEnter={() => {setFocus(index)}}
                                        onMouseLeave={() => {setFocus('')}}
                                    >
                                        <i className={`rightArrow ${project.name===prj.name ? 'visible' : 'hidden'}`}
                                        />
                                        {prj.name}
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
                        {project.gitLink && <li><a href={project.gitLink} target="_blank" rel="noopener noreferrer" className='link'>View Source</a></li>}
                        {project.liveLink && <li><a href={project.liveLink} target="_blank" className='link'>View Live Link</a></li>}
                    </ul>
                </div>
            </aside>
            
        </div>
    </section>
  );
}

export default Menu
