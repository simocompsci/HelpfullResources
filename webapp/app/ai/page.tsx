import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AIResearchPage() {
  const messages = [
    { id: 1, role: "ai", content: "Hi! I'm Recall AI. What are we researching today?" },
    { id: 2, role: "user", content: "I need to learn about modern CSS features like glassmorphism and subgrid." },
    { id: 3, role: "ai", content: "Great topic! Here are a few top resources I found on modern CSS:\n\n1. The Complete Guide to CSS Subgrid (MDN)\n2. Glassmorphism in User Interfaces (Smashing Magazine)\n\nWould you like me to save these to your 'Tech Tutorials' collection?" }
  ];

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-500">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2 text-foreground">
          <Sparkles className="text-primary" /> AI Research
        </h1>
        <p className="text-muted-foreground mt-1">Chat to discover new resources and organize your library.</p>
      </header>

      <div className="flex-1 glass-card flex flex-col overflow-hidden relative">
        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'ai' ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground'
              }`}>
                {msg.role === 'ai' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 ${
                msg.role === 'ai' 
                  ? 'bg-secondary/50 text-foreground rounded-tl-sm' 
                  : 'bg-primary text-primary-foreground rounded-tr-sm'
              }`}>
                <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base">{msg.content}</p>
                {msg.id === 3 && (
                  <div className="mt-4 flex gap-2">
                    <button className="bg-primary text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow">Save Resources</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background/50 backdrop-blur-md border-t border-border">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask a question or search for a topic..." 
              className="w-full bg-white dark:bg-gray-900 border border-border rounded-2xl py-3 pl-4 pr-12 sm:py-4 sm:pr-14 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all">
              <Send size={16} className="sm:translate-x-[1px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
