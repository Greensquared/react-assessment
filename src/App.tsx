import React from 'react';
import { ContainerFooter } from './ContainerFooter';
import { ContainerHeader } from './ContainerHeader';
import { QuotesGrid } from './QuotesOverview';

const App: React.FC = () => {
  return (
    <div className="application-container">
      <header>
        <ContainerHeader />
      </header>
      <main>
        <QuotesGrid />
      </main>
      <footer>
        <ContainerFooter />
      </footer>
    </div>
  );
};

export default App;
