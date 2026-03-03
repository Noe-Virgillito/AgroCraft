import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Diagnostico } from './components/Diagnostico';
import { WordIntro } from './components/WordIntro';
import { ExcelIntro } from './components/ExcelIntro';
import { IAIntro } from './components/IAIntro';
import { ProgramacionIntro } from './components/ProgramacionIntro';

export default function App() {
  const [currentTab, setCurrentTab] = useState('diagnostico');

  const renderTab = () => {
    switch (currentTab) {
      case 'diagnostico': return <Diagnostico />;
      case 'Word': return <WordIntro />;
      case 'Excel': return <ExcelIntro />;
      case 'Ia': return <IAIntro />;
      case 'Prog': return <ProgramacionIntro />;
      default: return <Diagnostico />;
    }
  };

  return (
    <Layout currentTab={currentTab} setTab={setCurrentTab}>
      {renderTab()}
    </Layout>
  );
}
