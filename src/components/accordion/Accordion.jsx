import React from 'react';
import './accordion.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'active' : ''}`}>
      <div
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-image">
          <img src="/src/assets/icons/smartphone.svg" alt="" />
          <p>{title}</p>
        </div>

        <span className={`material-symbols-outlined ${isOpen ? 'active' : ''}`}>
          <img src="/src/assets/icons/arrow.svg" alt="" />
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
