import React from 'react';
import { QuotesGridRow } from './QuotesGridRow';
import { Accordion } from 'react-bootstrap';
import { ContextAwareToggle } from './ContextAwareToggle';
import { Quotes } from '../api';
import { QuotesGridBodyCollapse } from './QuotesGridBodyCollapse';

type Props = {
  results: Quotes[];
};

export const QuotesGridBody: React.FC<Props> = ({ results }) => {
  return (
    <tbody>
      {results.map((row, index) => (
        <>
          <Accordion.Item className="accordion" as="tr" eventKey={`accordionKey-${index}`} key={index}>
            <QuotesGridRow data={row} key={index} />
            <ContextAwareToggle eventKey={`accordionKey-${index}`} />
          </Accordion.Item>
          <QuotesGridBodyCollapse row={row} index={index} />
        </>
      ))}
    </tbody>
  );
};
