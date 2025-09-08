"use client";
import { useState } from "react";

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

export default function Wordle() {
  const [targetWord] = useState("REACT"); // In a real app, this would be random
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );

  const handleKeyPress = (key: string) => {
    if (gameStatus !== "playing") return;

    if (key === "ENTER") {
      if (currentGuess.length === WORD_LENGTH) {
        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        setCurrentGuess("");

        if (currentGuess === targetWord) {
          setGameStatus("won");
        } else if (newGuesses.length >= MAX_GUESSES) {
          setGameStatus("lost");
        }
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (key.match(/^[A-Z]$/) && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(prev => prev + key);
    }
  };

  const getLetterStatus = (letter: string, index: number) => {
    if (targetWord[index] === letter) return "correct";
    if (targetWord.includes(letter)) return "present";
    return "absent";
  };

  const renderGrid = () => {
    const rows = [];

    // Render completed guesses
    for (let i = 0; i < guesses.length; i++) {
      const guess = guesses[i];
      rows.push(
        <div key={i} className="flex gap-2">
          {Array.from({ length: WORD_LENGTH }).map((_, j) => {
            const letter = guess[j] || "";
            const status = letter ? getLetterStatus(letter, j) : "";
            return (
              <div
                key={j}
                className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold ${
                  status === "correct"
                    ? "bg-green-500 text-white border-green-500"
                    : status === "present"
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : status === "absent"
                        ? "bg-gray-500 text-white border-gray-500"
                        : "border-gray-300"
                }`}
              >
                {letter}
              </div>
            );
          })}
        </div>
      );
    }

    // Render current guess row
    if (gameStatus === "playing" && guesses.length < MAX_GUESSES) {
      rows.push(
        <div key="current" className="flex gap-2">
          {Array.from({ length: WORD_LENGTH }).map((_, j) => (
            <div
              key={j}
              className="w-12 h-12 border-2 border-gray-400 flex items-center justify-center text-xl font-bold"
            >
              {currentGuess[j] || ""}
            </div>
          ))}
        </div>
      );
    }

    // Render empty rows
    const emptyRows = MAX_GUESSES - rows.length;
    for (let i = 0; i < emptyRows; i++) {
      rows.push(
        <div key={`empty-${i}`} className="flex gap-2">
          {Array.from({ length: WORD_LENGTH }).map((_, j) => (
            <div
              key={j}
              className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center"
            />
          ))}
        </div>
      );
    }

    return rows;
  };

  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Wordle</h1>

        {gameStatus === "won" && (
          <div className="text-center mb-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 font-semibold">
              Congratulations! You won!
            </p>
          </div>
        )}

        {gameStatus === "lost" && (
          <div className="text-center mb-4 p-4 bg-red-100 rounded-lg">
            <p className="text-red-800 font-semibold">
              Game Over! The word was: {targetWord}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2 mb-8">{renderGrid()}</div>

        <div className="space-y-2">
          {keyboard.map((row, i) => (
            <div key={i} className="flex justify-center gap-1">
              {row.map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className={`px-3 py-4 rounded font-semibold text-sm ${
                    key === "ENTER" || key === "BACKSPACE"
                      ? "bg-gray-400 text-white px-4"
                      : "bg-gray-200 hover:bg-gray-300"
                  } transition-colors`}
                >
                  {key === "BACKSPACE" ? "⌫" : key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
