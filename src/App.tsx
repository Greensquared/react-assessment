import React from 'react';
import { ContainerFooter } from './components/Application/ContainerFooter';
import { ContainerHeader } from './components/Application/ContainerHeader';
import { QuotesGrid } from './components/QuotesOverview';

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
