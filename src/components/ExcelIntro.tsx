import React, { useState } from 'react';

export const ExcelIntro: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [calc1, setCalc1] = useState(false);
  const [calc2, setCalc2] = useState(false);
  const [chartCreated, setChartCreated] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#373737] text-white p-6 border-4 border-[#111] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 font-bold border-b-4 border-l-4 border-[#111]">
          NIVEL {level} / 3
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">Módulo: Microsoft Excel</h2>
        
        {level === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Celdas y Sumas</h3>
            <p className="text-gray-300">
              Excel es una <strong>Planilla de Cálculo</strong>. La pantalla está dividida en cuadraditos llamados <strong>Celdas</strong> (ej. A1, B2). 
              Podemos escribir fórmulas matemáticas para que la compu sume todo automáticamente sin usar calculadora.
            </p>
          </div>
        )}
        {level === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Multiplicación y Presupuestos</h3>
            <p className="text-gray-300">
              En Excel, el símbolo de multiplicar es el asterisco (<strong>*</strong>). Si queremos saber cuánto dinero necesitamos para comprar semillas, multiplicamos la cantidad por el precio usando una fórmula.
            </p>
          </div>
        )}
        {level === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Gráficos Visuales</h3>
            <p className="text-gray-300">
              A veces los números son difíciles de leer. Excel nos permite transformar esos números en <strong>Gráficos</strong> (como barras o tortas) para ver rápidamente qué producto se cosechó más.
            </p>
          </div>
        )}
      </div>

      <div className="bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] p-6 shadow-xl">
        {level === 1 && (
          <div className="animate-in fade-in">
            <h3 className="text-xl font-bold mb-4">Misión 1: Sumar la cosecha</h3>
            <p className="mb-6 text-gray-800">
              Haz clic en el botón para ejecutar la fórmula <code>=B1+B2</code> y sumar las zanahorias.
            </p>

            {/* Excel Grid L1 */}
            <div className="bg-white border-2 border-gray-400 font-sans text-black w-full max-w-md mx-auto shadow-inner">
              <div className="flex bg-gray-200 border-b-2 border-gray-400 font-bold text-center">
                <div className="w-12 border-r-2 border-gray-400 bg-gray-300"></div>
                <div className="flex-1 border-r-2 border-gray-400 py-1">A (Producto)</div>
                <div className="flex-1 py-1">B (Cantidad)</div>
              </div>
              <div className="flex border-b border-gray-300">
                <div className="w-12 border-r-2 border-gray-400 bg-gray-200 text-center font-bold py-2">1</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2">Zanahorias Lunes</div>
                <div className="flex-1 px-2 py-2 text-right font-mono">15</div>
              </div>
              <div className="flex border-b border-gray-300">
                <div className="w-12 border-r-2 border-gray-400 bg-gray-200 text-center font-bold py-2">2</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2">Zanahorias Martes</div>
                <div className="flex-1 px-2 py-2 text-right font-mono">10</div>
              </div>
              <div className="flex bg-yellow-50">
                <div className="w-12 border-r-2 border-gray-400 bg-gray-200 text-center font-bold py-2">3</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2 font-bold">TOTAL:</div>
                <div className="flex-1 px-2 py-2 text-right font-mono font-bold text-blue-600 bg-blue-50">
                  {calc1 ? '25' : '=B1+B2'}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button onClick={() => setCalc1(true)} disabled={calc1} className={`px-8 py-3 text-xl font-bold border-4 transition-all ${calc1 ? 'bg-green-500 border-green-700 text-white opacity-80 cursor-not-allowed' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0]'}`}>
                {calc1 ? '¡Calculado! ✅' : 'Ejecutar Fórmula (Enter)'}
              </button>
            </div>

            {calc1 && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-in zoom-in">
                <div className="bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 w-full">
                  <p className="font-bold mb-2">✅ ¡Misión Cumplida!</p>
                  <p className="text-sm"><strong>¿Por qué está bien?</strong> Al usar referencias a celdas (B1 y B2) en lugar de números fijos (15 y 10), si mañana cosechamos más zanahorias y cambiamos el número, ¡el total se actualizará solo!</p>
                </div>
                <button onClick={() => setLevel(2)} className="bg-blue-500 text-white px-8 py-3 font-bold border-4 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 hover:bg-blue-400 active:translate-y-1">
                  Siguiente Nivel ➡️
                </button>
              </div>
            )}
          </div>
        )}

        {level === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8">
            <h3 className="text-xl font-bold mb-4">Misión 2: Presupuesto de Semillas</h3>
            <p className="mb-6 text-gray-800">
              Necesitamos comprar 5 paquetes de semillas a $10 cada uno. Ejecuta la fórmula <code>=B2*C2</code> para calcular el costo total.
            </p>

            {/* Excel Grid L2 */}
            <div className="bg-white border-2 border-gray-400 font-sans text-black w-full max-w-lg mx-auto shadow-inner">
              <div className="flex bg-gray-200 border-b-2 border-gray-400 font-bold text-center text-sm">
                <div className="w-8 border-r-2 border-gray-400 bg-gray-300"></div>
                <div className="flex-[2] border-r-2 border-gray-400 py-1">A (Ítem)</div>
                <div className="flex-1 border-r-2 border-gray-400 py-1">B (Cant)</div>
                <div className="flex-1 border-r-2 border-gray-400 py-1">C (Precio)</div>
                <div className="flex-1 py-1">D (Total)</div>
              </div>
              <div className="flex border-b border-gray-300">
                <div className="w-8 border-r-2 border-gray-400 bg-gray-200 text-center font-bold py-2">1</div>
                <div className="flex-[2] border-r border-gray-300 px-2 py-2 text-sm text-gray-500 italic">Encabezados...</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2"></div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2"></div>
                <div className="flex-1 px-2 py-2"></div>
              </div>
              <div className="flex border-b border-gray-300">
                <div className="w-8 border-r-2 border-gray-400 bg-gray-200 text-center font-bold py-2">2</div>
                <div className="flex-[2] border-r border-gray-300 px-2 py-2">Semillas Zanahoria</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2 text-center font-mono">5</div>
                <div className="flex-1 border-r border-gray-300 px-2 py-2 text-center font-mono">$10</div>
                <div className="flex-1 px-2 py-2 text-center font-mono font-bold text-blue-600 bg-blue-50">
                  {calc2 ? '$50' : '=B2*C2'}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button onClick={() => setCalc2(true)} disabled={calc2} className={`px-8 py-3 text-xl font-bold border-4 transition-all ${calc2 ? 'bg-green-500 border-green-700 text-white opacity-80 cursor-not-allowed' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0]'}`}>
                {calc2 ? '¡Calculado! ✅' : 'Ejecutar Fórmula (Enter)'}
              </button>
            </div>

            {calc2 && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-in zoom-in">
                <div className="bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 w-full">
                  <p className="font-bold mb-2">✅ ¡Misión Cumplida!</p>
                  <p className="text-sm"><strong>¿Por qué está bien?</strong> Multiplicar celdas nos permite crear presupuestos dinámicos. Es fundamental para administrar los recursos de la escuela agrotécnica sin cometer errores de cálculo.</p>
                </div>
                <button onClick={() => setLevel(3)} className="bg-blue-500 text-white px-8 py-3 font-bold border-4 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 hover:bg-blue-400 active:translate-y-1">
                  Siguiente Nivel ➡️
                </button>
              </div>
            )}
          </div>
        )}

        {level === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8">
            <h3 className="text-xl font-bold mb-4">Misión 3: Crear Gráfico de Cosecha</h3>
            <p className="mb-6 text-gray-800">
              Tenemos los datos de la cosecha semanal. Haz clic en "Crear Gráfico" para visualizar qué verdura rindió más.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Data Table */}
              <div className="bg-white border-2 border-gray-400 font-sans text-black w-full md:w-1/2 shadow-inner text-sm">
                <div className="flex bg-gray-200 border-b-2 border-gray-400 font-bold">
                  <div className="flex-1 border-r-2 border-gray-400 px-2 py-1">Verdura</div>
                  <div className="flex-1 px-2 py-1 text-right">Kilos</div>
                </div>
                <div className="flex border-b border-gray-300">
                  <div className="flex-1 border-r border-gray-300 px-2 py-1">Zanahorias</div>
                  <div className="flex-1 px-2 py-1 text-right font-mono">40</div>
                </div>
                <div className="flex border-b border-gray-300">
                  <div className="flex-1 border-r border-gray-300 px-2 py-1">Lechugas</div>
                  <div className="flex-1 px-2 py-1 text-right font-mono">25</div>
                </div>
                <div className="flex border-b border-gray-300">
                  <div className="flex-1 border-r border-gray-300 px-2 py-1">Tomates</div>
                  <div className="flex-1 px-2 py-1 text-right font-mono">60</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="w-full md:w-1/2 min-h-[150px] border-4 border-dashed border-gray-400 flex items-end justify-around p-4 relative bg-gray-50">
                {!chartCreated ? (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                    [ Área del Gráfico ]
                  </div>
                ) : (
                  <>
                    <div className="w-12 bg-orange-500 h-[66%] animate-in slide-in-from-bottom-full duration-500 flex items-end justify-center text-white font-bold pb-2 shadow-md">40</div>
                    <div className="w-12 bg-green-500 h-[41%] animate-in slide-in-from-bottom-full duration-500 delay-100 flex items-end justify-center text-white font-bold pb-2 shadow-md">25</div>
                    <div className="w-12 bg-red-500 h-[100%] animate-in slide-in-from-bottom-full duration-500 delay-200 flex items-end justify-center text-white font-bold pb-2 shadow-md">60</div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button onClick={() => setChartCreated(true)} disabled={chartCreated} className={`px-8 py-3 text-xl font-bold border-4 transition-all ${chartCreated ? 'bg-blue-500 border-blue-700 text-white opacity-80 cursor-not-allowed' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0]'}`}>
                {chartCreated ? 'Gráfico Generado 📊' : 'Crear Gráfico de Barras'}
              </button>
            </div>

            {chartCreated && (
              <div className="mt-6 bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 animate-bounce">
                <p className="font-bold mb-2">🏆 ¡Módulo Excel Completado!</p>
                <p className="text-sm"><strong>¿Por qué está bien?</strong> Los gráficos transforman datos aburridos en información visual. Con solo un vistazo al gráfico de barras, cualquiera puede ver inmediatamente que los tomates fueron la verdura más cosechada.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
