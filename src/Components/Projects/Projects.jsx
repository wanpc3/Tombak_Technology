import React from 'react';
import './Projects.css';
import project_icon from '../../assets/project-icon.png';

const projects = [
    {
        title: 'Smart IoT Sensor Node',
        description: 'Low-power wireless environmental monitoring system',
    },
    {
        title: 'Industrial Controller',
        description: 'Ruggedized control unit for manufacturing equipment',
    },
    {
        title: 'Health Monitoring Wearable',
        description: 'Biometric tracking device with Bluetooth connectivity',
    }
];

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project_icon} alt={project.title} />
                    <div className="project-info">
                        <h4><b>{project.title}</b></h4>
                        <p>{project.description}</p>
                        <button className="read-more-btn">Read more</button>
                    </div>
                </div>
            ))}

            <div className="prototype-btn-container">
                <button className="prototype-btn">Start Your Own Prototype Project</button>
            </div>
        </div>
    );
}

export default Projects;
