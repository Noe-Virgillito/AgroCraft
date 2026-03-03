import React, { useState } from 'react';

export const WordIntro: React.FC = () => {
  const [level, setLevel] = useState(1);
  
  // Level 1 State
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const level1Complete = isBold && isItalic && isUnderline;

  // Level 2 State
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');
  const [isList, setIsList] = useState(false);
  const level2Complete = alignment === 'center' && isList;

  // Level 3 State
  const [imageInserted, setImageInserted] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-[#373737] text-white p-6 border-4 border-[#111] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 font-bold border-b-4 border-l-4 border-[#111]">
          NIVEL {level} / 3
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Módulo: Microsoft Word</h2>
        
        {level === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Formato de Fuente</h3>
            <p className="text-gray-300">
              Word es un <strong>Procesador de Textos</strong>. Sirve para escribir informes, cartas o trabajos prácticos. 
              El "Formato de Fuente" nos permite cambiar cómo se ven las letras (hacerlas más gorditas, inclinadas o subrayadas) para resaltar información importante.
            </p>
          </div>
        )}
        {level === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Párrafos y Listas</h3>
            <p className="text-gray-300">
              Además de las letras, podemos organizar el texto en la hoja. La <strong>Alineación</strong> decide si el texto va a la izquierda, al centro o a la derecha. 
              Las <strong>Viñetas (Listas)</strong> sirven para enumerar elementos, ¡como las herramientas de la huerta!
            </p>
          </div>
        )}
        {level === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl text-yellow-400 font-bold mb-2">Concepto: Imágenes y Multimedia</h3>
            <p className="text-gray-300">
              Un buen informe no solo tiene texto. Insertar <strong>Imágenes</strong> ayuda a ilustrar lo que estamos explicando, haciendo que el documento sea más atractivo y fácil de entender.
            </p>
          </div>
        )}
      </div>

      <div className="bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] p-6 shadow-xl">
        {level === 1 && (
          <div className="animate-in fade-in">
            <h3 className="text-xl font-bold mb-4">Misión 1: Resaltar el título</h3>
            <p className="mb-6 text-gray-800">
              Usa los botones de herramientas para aplicar <strong>Negrita (N)</strong>, <strong>Cursiva (K)</strong> y <strong>Subrayado (S)</strong> al título de tu informe sobre los conejos.
            </p>

            {/* Toolbar L1 */}
            <div className="flex gap-2 mb-4 bg-[#8b8b8b] p-2 border-2 border-t-[#373737] border-l-[#373737] border-b-white border-r-white w-fit">
              <button onClick={() => setIsBold(!isBold)} className={`w-10 h-10 font-serif font-bold text-xl border-2 flex items-center justify-center transition-all ${isBold ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Negrita">N</button>
              <button onClick={() => setIsItalic(!isItalic)} className={`w-10 h-10 font-serif italic text-xl border-2 flex items-center justify-center transition-all ${isItalic ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Cursiva">K</button>
              <button onClick={() => setIsUnderline(!isUnderline)} className={`w-10 h-10 font-serif underline text-xl border-2 flex items-center justify-center transition-all ${isUnderline ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Subrayado">S</button>
            </div>

            {/* Document Area L1 */}
            <div className="bg-white p-8 border-2 border-gray-400 min-h-[200px] shadow-inner font-sans text-black">
              <div className={`text-3xl mb-4 transition-all duration-300 ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`}>
                Informe de Cunicultura - IPEA 293
              </div>
              <p className="text-gray-600 font-serif">
                Hoy visitamos el sector de cunicultura. Aprendimos que los conejos necesitan una dieta balanceada y agua limpia todos los días...
              </p>
            </div>

            {level1Complete && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-in zoom-in">
                <div className="bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 w-full">
                  <p className="font-bold mb-2">✅ ¡Misión Cumplida!</p>
                  <p className="text-sm"><strong>¿Por qué está bien?</strong> El formato de fuente ayuda a destacar palabras clave. Un título en negrita y subrayado le indica rápidamente al lector de qué trata el documento.</p>
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
            <h3 className="text-xl font-bold mb-4">Misión 2: Organizar el Inventario</h3>
            <p className="mb-6 text-gray-800">
              1. Centra el título usando los botones de alineación.<br/>
              2. Convierte las herramientas en una lista con viñetas.
            </p>

            {/* Toolbar L2 */}
            <div className="flex gap-4 mb-4 bg-[#8b8b8b] p-2 border-2 border-t-[#373737] border-l-[#373737] border-b-white border-r-white w-fit">
              <div className="flex gap-1">
                <button onClick={() => setAlignment('left')} className={`w-10 h-10 text-xl border-2 flex items-center justify-center transition-all ${alignment === 'left' ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Alinear Izquierda">🔙</button>
                <button onClick={() => setAlignment('center')} className={`w-10 h-10 text-xl border-2 flex items-center justify-center transition-all ${alignment === 'center' ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Centrar">🀄</button>
                <button onClick={() => setAlignment('right')} className={`w-10 h-10 text-xl border-2 flex items-center justify-center transition-all ${alignment === 'right' ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Alinear Derecha">🔜</button>
              </div>
              <div className="w-1 bg-gray-500"></div>
              <button onClick={() => setIsList(!isList)} className={`w-10 h-10 text-xl border-2 flex items-center justify-center transition-all ${isList ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`} title="Viñetas">📑</button>
            </div>

            {/* Document Area L2 */}
            <div className="bg-white p-8 border-2 border-gray-400 min-h-[200px] shadow-inner font-sans text-black">
              <div className={`text-2xl font-bold mb-6 transition-all duration-300 text-${alignment}`}>
                Inventario de Herramientas UTP
              </div>
              <div className="text-gray-800 font-serif">
                <p className="mb-2">Las herramientas que usaremos hoy son:</p>
                <div className={`transition-all duration-300 ${isList ? 'list-disc pl-8' : ''}`}>
                  <div className={isList ? 'list-item' : 'mb-1'}>Azada de hierro</div>
                  <div className={isList ? 'list-item' : 'mb-1'}>Regadera de plástico</div>
                  <div className={isList ? 'list-item' : 'mb-1'}>Pala de punta</div>
                </div>
              </div>
            </div>

            {level2Complete && (
              <div className="mt-6 flex flex-col items-center gap-4 animate-in zoom-in">
                <div className="bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 w-full">
                  <p className="font-bold mb-2">✅ ¡Misión Cumplida!</p>
                  <p className="text-sm"><strong>¿Por qué está bien?</strong> La alineación centrada da jerarquía al título. Las listas con viñetas estructuran la información, haciendo que un inventario sea mucho más fácil de leer que un texto de corrido.</p>
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
            <h3 className="text-xl font-bold mb-4">Misión 3: Ilustrar el informe</h3>
            <p className="mb-6 text-gray-800">
              Inserta una imagen de la huerta para completar tu informe. Haz clic en el botón "Insertar Imagen".
            </p>

            {/* Toolbar L3 */}
            <div className="flex gap-4 mb-4 bg-[#8b8b8b] p-2 border-2 border-t-[#373737] border-l-[#373737] border-b-white border-r-white w-fit">
              <button 
                onClick={() => setImageInserted(true)} 
                disabled={imageInserted}
                className={`px-4 py-2 font-bold border-2 flex items-center gap-2 transition-all ${imageInserted ? 'bg-[#a0a0a0] border-t-[#555] border-l-[#555] border-b-white border-r-white text-gray-600' : 'bg-[#c6c6c6] border-t-white border-l-white border-b-[#555] border-r-[#555] hover:bg-[#d0d0d0]'}`}
              >
                🖼️ Insertar Imagen
              </button>
            </div>

            {/* Document Area L3 */}
            <div className="bg-white p-8 border-2 border-gray-400 min-h-[300px] shadow-inner font-sans text-black">
              <div className="text-2xl font-bold mb-4 text-center">
                Crecimiento de la Huerta
              </div>
              <p className="text-gray-800 font-serif mb-4">
                Esta semana notamos un gran avance en el sector de la huerta. Las semillas plantadas hace dos semanas ya comenzaron a brotar gracias al sistema de riego.
              </p>
              
              {/* Image Placeholder / Inserted Image */}
              <div className={`w-full max-w-md mx-auto h-48 border-2 flex items-center justify-center transition-all duration-500 ${imageInserted ? 'bg-green-100 border-green-400' : 'bg-gray-100 border-dashed border-gray-400 text-gray-400'}`}>
                {imageInserted ? (
                  <div className="text-center animate-in zoom-in">
                    <div className="text-6xl mb-2">🌱🚜</div>
                    <div className="text-sm text-green-800 font-bold">Foto_Huerta_IPEA293.jpg</div>
                  </div>
                ) : (
                  <span>[ Espacio para imagen ]</span>
                )}
              </div>
            </div>

            {imageInserted && (
              <div className="mt-6 bg-green-200 border-4 border-green-600 p-4 text-left text-green-900 animate-bounce">
                <p className="font-bold mb-2">🏆 ¡Módulo Word Completado!</p>
                <p className="text-sm"><strong>¿Por qué está bien?</strong> Las imágenes complementan el texto y proporcionan evidencia visual de lo que estamos explicando en el informe. ¡Un documento visualmente atractivo comunica mejor las ideas!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
