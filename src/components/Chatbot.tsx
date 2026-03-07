import { useState } from "react"

const API_URL = "https://portfolio-cb-backend.onrender.com/chat"

export default function Chatbot() {

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const session_id =
    localStorage.getItem("chat_session") ||
    Math.random().toString(36).substring(2)

  localStorage.setItem("chat_session", session_id)

  const sendMessage = async () => {

    if (!input.trim()) return

    const userMessage = { role: "user", content: input }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          session_id,
          message: input
        })
      })

      const data = await res.json()

      const botMessage = {
        role: "assistant",
        content: data.answer
      }

      setMessages(prev => [...prev, botMessage])

    } catch (err) {

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong."
        }
      ])

    }

    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        AI
      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-20 right-6 w-80 h-[450px] bg-white border rounded-lg shadow-xl flex flex-col z-50">

          <div className="p-3 border-b font-semibold">
            Ask about Abbas
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">

            {messages.map((msg, i) => (

              <div
                key={i}
                className={`text-sm p-2 rounded ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white ml-auto max-w-[80%]"
                    : "bg-gray-200 text-black mr-auto max-w-[80%]"
                }`}
              >
                {msg.content}
              </div>

            ))}

            {loading && (
              <div className="text-sm text-gray-500">
                Thinking...
              </div>
            )}

          </div>

          <div className="border-t p-2 flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Ask about Abbas..."
            />

            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 py-1 rounded text-sm"
            >
              Send
            </button>

          </div>

        </div>

      )}
    </>
  )
}