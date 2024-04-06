import React from 'react';
import './accordion.css';
import Smartphone from '../../assets/icons/smartphone.svg';
import Arrow from '../../assets/icons/arrow.svg';

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
          <img src={Smartphone} alt="Smartphone" loading="lazy" />
          <p>{title}</p>
        </div>

        <span className={`material-symbols-outlined ${isOpen ? 'active' : ''}`}>
          <img src={Arrow} alt="Arrow" loading="lazy" />
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
