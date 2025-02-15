import React, { useEffect, useState } from "react"

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("")
  const fullText = "<Hello Wolrd />"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(interval)

        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed h-full inset-0 z-50 bg-black text-gray-100 flex-col flex items-center justify-center">
      <div className="mt-5 mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="anmate-blink ml-1"> ! </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mx-auto">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6 animate-loading-bar"> </div>
      </div>
    </div>
  )
}
