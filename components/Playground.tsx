import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Badge, Modal } from './ui';
import { generateAIResponse, checkPII } from '../services/geminiService';
import { Send, AlertTriangle, User, Bot, Copy, Check } from 'lucide-react';
import { ChatMessage, SafetyStatus } from '../types';

// Simple Markdown Formatter Component
const MarkdownText: React.FC<{ text: string }> = ({ text }) => {
  // Split by double newlines for paragraphs
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="space-y-3">
      {paragraphs.map((p, i) => {
        // Simple bold parsing: **text**
        const parts = p.split(/(\*\*.*?\*\*)/g);
        
        return (
          <p key={i}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

export const Playground: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your Enterprise Assistant. I can help you draft emails, summarize reports, or research business topics. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [safetyStatus, setSafetyStatus] = useState<SafetyStatus>(SafetyStatus.SAFE);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Modal State
  const [showPIIModal, setShowPIIModal] = useState(false);
  const [pendingMessage, setPendingMessage] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize input
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    if (checkPII(val)) {
      setSafetyStatus(SafetyStatus.WARNING);
    } else {
      setSafetyStatus(SafetyStatus.SAFE);
    }
  };

  const processMessage = async (messageText: string) => {
    const userMsg = messageText;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);
    setSafetyStatus(SafetyStatus.SAFE);

    const systemInstruction = "You are a helpful, professional AI assistant for a corporate environment. You are knowledgeable about Project Management, Communications, and General Operations. You always prioritize data privacy and remind users to review output. Your tone is helpful and corporate-friendly. Use formatting like **bold** for key terms.";
    
    const history = messages.slice(-4).map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
    const fullPrompt = `${history}\nUser: ${userMsg}\nAssistant:`;

    const aiResponse = await generateAIResponse(fullPrompt, systemInstruction);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  const handleSendClick = () => {
    if (!input.trim() || isLoading) return;

    if (checkPII(input)) {
        setPendingMessage(input);
        setShowPIIModal(true);
        return;
    }
    processMessage(input);
  };

  const handleConfirmPII = () => {
      setShowPIIModal(false);
      processMessage(pendingMessage);
      setPendingMessage('');
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col max-w-5xl mx-auto relative">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Sandbox Playground</h2>
          <p className="text-slate-500 text-sm">Experiment with prompts safely. No data is stored permanently.</p>
        </div>
        <div className="flex gap-2">
            <Badge variant="neutral">Model: Gemini 2.5 Flash</Badge>
            <Badge variant="success">Secure Environment</Badge>
        </div>
      </div>

      <Card className="flex-1 flex flex-col bg-slate-50 relative z-0">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" tabIndex={0}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative group ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}`}>
                  {msg.role === 'model' ? (
                     <MarkdownText text={msg.text} />
                  ) : (
                     <div className="whitespace-pre-wrap">{msg.text}</div>
                  )}
                  
                  {msg.role === 'model' && (
                    <button 
                      onClick={() => copyToClipboard(msg.text, idx)}
                      className="absolute -bottom-6 left-0 text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedIndex === idx ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copiedIndex === idx ? 'Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="flex items-center gap-2 text-slate-400 text-sm ml-12">
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          {safetyStatus === SafetyStatus.WARNING && (
             <div className="mb-2 flex items-center gap-2 text-amber-600 text-xs font-medium bg-amber-50 p-2 rounded">
                <AlertTriangle className="w-4 h-4" />
                Warning: Potential PII detected. Ensure data is anonymized.
             </div>
          )}
          <div className="flex gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me to summarize a report, draft a letter, or explain a concept..."
              className="flex-1 resize-none border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 min-h-[50px] max-h-[150px] p-3 text-sm overflow-hidden"
              onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendClick();
                }
              }}
            />
            <Button 
                onClick={handleSendClick} 
                disabled={isLoading || !input.trim()} 
                className="h-auto self-end"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <div className="text-center mt-2">
             <span className="text-xs text-slate-400">AI can make mistakes. Check important info.</span>
          </div>
        </div>
      </Card>

      {/* PII Warning Modal */}
      <Modal 
        isOpen={showPIIModal} 
        onClose={() => setShowPIIModal(false)}
        title="Potential PII Detected"
        actions={
          <>
            <Button variant="secondary" onClick={() => setShowPIIModal(false)}>Edit Message</Button>
            <Button variant="danger" onClick={handleConfirmPII}>I confirm this is dummy data</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg flex gap-3 text-amber-800">
             <AlertTriangle className="w-6 h-6 shrink-0" />
             <p className="text-sm">
               We detected patterns that look like <strong>Personally Identifiable Information</strong> (Emails, SSNs, or Account Numbers).
             </p>
          </div>
          <p className="text-slate-600 text-sm">
             Our policies strictly prohibit sending real client PII to this tool. 
             If you are using dummy/synthetic data for training purposes, you may proceed.
          </p>
        </div>
      </Modal>

    </div>
  );
};