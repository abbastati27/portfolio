import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown"

const API_URL = "https://portfolio-cb-backend.onrender.com/chat"

export default function Chatbot() {

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  const session_id =
    localStorage.getItem("chat_session") ||
    Math.random().toString(36).substring(2)

  localStorage.setItem("chat_session", session_id)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

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

    } catch {

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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center font-semibold text-sm text-primary-foreground bg-primary shadow-lg hover:scale-105 transition"
      >
        AI
      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-24 right-6 w-80 h-[460px] glass-card flex flex-col z-50">

          {/* Header */}

          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <span className="font-semibold text-sm">
              Ask about Abbas
            </span>

            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary text-sm"
            >
              ✕
            </button>
          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">

            {messages.map((msg, i) => (

              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "mr-auto bg-muted text-foreground"
                }`}
              >
                {msg.role === "assistant" ? (

                  <div className="prose prose-sm max-w-none prose-p:my-1 prose-li:my-0">

                    <ReactMarkdown>
                      {msg.content}
                    </ReactMarkdown>

                  </div>

                ) : (

                  msg.content

                )}
              </div>

            ))}

            {loading && (
              <div className="text-xs text-muted-foreground">
                Thinking...
              </div>
            )}

            <div ref={bottomRef} />

          </div>

          {/* Input */}

          <div className="border-t border-border p-3 flex gap-2">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-muted border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary"
              placeholder="Ask about Abbas..."
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Send
            </button>

          </div>

        </div>

      )}
    </>
  )
}