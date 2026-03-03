import React, { useState } from 'react';

export const ProgramacionIntro: React.FC = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [tractorPos, setTractorPos] = useState(0); // 0, 1, 2
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'fail'>('idle');

  const addBlock = (action: string) => {
    if (status !== 'idle') return;
    if (sequence.length < 3) {
      setSequence([...sequence, action]);
    }
  };

  const clearSequence = () => {
    setSequence([]);
    setTractorPos(0);
    setStatus('idle');
  };

  const runProgram = () => {
    if (sequence.length === 0) return;
    setStatus('running');
    
    let currentPos = 0;
    
    sequence.forEach((action, index) => {
      setTimeout(() => {
        if (action === 'avanzar') {
          currentPos += 1;
          setTractorPos(currentPos);
        } else if (action === 'cosechar') {
          if (currentPos === 2) {
            setStatus('success');
          } else {
            setStatus('fail');
          }
        }
        
        // If it's the last block and we haven't succeeded/failed yet
        if (index === sequence.length - 1 && action !== 'cosechar') {
          setTimeout(() => setStatus('fail'), 500);
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#373737] text-white p-6 border-4 border-[#111] shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">Nivel 5: Programación Básica</h2>
        <p className="text-gray-300">
          <strong>Programar</strong> es darle instrucciones paso a paso a una máquina para que haga un trabajo.
          ¡Vamos a programar el tractor para que coseche la zanahoria!
        </p>
      </div>

      <div className="bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] p-6 shadow-xl">
        <h3 className="text-xl font-bold mb-4">Misión: Cosechar la zanahoria</h3>
        <p className="mb-6 text-gray-800">
          El tractor necesita avanzar 2 casilleros y luego cosechar. Haz clic en los bloques para armar tu programa y luego presiona "Ejecutar".
        </p>

        {/* Game Area */}
        <div className="bg-[#5c3a21] border-4 border-[#3a2515] p-4 mb-8 flex gap-2 justify-center shadow-inner">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#4a2f1a] border-2 border-[#2a1505] flex items-center justify-center text-5xl relative">
            {tractorPos === 0 && <span className="absolute z-10 animate-bounce">🚜</span>}
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#4a2f1a] border-2 border-[#2a1505] flex items-center justify-center text-5xl relative">
            {tractorPos === 1 && <span className="absolute z-10 animate-bounce">🚜</span>}
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#4a2f1a] border-2 border-[#2a1505] flex items-center justify-center text-5xl relative">
            {tractorPos === 2 && <span className="absolute z-10 animate-bounce">🚜</span>}
            {status !== 'success' && <span>🥕</span>}
            {status === 'success' && <span className="absolute z-20 text-green-400 text-3xl font-bold -top-4">+1</span>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Blocks Palette */}
          <div className="flex-1 bg-[#8b8b8b] p-4 border-4 border-t-[#c6c6c6] border-l-[#c6c6c6] border-b-[#373737] border-r-[#373737]">
            <h4 className="font-bold mb-4 text-center">Bloques</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => addBlock('avanzar')}
                disabled={status !== 'idle'}
                className="bg-blue-500 text-white font-bold p-3 border-4 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 active:translate-y-1 hover:bg-blue-400 disabled:opacity-50"
              >
                ➡️ Avanzar
              </button>
              <button 
                onClick={() => addBlock('cosechar')}
                disabled={status !== 'idle'}
                className="bg-orange-500 text-white font-bold p-3 border-4 border-t-orange-300 border-l-orange-300 border-b-orange-800 border-r-orange-800 active:translate-y-1 hover:bg-orange-400 disabled:opacity-50"
              >
                ⛏️ Cosechar
              </button>
            </div>
          </div>

          {/* Program Workspace */}
          <div className="flex-[2] bg-[#1e1e1e] p-4 border-4 border-[#555] min-h-[200px] relative">
            <h4 className="font-bold text-white mb-4 border-b border-gray-600 pb-2">Tu Programa:</h4>
            <div className="flex flex-col gap-2">
              {sequence.map((action, i) => (
                <div key={i} className={`p-3 font-bold text-white border-4 ${action === 'avanzar' ? 'bg-blue-500 border-blue-700' : 'bg-orange-500 border-orange-700'} animate-in slide-in-from-left-2`}>
                  {action === 'avanzar' ? '➡️ Avanzar' : '⛏️ Cosechar'}
                </div>
              ))}
              {sequence.length === 0 && (
                <div className="text-gray-500 italic">Haz clic en los bloques para agregarlos aquí...</div>
              )}
            </div>

            {status === 'success' && (
              <div className="absolute bottom-4 right-4 bg-green-500 text-white font-bold px-4 py-2 border-2 border-green-200 animate-bounce">
                ¡Programa Exitoso! ✅
              </div>
            )}
            {status === 'fail' && (
              <div className="absolute bottom-4 right-4 bg-red-500 text-white font-bold px-4 py-2 border-2 border-red-200 animate-pulse">
                Error en el código ❌
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button 
            onClick={clearSequence}
            disabled={status === 'running'}
            className="px-6 py-2 font-bold bg-red-500 text-white border-4 border-t-red-300 border-l-red-300 border-b-red-800 border-r-red-800 active:translate-y-1 disabled:opacity-50"
          >
            Borrar
          </button>
          <button 
            onClick={runProgram}
            disabled={sequence.length === 0 || status !== 'idle'}
            className="px-8 py-2 font-bold bg-green-500 text-white border-4 border-t-green-300 border-l-green-300 border-b-green-800 border-r-green-800 active:translate-y-1 disabled:opacity-50 text-xl"
          >
            ▶️ Ejecutar
          </button>
        </div>
      </div>
    </div>
  );
};
