import React from 'react';
import { Quotes } from '../api';
import { formatNumberToNlCurrency, getDateFromTimeStamp } from '../helperFunctions';

type Props = {
  data: Quotes;
};

export const QuotesGridRow: React.FC<Props> = ({ data }) => {
  const totalPrice = data.items.map(item => item.retailPrice).reduce((a, b) => a + b);
  const formattedPrice = formatNumberToNlCurrency(totalPrice);

  return (
    <>
      <td>
        <input type="checkbox" name={data.reference} value={data.reference} />
      </td>
      <th scope="row" className="text-primary">
        {data.solution}
      </th>
      <td>{getDateFromTimeStamp(data.created)}</td>
      <td>{getDateFromTimeStamp(data.expirationDate)}</td>
      <td>{formattedPrice}</td>
    </>
  );
};
