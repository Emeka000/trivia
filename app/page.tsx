'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, Trophy, Coins, Zap } from 'lucide-react';
import { triviaQuestions, Question } from '@/lib/trivia-data';

export default function HealthChainTrivia() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [points, setPoints] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: { selected: string; correct: boolean } }>({});
  const [earnedTokens, setEarnedTokens] = useState(0);

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / triviaQuestions.length) * 100;
  const maxPoints = triviaQuestions.length * 10;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    let pointsEarned = 0;
    
    if (isCorrect) {
      pointsEarned = 10; // Base points for correct answer
      setPoints(points + pointsEarned);
    }
    
    setAnswers({
      ...answers,
      [currentQuestionIndex]: { selected: answer, correct: isCorrect }
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Calculate tokens earned based on performance
      const finalScore = points + (selectedAnswer === currentQuestion.correctAnswer ? 10 : 0);
      const tokensEarned = Math.floor(finalScore / 10); // 1 token per correct answer
      setEarnedTokens(tokensEarned);
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setPoints(0);
    setGameComplete(false);
    setAnswers({});
    setEarnedTokens(0);
  };

  const getScoreMessage = () => {
    const finalPoints = points + (selectedAnswer === currentQuestion.correctAnswer ? 10 : 0);
    const maxPossiblePoints = triviaQuestions.length * 10;
    const percentage = (finalPoints / maxPossiblePoints) * 100;
    if (percentage >= 90) return "🏆 Health Expert! You've mastered teen health knowledge!";
    if (percentage >= 70) return "🌟 Great job! You have solid health awareness!";
    if (percentage >= 50) return "💪 Good effort! Keep learning about your health!";
    return "📚 Keep studying! Your health knowledge is growing!";
  };

  const getTokenReward = () => {
    const finalPoints = points + (selectedAnswer === currentQuestion.correctAnswer ? 10 : 0);
    return Math.floor(finalPoints / 10);
  };

  if (gameComplete) {
    const finalTokens = getTokenReward();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Trophy className="w-20 h-20 text-yellow-500" />
                  <Coins className="w-8 h-8 text-yellow-600 absolute -top-2 -right-2 animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                HealthChain Complete!
              </CardTitle>
              <p className="text-gray-600 text-lg">{getScoreMessage()}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl p-6 mb-6">
                  <div className="text-white">
                    <div className="text-5xl font-bold mb-2">{points}</div>
                    <p className="text-xl opacity-90">Health Points Earned</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <Coins className="w-8 h-8 text-white mr-2" />
                    <span className="text-4xl font-bold text-white">{finalTokens}</span>
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {finalTokens === triviaQuestions.length ? '🎉 PERFECT SCORE! Base Ethereum Tokens Earned!' : 'Health Tokens Earned'}
                  </p>
                  {finalTokens === triviaQuestions.length && (
                    <div className="mt-3 p-3 bg-white/20 rounded-lg">
                      <p className="text-white text-sm">
                        🏆 Congratulations! You've earned the maximum reward!
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance by Category:</h3>
                {['Mental Health', 'Reproductive Health', 'Personal Hygiene', 'COVID-19', 'Contraceptives', 'Nutrition', 'Exercise & Fitness', 'Substance Awareness'].map((category) => {
                  const categoryQuestions = triviaQuestions.filter(q => q.category === category);
                  if (categoryQuestions.length === 0) return null;
                  
                  const categoryScore = categoryQuestions.filter((q, index) => {
                    const questionIndex = triviaQuestions.findIndex(tq => tq === q);
                    return answers[questionIndex]?.correct;
                  }).length;
                  
                  return (
                    <div key={category} className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                      <span className="font-medium text-gray-700">{category}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          {categoryScore}/{categoryQuestions.length}
                        </Badge>
                        <span className="text-sm text-purple-600 font-semibold">
                          +{categoryScore * 10}pts
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button 
                onClick={resetGame}
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-6 text-lg shadow-lg"
                size="lg"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Start New HealthChain
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header with Points */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                HealthChain
              </h1>
              <p className="text-gray-600 text-lg">
                Earn tokens by mastering teen health knowledge
              </p>
            </div>
            
            {/* Points Display - Top Right */}
            <div className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center text-white">
                <Zap className="w-6 h-6 mr-2" />
                <div className="text-right">
                  <div className="text-2xl font-bold">{points}</div>
                  <div className="text-sm opacity-90">Health Points</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-2xl mb-6 bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline" className="text-sm bg-gradient-to-r from-purple-100 to-teal-100 border-purple-200">
                {currentQuestion.category}
              </Badge>
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {triviaQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="h-3 mb-4" />
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <span>Progress: {Math.round(progress)}%</span>
              <span>Potential Tokens: {Math.floor(points / 10) + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)}</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <h2 className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                    className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 text-green-800 shadow-lg'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50 text-red-800 shadow-lg'
                        : isSelected
                        ? 'border-purple-500 bg-purple-50 text-purple-800 shadow-md'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      <div className="flex items-center space-x-2">
                        {showCorrect && (
                          <>
                            <span className="text-green-600 font-bold text-sm">+10pts</span>
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </>
                        )}
                        {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {showResult && (
              <div className="mb-6">
                <div className={`p-4 rounded-lg border ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}>
                  <h3 className={`font-semibold mb-2 flex items-center ${
                    selectedAnswer === currentQuestion.correctAnswer
                      ? 'text-green-800'
                      : 'text-red-800'
                  }`}>
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <>
                        <Coins className="w-5 h-5 mr-2" />
                        Correct! +10 Health Points
                      </>
                    ) : (
                      'Incorrect - Keep Learning!'
                    )}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            )}
            
            {showResult && (
              <Button 
                onClick={handleNextQuestion}
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-6 text-lg shadow-lg"
                size="lg"
              >
                {currentQuestionIndex < triviaQuestions.length - 1 ? 'Next Question' : 'Claim Your Tokens!'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}