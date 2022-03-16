import React from 'react';

export const QuotesGridHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Solution Name</th>
        <th scope="col">Date created</th>
        <th scope="col">Expiration date</th>
        <th scope="col">Total price</th>
      </tr>
    </thead>
  );
};
