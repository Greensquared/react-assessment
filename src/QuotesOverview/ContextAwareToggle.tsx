import React, { useContext } from 'react';
import { AccordionContext, useAccordionButton } from 'react-bootstrap';

type ToggleProps = {
  eventKey: string;
};

export const ContextAwareToggle: React.FC<ToggleProps> = ({ eventKey }) => {
  const currentEventKey = useContext(AccordionContext);
  const handleClick = useAccordionButton(eventKey);
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <td>
      <button
        type="button"
        onClick={handleClick}
        className={isCurrentEventKey ? 'accordion-button' : 'accordion-button collapsed'}
      ></button>
    </td>
  );
};
