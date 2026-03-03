import React, { useState } from 'react';

export const IAIntro: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [analyzing1, setAnalyzing1] = useState(false);
  const [result1, setResult1] = useState(false);

  const [analyzing2, setAnalyzing2] = useState(false);
  const [result2, setResult2] = useState(false);

  const handleAnalyze1 = () => {
    setAnalyzing1(true);
    setTimeout(() => {
      setAnalyzing1(false);
      setResult1(true);
    }, 2000);
  };

  const handleAnalyze2 = () => {
    setAnalyzing2(true);
    setTimeout(() => {
      setAnalyzing2(false);
      setResult2(true);
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#373737] text-white p-6 border-4 border-[#111] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 font-bold border-b-4 border-l-4 border-[#111]">
          NIVEL {level} / 2
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Módulo: Inteligencia Artificial (IA)</h2>
        
        {level === 1 ? (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Visión Artificial</h3>
            <p className="text-gray-300">
              La <strong>Inteligencia Artificial</strong> es como enseñarle a la computadora a "ver" y pensar. 
              Usando cámaras, la IA puede analizar una planta y decirnos si está sana o enferma, igual que lo haría un experto agrónomo.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Machine Learning (Clasificación)</h3>
            <p className="text-gray-300">
              El <strong>Aprendizaje Automático</strong> permite a la IA separar cosas automáticamente. Si le mostramos miles de fotos de tomates buenos y malos, aprende a separarlos sola en la cinta transportadora.
            </p>
          </div>
        )}
      </div>

      <div className="bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] p-6 shadow-xl">
        {level === 1 && (
          <div className="animate-in fade-in">
            <h3 className="text-xl font-bold mb-4">Misión 1: Analizar el cultivo</h3>
            <p className="mb-6 text-gray-800">
              Usa el escáner de IA para analizar la foto de esta planta de la huerta escolar.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="relative w-48 h-48 bg-[#8b8b8b] border-4 border-t-[#373737] border-l-[#373737] border-b-white border-r-white flex items-center justify-center text-7xl shadow-lg">
                🥀
                {analyzing1 && (
                  <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
                    <div className="w-full h-2 bg-purple-400 animate-pulse absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_purple]"></div>
                  </div>
                )}
              </div>

              <div className="text-4xl text-gray-600 hidden md:block">➡️</div>
              <div className="text-4xl text-gray-600 md:hidden">⬇️</div>

              <div className="w-full md:w-64 min-h-[12rem] bg-[#1e1e1e] border-4 border-[#555] p-4 font-mono text-green-400 flex flex-col justify-center shadow-inner">
                {!analyzing1 && !result1 && <div className="text-center text-gray-500">Esperando imagen...</div>}
                {analyzing1 && (
                  <div className="space-y-2">
                    <p>{'>'} Analizando píxeles...</p>
                    <p>{'>'} Buscando patrones...</p>
                    <p className="animate-pulse">{'>'} Procesando...</p>
                  </div>
                )}
                {result1 && (
                  <div className="space-y-2 animate-in fade-in">
                    <p className="text-white font-bold border-b border-gray-600 pb-2 mb-2">RESULTADO IA:</p>
                    <p className="text-red-400">⚠️ Planta deshidratada</p>
                    <p className="text-blue-300">💧 Acción: Regar inmediatamente.</p>
                    <p className="text-xs text-gray-500 mt-4">Precisión: 98.5%</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button onClick={handleAnalyze1} disabled={analyzing1 || result1} className={`px-8 py-3 text-xl font-bold border-4 transition-all ${analyzing1 || result1 ? 'bg-purple-900 border-purple-950 text-gray-400 cursor-not-allowed' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0]'}`}>
                {analyzing1 ? 'Analizando...' : result1 ? 'Análisis Completado' : 'Escanear con IA 🤖'}
              </button>
              
              {result1 && (
                <button onClick={() => setLevel(2)} className="bg-blue-500 text-white px-8 py-3 font-bold border-4 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 hover:bg-blue-400 active:translate-y-1 animate-in zoom-in">
                  Siguiente Nivel ➡️
                </button>
              )}
            </div>
          </div>
        )}

        {level === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8">
            <h3 className="text-xl font-bold mb-4">Misión 2: Separar la cosecha</h3>
            <p className="mb-6 text-gray-800">
              Activa la IA para que clasifique automáticamente los tomates buenos de los que están en mal estado.
            </p>

            <div className="flex flex-col items-center gap-6">
              {/* Conveyor Belt */}
              <div className="w-full max-w-md bg-[#8b8b8b] border-4 border-t-[#373737] border-l-[#373737] border-b-white border-r-white p-4 flex justify-around text-5xl relative overflow-hidden">
                {analyzing2 && <div className="absolute top-0 bottom-0 left-0 w-8 bg-purple-500/50 animate-[scan_2.5s_ease-in-out]"></div>}
                
                <div className={`transition-all duration-500 ${result2 ? 'translate-y-20 opacity-0' : ''}`}>🍅</div>
                <div className={`transition-all duration-500 delay-100 ${result2 ? '-translate-y-20 opacity-0' : ''}`}>🤢</div>
                <div className={`transition-all duration-500 delay-200 ${result2 ? 'translate-y-20 opacity-0' : ''}`}>🍅</div>
                <div className={`transition-all duration-500 delay-300 ${result2 ? '-translate-y-20 opacity-0' : ''}`}>🍏</div>
              </div>

              {/* Bins */}
              <div className="flex gap-8 w-full max-w-md justify-between mt-8">
                <div className="flex-1 bg-green-200 border-4 border-green-600 p-4 text-center min-h-[120px] relative">
                  <div className="font-bold text-green-800 mb-2 border-b-2 border-green-400 pb-1">Tomates Sanos</div>
                  {result2 && <div className="text-5xl animate-in zoom-in duration-500">🍅 🍅</div>}
                </div>
                <div className="flex-1 bg-red-200 border-4 border-red-600 p-4 text-center min-h-[120px] relative">
                  <div className="font-bold text-red-800 mb-2 border-b-2 border-red-400 pb-1">Descarte</div>
                  {result2 && <div className="text-5xl animate-in zoom-in duration-500 delay-300">🤢 🍏</div>}
                </div>
              </div>

              <button onClick={handleAnalyze2} disabled={analyzing2 || result2} className={`mt-4 px-8 py-3 text-xl font-bold border-4 transition-all ${analyzing2 || result2 ? 'bg-purple-900 border-purple-950 text-gray-400 cursor-not-allowed' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0]'}`}>
                {analyzing2 ? 'Clasificando...' : result2 ? 'Clasificación Exitosa' : 'Activar IA Clasificadora 🤖'}
              </button>

              {result2 && (
                <div className="mt-4 bg-green-200 border-4 border-green-600 p-4 text-center font-bold text-green-900 animate-bounce w-full max-w-md">
                  ¡Módulo IA Completado! La máquina aprendió a separar los frutos. 🏆
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes scan {
          0% { left: 0; }
          50% { left: 100%; }
          100% { left: 0; }
        }
      `}</style>
    </div>
  );
};
