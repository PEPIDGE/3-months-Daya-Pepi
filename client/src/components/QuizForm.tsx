import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle } from "lucide-react";
import { useLocation } from "wouter";

interface Question {
  id: number;
  question: string;
  answer: string | string[];
  type: 'text' | 'coordinates' | 'select';
  options?: string[];
}

const questions: Question[] = [
  { id: 1, question: "Къде се запознахме?", answer: "несебър", type: "text" },
  { id: 2, question: "Къде ме погледна първо?", answer: "слънчев бряг", type: "text" },
  { id: 3, question: "Къде се разбрахме, че се харесваме?", answer: "аквапарк несебър", type: "text" },
  { id: 4, question: "Какво ми подари на 04.08.2025?", answer: "ластиче", type: "text" },
  { id: 5, question: "Къде те учих да караш?", answer: "плевен", type: "text" },
  { id: 6, question: "Къде беше нашият Honeyweek?", answer: "банско", type: "text" },
  { id: 7, question: "Къде за първи път ти казах \"обичам те\"?", answer: "софия", type: "text" },
  { id: 8, question: "Кои бяха с нас в Гърмен?", answer: "аникс и краси", type: "text" },
  { id: 9, question: "Какво готвихме всеки ден в Банско?", answer: "буритота", type: "text" },
  { id: 10, question: "Къде ми подари чашките?", answer: "софия", type: "text" },
  { id: 11, question: "Къде показа Дунав?", answer: "деков", type: "text" },
  { id: 12, question: "Коя е нашата песен?", answer: "i mean it", type: "text" },
  { id: 13, question: "Къде бяхме на бургери?", answer: "созопол", type: "text" },
  { id: 14, question: "Въведи координатите (ширина, дължина до предпоследната цифра)", answer: ["42.65952", "27.72586"], type: "coordinates" },
  { id: 15, question: "Избери любим спомен", answer: ["несебър", "созопол", "софия", "варна", "банско", "плевен"], type: "select", options: ["Несебър", "Созопол", "София", "Варна", "Банско", "Плевен"] },
];

export default function QuizForm() {
  const [, setLocation] = useLocation();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [validated, setValidated] = useState<Record<number, boolean>>({});
  const [allCorrect, setAllCorrect] = useState(false);

  const normalizeAnswer = (answer: string): string => {
    return answer.toLowerCase().trim();
  };

  const checkAnswer = (questionId: number, userAnswer: string): boolean => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return false;

    const normalized = normalizeAnswer(userAnswer);

    if (question.type === 'coordinates') {
      const answers = question.answer as string[];
      return answers.some(ans => normalized.includes(ans));
    } else if (question.type === 'select') {
      const validAnswers = question.answer as string[];
      return validAnswers.includes(normalized);
    } else {
      return normalized === question.answer;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newValidated: Record<number, boolean> = {};
    let correctCount = 0;

    questions.forEach(q => {
      const isCorrect = checkAnswer(q.id, answers[q.id] || '');
      newValidated[q.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setValidated(newValidated);

    if (correctCount === questions.length) {
      setAllCorrect(true);
      localStorage.setItem('quizCompleted', 'true');
    }
  };

  const handleContinue = () => {
    setLocation('/secret');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 rounded-xl p-6 ${
              validated[q.id] !== undefined
                ? validated[q.id]
                  ? 'ring-2 ring-green-500'
                  : 'ring-2 ring-red-500'
                : ''
            }`}
          >
            <Label className="text-base font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary">{q.id}.</span>
              {q.question}
              {validated[q.id] !== undefined && (
                validated[q.id] ? (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                )
              )}
            </Label>

            {q.type === 'select' && q.options ? (
              <Select
                value={answers[q.id] || ''}
                onValueChange={(value) => setAnswers({ ...answers, [q.id]: value.toLowerCase() })}
              >
                <SelectTrigger data-testid={`select-question-${q.id}`}>
                  <SelectValue placeholder="Избери отговор..." />
                </SelectTrigger>
                <SelectContent>
                  {q.options.map((opt) => (
                    <SelectItem key={opt} value={opt.toLowerCase()}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                placeholder="Твоят отговор..."
                data-testid={`input-question-${q.id}`}
                className="mt-2"
              />
            )}
          </div>
        ))}

        <div className="flex justify-center gap-4 pt-6">
          {!allCorrect ? (
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              data-testid="button-submit-quiz"
            >
              Провери отговорите
            </Button>
          ) : (
            <Button
              type="button"
              size="lg"
              onClick={handleContinue}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              data-testid="button-continue-to-secret"
            >
              Продължи
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
