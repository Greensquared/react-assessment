import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { getQuotes, Quotes } from '../api';
import { QuotesGridHeader } from './QuotesGridHeader';
import { QuotesGridBody } from './QuotesGridBody';
import { QuotesGridFooter } from './QuotesGridFooter';

export const QuotesGrid: React.FC = () => {
  const [data, setData] = useState<Quotes[]>([]);

  useEffect(() => {
    const data1 = getQuotes();
    if (data1) setData(data1!);
  }, []);

  return (
    <>
      <div className="title-block">
        <h2 className="title">Quotes Overview for you</h2>
        <h3 className="subtitle">Choose and accept from the quotes below</h3>
      </div>
      <div className="container-lg border border-primary-35 rounded mb-10 ">
        <Accordion>
          <div className="table-responsive rounded">
            <table className="table">
              <QuotesGridHeader />
              <QuotesGridBody results={data} />
            </table>
          </div>
        </Accordion>
        <QuotesGridFooter />
      </div>
    </>
  );
};
