
import React, { useState } from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { Card, Callout, PromptCard } from '../../../components/ui';
import { FileText, Layers, Clock, ShieldAlert, CheckCircle2, Database } from 'lucide-react';

export default function Page() {
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const sections = [
    { id: 'intro', title: 'Chatting with Files' },
    { id: 'workflows', title: 'Top 3 Workflows' },
    { id: 'prompts', title: 'Prompt Library' },
    { id: 'safety', title: 'Security Check' },
    { id: 'quiz', title: 'Scenario Challenge' },
  ];

  return (
    <ModuleLayout
      title="Your Documents: AI as a Research Assistant"
      description="Learn how to use tools like NotebookLM or internal 'Chat with Docs' systems to synthesize reports, onboard to projects, and compare contracts instantly."
      duration="15 mins"
      audience="All Employees"
      sections={sections}
      nextModulePath="/modules/tool-builder"
    >
      {/* SECTION 1: INTRO */}
      <section id="intro" className="mb-12">
        <h2>Stop Ctrl+F, Start Chatting</h2>
        <p>
          Standard AI (like ChatGPT) knows about the public world, but it doesn't know about <em>your</em> specific project, 
          meeting notes, or internal policies.
        </p>
        <p>
          <strong>"Your Docs" tools</strong> (often called RAG or NotebookLM) allow you to securely upload a set of documents. 
          The AI then answers questions <em>only</em> using the information inside those files.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <Card className="p-4 bg-slate-50 border-slate-200">
             <div className="font-bold text-slate-700 mb-1 flex items-center gap-2">
               <Database className="w-4 h-4"/> Standard Chat
             </div>
             <p className="text-sm text-slate-600">"Write a generic project plan."</p>
             <p className="text-xs text-slate-400 mt-2">Uses public internet training data.</p>
          </Card>
          <Card className="p-4 bg-blue-50 border-blue-200">
             <div className="font-bold text-blue-800 mb-1 flex items-center gap-2">
               <Layers className="w-4 h-4"/> Docs AI
             </div>
             <p className="text-sm text-slate-600">"Based on these 5 PDFs, what is the timeline?"</p>
             <p className="text-xs text-blue-400 mt-2">Uses ONLY your uploaded files.</p>
          </Card>
        </div>
      </section>

      {/* SECTION 2: WORKFLOWS */}
      <section id="workflows" className="mb-12">
        <h2>Top 3 Workflows</h2>
        
        <div className="space-y-8">
          {/* Workflow 1 */}
          <div className="flex gap-4">
             <div className="p-3 bg-indigo-100 rounded-lg h-fit text-indigo-600 shrink-0">
               <Clock className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900">1. The "Project Onboarder"</h3>
               <p className="text-slate-600 mb-3">
                 Joined a project late? Don't read 500 emails. Upload the "Project Charter," "Status Reports," and "Risk Log."
               </p>
               <PromptCard 
                 label="Onboarding Prompt"
                 prompt="Create a one-page briefing doc for a new team member. Include: Background, Current Status, Key Risks, and Next Steps based on these files."
               />
             </div>
          </div>

          {/* Workflow 2 */}
          <div className="flex gap-4">
             <div className="p-3 bg-purple-100 rounded-lg h-fit text-purple-600 shrink-0">
               <Layers className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900">2. The "Synthesizer"</h3>
               <p className="text-slate-600 mb-3">
                 You have 10 feedback forms from different clients. You need one summary of themes.
               </p>
               <PromptCard 
                 label="Synthesis Prompt"
                 prompt="Identify the top 3 recurring themes across these documents. For each theme, provide 2 direct quotes as evidence."
               />
             </div>
          </div>

          {/* Workflow 3 */}
          <div className="flex gap-4">
             <div className="p-3 bg-emerald-100 rounded-lg h-fit text-emerald-600 shrink-0">
               <FileText className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900">3. The "Study Guide"</h3>
               <p className="text-slate-600 mb-3">
                 Need to learn a new internal policy or regulation? Turn the dry PDF into a quiz.
               </p>
               <PromptCard 
                 label="Learning Prompt"
                 prompt="Based on this training manual, generate 10 FAQ-style questions and answers that would help me understand the core concepts quickly."
               />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: POWER PATTERNS */}
      <section id="prompts" className="mb-12">
        <h2>Power-User Patterns</h2>
        <p className="mb-6">Once you have your docs uploaded, try these advanced moves.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-bold text-slate-900 mb-2">Compare & Contrast</h3>
            <p className="text-sm text-slate-600 mb-4">Great for comparing Vendor A vs Vendor B proposals.</p>
            <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
              "Create a comparison table for these documents. Columns: Pricing, Timeline, Deliverables, and Warranty Terms."
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-slate-900 mb-2">Timeline Extraction</h3>
            <p className="text-sm text-slate-600 mb-4">Great for legal discovery or project audits.</p>
            <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
              "Extract every specific date and milestone mentioned across these files. Present them in chronological order."
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 4: SAFETY */}
      <section id="safety" className="mb-12">
        <h2>Security Check</h2>
        <Callout variant="warning" title="Where are the files going?">
           <p className="mb-2">
             This is the most critical question. 
           </p>
           <ul className="list-disc pl-5 space-y-1">
             <li><strong>Internal/Enterprise Tools:</strong> Usually safe for internal business data (check IT policy).</li>
             <li><strong>Personal/Public Accounts:</strong> NEVER upload sensitive company docs here.</li>
           </ul>
        </Callout>
      </section>

      {/* SECTION 5: QUIZ */}
      <section id="quiz" className="mb-12 pt-8 border-t border-slate-200">
        <h2>Scenario Challenge</h2>
        <p className="mb-6">You have 5 different vendor proposals (PDFs) for a new software project. You need to compare their pricing quickly.</p>

        <Card className="p-6 bg-slate-50 not-prose">
          <div className="space-y-3">
            <button
              onClick={() => { setQuizAnswer('A'); setShowExplanation(true); }}
              className={`w-full text-left p-4 rounded border-2 transition-all ${
                quizAnswer === 'A' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold mb-1">A. Copy/Paste text into a public Chatbot</div>
              <div className="text-sm text-slate-600">It's faster than uploading files.</div>
            </button>

            <button
              onClick={() => { setQuizAnswer('B'); setShowExplanation(true); }}
              className={`w-full text-left p-4 rounded border-2 transition-all ${
                quizAnswer === 'B' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold mb-1">B. Upload to Internal "Docs AI" Tool</div>
              <div className="text-sm text-slate-600">Ask: "Create a pricing table comparing these 5 vendors."</div>
            </button>
            
            <button
              onClick={() => { setQuizAnswer('C'); setShowExplanation(true); }}
              className={`w-full text-left p-4 rounded border-2 transition-all ${
                quizAnswer === 'C' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold mb-1">C. Upload to a free "PDF Converter" website</div>
              <div className="text-sm text-slate-600">Convert them to Word, then read manually.</div>
            </button>
          </div>

          {showExplanation && (
            <div className="mt-6 animate-fade-in">
              {quizAnswer === 'B' ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg flex gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Correct!</p>
                    <p className="text-sm mt-1">
                      This is the secure and efficient way. Internal tools keep the data safe, and the AI can handle the cross-document comparison instantly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg flex gap-3">
                  <ShieldAlert className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Unsafe Approach.</p>
                    <p className="text-sm mt-1">
                      Options A and C involve sending sensitive vendor data to unapproved public servers. This is a data leak risk.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>
      </section>
    </ModuleLayout>
  );
}
