import React, { useState } from 'react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    text: "En la escuela usamos tractores y herramientas que podemos tocar, igual que el teclado, el ratón y el monitor de la compu. ¿Cómo se llama a toda la parte física de la computadora?",
    options: ["A) Software", "B) Hardware", "C) Redstone"],
    correctIndex: 1,
    explanation: "¡Exacto! El Hardware es todo lo físico que puedes tocar, como los bloques en Minecraft o las herramientas en la huerta."
  },
  {
    id: 2,
    text: "Los programas, los juegos y las apps del celular son instrucciones que la compu lee, pero no podemos tocarlas con las manos. ¿Qué son?",
    options: ["A) Software", "B) Hardware", "C) Bedrock"],
    correctIndex: 0,
    explanation: "¡Muy bien! El Software son los programas y aplicaciones. Es como la 'receta' o las ideas que le dicen a la compu qué hacer."
  },
  {
    id: 3,
    text: "Un 'Algoritmo' es una serie de pasos ordenados para resolver un problema. ¿Cuál es el algoritmo correcto para cosechar en la UTP?",
    options: [
      "A) Cosechar ➡️ Sembrar ➡️ Arar la tierra",
      "B) Arar la tierra ➡️ Sembrar ➡️ Esperar ➡️ Cosechar",
      "C) Esperar ➡️ Arar la tierra ➡️ Cosechar"
    ],
    correctIndex: 1,
    explanation: "¡Perfecto! Un algoritmo necesita un orden lógico paso a paso para funcionar correctamente, igual que en la programación."
  },
  {
    id: 4,
    text: "Para que la computadora sepa qué queremos hacer, usamos 'Periféricos de Entrada'. ¿Cuál de estos sirve para INGRESAR información?",
    options: ["A) El monitor (Pantalla)", "B) Los parlantes", "C) El teclado y el ratón"],
    correctIndex: 2,
    explanation: "¡Correcto! El teclado y el ratón nos permiten 'entrar' datos a la compu. El monitor y los parlantes son de 'salida' porque nos muestran la información."
  },
  {
    id: 5,
    text: "Estás jugando online o usando la compu de la escuela y alguien desconocido te pide tu contraseña. ¿Qué debes hacer?",
    options: [
      "A) Se la doy para ser amable.",
      "B) No se la doy y le aviso a un profe o adulto de confianza.",
      "C) Le doy una contraseña falsa."
    ],
    correctIndex: 1,
    explanation: "¡Excelente! Nunca debes compartir tus contraseñas. La seguridad informática (Ciudadanía Digital) es muy importante."
  }
];

export const Diagnostico: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in duration-500">
        <div className="bg-[#373737] text-white p-8 border-4 border-[#111] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          
          <h2 className="text-4xl font-bold text-yellow-400 mb-6 drop-shadow-md">¡Diagnóstico Completado!</h2>
          
          <div className="text-9xl mb-6 animate-bounce">
            {score === questions.length ? '🏆' : score >= 3 ? '⭐' : '📚'}
          </div>
          
          <p className="text-2xl mb-2">Tu puntaje de experiencia (XP):</p>
          <p className="text-5xl font-bold text-green-400 mb-8 drop-shadow-md">{score} / {questions.length}</p>
          
          <div className="bg-[#1e1e1e] p-4 border-2 border-[#555] mb-8 text-left">
            <h3 className="text-xl text-blue-300 font-bold mb-2">Reporte del Sistema:</h3>
            <p className="text-gray-300">
              {score === questions.length 
                ? "¡Nivel Experto! Tienes una base excelente para empezar a programar y trabajar en el Laboratorio de Informática del IPEA 293." 
                : score >= 3 
                ? "¡Muy buen trabajo! Conoces los conceptos básicos. En el laboratorio aprenderemos mucho más sobre cómo funciona la tecnología."
                : "¡Buen intento! Este año en el Laboratorio de Informática aprenderemos todos estos conceptos desde cero. ¡Prepárate para la aventura!"}
            </p>
          </div>

          <button 
            onClick={resetQuiz}
            className="bg-[#c6c6c6] text-black border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] px-8 py-4 text-xl font-bold active:border-t-[#555] active:border-l-[#555] active:border-b-white active:border-r-white hover:bg-[#d0d0d0] transition-colors"
          >
            Volver a intentar
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="bg-[#373737] text-white p-6 border-4 border-[#111] shadow-lg relative">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Misión Diagnóstica: Informática</h2>
        <p className="text-gray-300">IPEA N° 293 - Demuestra tus conocimientos antes de entrar al laboratorio.</p>
        
        {/* XP Bar (Progress) */}
        <div className="mt-6">
          <div className="flex justify-between text-xs font-bold text-green-400 mb-1">
            <span>Nivel {currentQuestion + 1}</span>
            <span>{currentQuestion} / {questions.length} completados</span>
          </div>
          <div className="h-4 bg-black border-2 border-[#555] w-full relative">
            <div 
              className="h-full bg-green-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-1/2 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-[#c6c6c6] border-4 border-t-white border-l-white border-b-[#555] border-r-[#555] p-6 md:p-8 shadow-xl">
        <h3 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
          <span className="text-blue-700 mr-2">[{currentQuestion + 1}]</span>
          {q.text}
        </h3>

        <div className="space-y-4">
          {q.options.map((opt, index) => {
            let btnClass = "bg-[#8b8b8b] border-4 border-t-[#c6c6c6] border-l-[#c6c6c6] border-b-[#373737] border-r-[#373737] hover:bg-[#9a9a9a]";
            
            if (showFeedback) {
              if (index === q.correctIndex) {
                btnClass = "bg-green-500 border-4 border-t-green-300 border-l-green-300 border-b-green-700 border-r-green-700 text-white"; // Correct
              } else if (index === selectedAnswer) {
                btnClass = "bg-red-500 border-4 border-t-red-300 border-l-red-300 border-b-red-700 border-r-red-700 text-white"; // Wrong selected
              } else {
                btnClass = "bg-[#8b8b8b] opacity-50 border-4 border-t-[#c6c6c6] border-l-[#c6c6c6] border-b-[#373737] border-r-[#373737]"; // Unselected
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 text-lg font-bold transition-all active:translate-y-1 ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {showFeedback && (
          <div className="mt-8 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className={`p-4 border-4 mb-6 font-bold text-lg ${
              selectedAnswer === q.correctIndex 
                ? 'bg-green-200 border-green-600 text-green-900' 
                : 'bg-red-200 border-red-600 text-red-900'
            }`}>
              {selectedAnswer === q.correctIndex ? '✅ ¡Respuesta Correcta!' : '❌ Respuesta Incorrecta'}
              <p className="mt-2 font-normal text-black bg-white/50 p-3 border border-black/20">
                {q.explanation}
              </p>
            </div>
            
            <button
              onClick={nextQuestion}
              className="w-full bg-blue-500 text-white border-4 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 px-6 py-4 text-xl font-bold active:border-t-blue-800 active:border-l-blue-800 active:border-b-blue-300 active:border-r-blue-300 hover:bg-blue-600 transition-colors flex justify-center items-center gap-2"
            >
              {currentQuestion + 1 === questions.length ? 'Ver Resultados 🏆' : 'Siguiente Pregunta ➡️'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
