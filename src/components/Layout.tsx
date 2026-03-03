import React from 'react';
import { MonitorPlay, ClipboardCheck, FileText, Table, Bot, Code } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode; currentTab: string; setTab: (t: string) => void }> = ({ children, currentTab, setTab }) => {
  const tabs = [
    { id: 'diagnostico', label: 'Diagnóstico', icon: ClipboardCheck },
    { id: 'word', label: 'Word', icon: FileText },
    { id: 'excel', label: 'Excel', icon: Table },
    { id: 'ia', label: 'IA', icon: Bot },
    { id: 'prog', label: 'Programación', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-[#8b8b8b] font-mono text-black selection:bg-blue-300 pb-10">
      {/* Header */}
      <header className="bg-[#c6c6c6] border-b-4 border-[#555] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-[#373737] text-white px-6 py-3 border-2 border-[#111] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex items-center gap-3">
            <MonitorPlay size={32} className="text-blue-400" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-yellow-400">IPEA N° 293</h1>
              <p className="text-xs text-blue-300 tracking-widest uppercase">Laboratorio de Informática</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1e1e1e] text-green-400 px-4 py-2 border-2 border-[#555] font-bold text-sm md:text-base flex items-center gap-2 shadow-inner">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          SISTEMA ACTIVO
        </div>
      </header>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-6 gap-6 px-4">
        {/* Sidebar Navigation */}
        <nav className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:w-56 shrink-0">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={`flex items-center gap-3 p-3 text-left font-bold transition-all whitespace-nowrap
                  ${isActive 
                    ? 'bg-[#a0a0a0] border-4 border-t-[#555] border-l-[#555] border-b-white border-r-white translate-y-[2px] translate-x-[2px]' 
                    : 'bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'
                  }
                `}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-[#373737] text-white border-2 border-[#111] rounded-sm text-xs">
                  {index + 1}
                </div>
                <Icon size={20} className={isActive ? 'text-blue-800' : 'text-gray-800'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
