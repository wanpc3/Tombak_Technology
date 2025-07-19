import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <div className="process">
      <ol>
        <li>Requirement Analysis</li>
        <p>We work with you to define specifications and technical requirements.</p>

        <li>Schematic Design</li>
        <p>Circuit design with simulation and component selection.</p>

        <li>PCB Layout</li>
        <p>Board design optimized for manufacturability and performance.</p>

        <li>Prototype Assembly</li>
        <p>Hand-assembled prototypes for initial testing.</p>

        <li>Firmware Development</li>
        <p>Custom code tailored to your application.</p>

        <li>Testing & Refinement</li>
        <p>Iterative improvements based on real-world testing.</p>
      </ol>
    </div>
  );
}

export default Process;
