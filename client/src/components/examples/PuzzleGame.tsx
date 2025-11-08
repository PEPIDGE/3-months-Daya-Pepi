import PuzzleGame from '../PuzzleGame';

export default function PuzzleGameExample() {
  return (
    <div className="p-8">
      <PuzzleGame onSolved={() => console.log('Puzzle solved!')} />
    </div>
  );
}
