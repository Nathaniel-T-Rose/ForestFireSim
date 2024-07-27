import { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <section id="section">
        <div>
      
        <div className='projects-list'>
            {/* each row in expandable list */}
            {/* Project Image */}
            <table>
                <tbody>
                    <tr>
                        {/* Project Name */}
                    </tr>
                    <tr>
                        {/* Project Description */}
                    </tr>
                    <tr>
                        {/* Project Tech Stack */}
                    </tr>
                </tbody>
            </table>
            {/* Project Buttons */}
        </div>
        <aside>
            <div className='projects-control'>
                <ul>
                    <li>
                        {/* One LI for each project */}
                    </li>
                    <li>
                        <div > Quit </div>
                    </li>
                </ul>
            </div>
            <ul id="time">
                <li>Time<span id ="currentTime">0<span id = "colon">:</span>58:26</span></li>
                <li>Gil<span id ="gilAmount">435</span></li>
            </ul>
        </aside>

        <footer id="footer">
            PROJECT NAME
        </footer>
    </div>
    </section>
  );
}

export default Menu
