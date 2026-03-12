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
      case 'diagnostico': return <diagnostico />;
      case 'word': return <wordIntro />;
      case 'excel': return <excelIntro />;
      case 'ia': return <iaIntro />;
      case 'prog': return <programacionIntro />;
      default: return <Diagnostico />;
    }
  };

  return (
    <Layout currentTab={currentTab} setTab={setCurrentTab}>
      {renderTab()}
    </Layout>
  );
}
