import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle, CheckCircle } from "lucide-react";

interface PuzzlePiece {
  id: number;
  currentPosition: number;
  correctPosition: number;
}

export default function PuzzleGame({ onSolved }: { onSolved: () => void }) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [isSolved, setIsSolved] = useState(false);

  const initializePuzzle = () => {
    const initialPieces = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      currentPosition: i,
      correctPosition: i,
    }));
    
    const shuffled = [...initialPieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece, index) => {
      piece.currentPosition = index;
    });
    
    setPieces(shuffled);
    setIsSolved(false);
  };

  useEffect(() => {
    initializePuzzle();
  }, []);

  const swapPieces = (index1: number, index2: number) => {
    const newPieces = [...pieces];
    [newPieces[index1], newPieces[index2]] = [newPieces[index2], newPieces[index1]];
    newPieces[index1].currentPosition = index1;
    newPieces[index2].currentPosition = index2;
    setPieces(newPieces);

    const solved = newPieces.every(piece => piece.currentPosition === piece.correctPosition);
    if (solved && !isSolved) {
      setIsSolved(true);
      onSolved();
    }
  };

  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const handlePieceClick = (index: number) => {
    if (isSolved) return;
    
    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      swapPieces(selectedPiece, index);
      setSelectedPiece(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl font-bold mb-2">Пъзел</h3>
        <p className="text-muted-foreground">
          {isSolved ? 'Браво! Решихте пъзела! 🎉' : 'Кликнете две части, за да ги размените'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6 max-w-2xl mx-auto">
        {pieces.map((piece, index) => (
          <button
            key={piece.id}
            onClick={() => handlePieceClick(index)}
            disabled={isSolved}
            className={`relative aspect-square rounded-lg overflow-hidden border-4 transition-all hover-elevate ${
              selectedPiece === index 
                ? 'border-primary scale-95' 
                : piece.currentPosition === piece.correctPosition && isSolved
                ? 'border-green-500'
                : 'border-border'
            }`}
            data-testid={`button-puzzle-piece-${index}`}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 dark:from-pink-800 dark:to-rose-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{piece.id + 1}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {!isSolved && (
          <Button
            variant="outline"
            onClick={initializePuzzle}
            data-testid="button-shuffle-puzzle"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Разбъркай отново
          </Button>
        )}
        {isSolved && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
            <CheckCircle className="w-5 h-5" />
            Решено!
          </div>
        )}
      </div>
    </div>
  );
}
