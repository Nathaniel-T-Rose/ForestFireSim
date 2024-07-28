import { useState } from 'react'
import { Link } from 'react-router-dom';

import projects from './projects';

import '../styles/menu.scss'

const Menu = () => {
    const [focus,setFocus] = useState('');

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
                            onMouseEnter={() => {setFocus(index)}}
                        >
                            <div className='menu-img-container'>
                                <img
                                    src={project.image}
                                />
                            </div>
                            <table key={index} className='project-table'>
                                <tbody >
                                    <tr>
                                        <td class='project-label'>Project:</td>
                                        <td class='project-value'>{project.name}</td>
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
                            projects.map((prj,index) => {
                                return(
                                    <li key={index}>
                                        {prj.name}
                                    </li>
                                )
                            }
                            )
                        }
                        <li>
                            <div > Quit </div>
                        </li>
                    </ul>
                </div>
                <ul id="current-links">
                    <li>Time<span id ="currentTime">0<span id = "colon">:</span>58:26</span></li>
                    {<li>Live Link<span id ="gilAmount">435</span></li>}
                </ul>
            </aside>
        </div>
    </section>
  );
}

export default Menu
