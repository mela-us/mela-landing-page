"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function MathQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const correctAnswer = "15"

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const checkAnswer = () => {
    setShowResult(true)
  }

  const resetQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="bg-gradient-to-br from-purple-100/80 to-blue-100/80 rounded-xl p-8 shadow-xl border border-gray-200">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-800">Câu hỏi mẫu</h3>
          <p className="text-lg">Tính tổng các số từ 1 đến 5</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["10", "15", "20", "25"].map((answer) => (
            <button
              key={answer}
              onClick={() => handleSelectAnswer(answer)}
              disabled={showResult}
              className={`p-4 rounded-lg border transition-all ${
                selectedAnswer === answer
                  ? "border-[#002060] bg-blue-50"
                  : "border-gray-400/80 hover:border-[#002060] hover:bg-blue-50/50"
              } ${showResult && answer === correctAnswer ? "bg-green-100 border-green-500" : ""}`}
            >
              {answer}
            </button>
          ))}
        </div>

        {!showResult && selectedAnswer && (
          <Button onClick={checkAnswer} className="w-full bg-[#002060] hover:bg-[#001040] text-white">
            Kiểm tra đáp án
          </Button>
        )}

        {showResult && (
          <div className="space-y-4">
            {selectedAnswer === correctAnswer ? (
              <div className="bg-green-100 border border-green-500 rounded-lg p-4 text-green-800">
                <p className="font-bold">Chính xác! Bạn làm rất tốt.</p>
                <p className="text-sm mt-1">1 + 2 + 3 + 4 + 5 = 15</p>
              </div>
            ) : (
              <div className="bg-red-100 border border-red-500 rounded-lg p-4 text-red-800">
                <p className="font-bold">Chưa chính xác!</p>
                <p className="text-sm mt-1">Đáp án đúng là: 15</p>
                <p className="text-sm mt-1">1 + 2 + 3 + 4 + 5 = 15</p>
              </div>
            )}

            <Button onClick={resetQuestion} variant="outline" className="w-full bg-transparent border-gray-400 text-[#002060]">
              Làm lại
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
