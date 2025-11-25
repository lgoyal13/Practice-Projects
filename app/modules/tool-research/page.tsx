
import React, { useState } from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { Card, Callout, PromptCard } from '../../../components/ui';
import { Globe, Search, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Page() {
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const sections = [
    { id: 'level1', title: 'Level 1: Smarter Search' },
    { id: 'level2', title: 'Level 2: Structured Outputs' },
    { id: 'level3', title: 'Level 3: Research Playbook' },
    { id: 'safety', title: 'Safety & Accuracy' },
    { id: 'quiz', title: 'Scenario Challenge' },
  ];

  return (
    <ModuleLayout
      title="Research & Web: Beyond Google"
      description="Learn how to use AI research tools (like Perplexity or Gemini) to gather live facts, citations, and competitive intelligence in minutes."
      duration="15 mins"
      audience="All Employees"
      sections={sections}
      nextModulePath="/modules/tool-documents"
    >
      {/* SECTION 1: LEVEL 1 */}
      <section id="level1" className="mb-12">
        <h2>Level 1: Search, but Smarter</h2>
        <p>
          Traditional search gives you a list of links (blue text) that you have to click and read.
          <strong> AI Research tools</strong> read the links for you and write a summary with citations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="p-4 bg-slate-50 border-slate-200">
             <div className="font-bold text-slate-700 mb-1 flex items-center gap-2">
               <Search className="w-4 h-4"/> Old Way
             </div>
             <p className="text-sm text-slate-600 mb-2">"marketing trends 2024"</p>
             <div className="text-xs text-slate-400 border-t border-slate-200 pt-2">
               Result: 10 links you have to open and read yourself.
             </div>
          </Card>
          <Card className="p-4 bg-blue-50 border-blue-200">
             <div className="font-bold text-blue-800 mb-1 flex items-center gap-2">
               <Globe className="w-4 h-4"/> AI Way
             </div>
             <p className="text-sm text-slate-600 mb-2">"What are the top 3 marketing trends for 2024? Cite sources."</p>
             <div className="text-xs text-blue-400 border-t border-blue-200 pt-2">
               Result: A summary paragraph with footnotes [1][2].
             </div>
          </Card>
        </div>

        <h3>Starter Prompts</h3>
        <div className="space-y-4">
          <PromptCard 
             label="Quick Briefing"
             prompt="In 5 bullet points, explain [Topic] and why it matters for our industry. Include links to 3 reputable sources." 
          />
          <PromptCard 
             label="News Catch-up"
             prompt="Summarize the main news regarding [Competitor/Topic] from the last 6 months." 
          />
        </div>
      </section>

      {/* SECTION 2: LEVEL 2 */}
      <section id="level2" className="mb-12">
        <h2>Level 2: Structured Outputs</h2>
        <p>
          Don't just ask for text. Ask for a <strong>Table</strong>. This is the superpower of AI research tools.
          They can synthesize data from 10 different websites into a single clean grid.
        </p>
        
        <PromptCard 
           label="Comparison Table Prompt"
           prompt="Compare the top 3 tools for [Use Case] in a table. \nColumns: Tool Name, Key Features, Pricing (Approx), and Pros/Cons." 
        />
      </section>

      {/* SECTION 3: LEVEL 3 */}
      <section id="level3" className="mb-12">
        <h2>Level 3: The Research Playbook</h2>
        <p>
          For power users (Strategy, Sales, Marketing), you can act as a "Senior Analyst."
        </p>
        
        <Card className="p-6 border-l-4 border-l-purple-600 bg-white">
          <h3 className="font-bold text-purple-900 mb-4">The "Market Scan" Template</h3>
          <p className="text-sm text-slate-600 mb-4">
            Use this to get deep intelligence on a new topic or competitor.
          </p>
          <div className="font-mono text-sm text-slate-700 whitespace-pre-wrap bg-slate-50 p-4 rounded border border-slate-200">
            {`You are a Market Intelligence Analyst helping our company understand [TOPIC].
Focus on the last [TIME FRAME].

Please provide:
1. A short overview of the main themes (3-5 bullets).
2. A table of key events/launches with dates and sources.
3. A list of 3 strategic implications for a business like ours.

Prioritize credible sources like [SOURCE 1] or [SOURCE 2].`}
          </div>
        </Card>
      </section>

      {/* SECTION 4: SAFETY */}
      <section id="safety" className="mb-12">
        <h2>Safety & Accuracy</h2>
        <div className="space-y-4">
          <Callout variant="warning" title="Hallucinations Happen">
            <p>
              Even "search" AIs can make mistakes or cite broken links. 
              <strong>Always click the citation number [1]</strong> to verify the source actually says what the AI claims.
            </p>
          </Callout>
          <Callout variant="danger" title="Data Privacy">
            <p>
              Most web-search AIs are <strong>Public Tools</strong>. 
              Do not paste internal confidential documents into the prompt asking it to "find similar things online."
            </p>
          </Callout>
        </div>
      </section>

      {/* SECTION 5: QUIZ */}
      <section id="quiz" className="mb-12 pt-8 border-t border-slate-200">
        <h2>Scenario Challenge</h2>
        <p className="mb-6">You need to compare pricing for 5 different software vendors.</p>

        <Card className="p-6 bg-slate-50 not-prose">
          <div className="space-y-3">
            <button
              onClick={() => { setQuizAnswer(1); setShowExplanation(true); }}
              className={`w-full text-left p-4 rounded border-2 transition-all ${
                quizAnswer === 1 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold mb-1">A. "Tell me about software pricing."</div>
              <div className="text-sm text-slate-600">Too vague. You'll get a generic essay.</div>
            </button>

            <button
              onClick={() => { setQuizAnswer(2); setShowExplanation(true); }}
              className={`w-full text-left p-4 rounded border-2 transition-all ${
                quizAnswer === 2 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold mb-1">B. "Create a table comparing pricing for Vendor A, B, C, D, and E. Include links."</div>
              <div className="text-sm text-slate-600">Specific format (Table) + Specific Targets + Citations.</div>
            </button>
          </div>

          {showExplanation && (
            <div className="mt-6 animate-fade-in">
              {quizAnswer === 2 ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg flex gap-3">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Correct!</p>
                    <p className="text-sm mt-1">
                      Requesting a <strong>Table</strong> is the best way to handle comparisons. Asking for links ensures you can verify the numbers.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg flex gap-3">
                  <AlertTriangle className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Try again.</p>
                    <p className="text-sm mt-1">
                      Without specific vendor names or a format request, the AI won't know what you are looking for.
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
