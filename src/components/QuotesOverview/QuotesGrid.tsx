import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { getQuotes } from '../../api';
import { Quotes } from '../../types/quote';
import { QuotesGridHeader } from './QuotesGridHeader';
import { QuotesGridBody } from './QuotesGridBody';
import { QuotesGridFooter } from './QuotesGridFooter';
import { SortService } from '../../service/SortService';

export const QuotesGrid: React.FC = () => {
  const [data, setData] = useState<Quotes[]>([]);
  const initialConfig = { key: 'solution', direction: 'ascending' };

  useEffect(() => {
    const data1 = getQuotes();
    if (data1) setData(data1!);
  }, []);

  return (
    <SortService initalConfig={initialConfig}>
      <div className="title-block">
        <h2 className="title">Quotes Overview for you</h2>
        <h3 className="subtitle">Choose and accept from the quotes below</h3>
      </div>

      <div className="container-lg rounded mb-10 ">
        <Accordion>
          <div className="table-responsive rounded">
            <table className="table mb-0">
              <QuotesGridHeader />
              <QuotesGridBody results={data} />
            </table>
          </div>
        </Accordion>
        <QuotesGridFooter />
      </div>
    </SortService>
  );
};
