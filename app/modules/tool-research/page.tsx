import React, { useState } from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { Card, Callout, PromptCard, Button } from '../../../components/ui';
import { Globe, Search, CheckCircle2, AlertTriangle, ArrowLeft, ArrowRight, Zap, BrainCircuit, Target } from 'lucide-react';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    { id: 'why-research-tools', title: 'Why Research Tools Exist' },
    { id: 'fast-vs-deep', title: 'Fast vs Deep Research' },
    { id: 'gemini-deep-research', title: 'Gemini for Deep Research' },
    { id: 'perplexity-engine', title: 'Perplexity as a Research Engine' },
    { id: 'choose-tool', title: 'Choosing the Right Tool' },
  ];

  const totalSteps = sections.length;

  const handleNext = () => {
    setCurrentStep(prev => Math.min(totalSteps - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <section id="why-research-tools" className="mb-12 animate-fade-in">
            <h2>Search plus superpowers</h2>
            <p className="text-lg text-slate-700">
              Regular AI chat models are fantastic at rewriting, brainstorming, and explaining concepts you already understand.
              "Your Docs" tools (like NotebookLM) are brilliant at reading your internal PDFs.
            </p>
            <p className="text-slate-600">
              But what if you need to know <strong>what happened in the market this morning</strong>? Or need a report backed by real citations?
              That is where <strong>Research Tools</strong> come in.
            </p>

            <div className="my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What this module is really about</h3>
              <p className="text-slate-600 mb-4">
                This isn't just about Googling faster. It's about having a tireless research assistant who reads 20 websites in seconds
                and synthesizes the findings into a clean brief.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                 <h4 className="font-bold text-slate-900 mb-3">Use these tools for:</h4>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                     Competitive and market intelligence
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                     Regulation and policy updates
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                     "What changed this quarter?" news scanning
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                     Quick fact-checking with clickable links
                   </li>
                 </ul>
              </div>
            </div>
          </section>
        );
      case 1:
        return (
          <section id="fast-vs-deep" className="mb-12 animate-fade-in">
            <h2>Fast chat vs deep research</h2>
            <p className="mb-6">
              Not all research questions are equal. Sometimes you need a quick answer, and sometimes you need a PhD-level thesis.
              Modern AI tools now offer two distinct "modes" for this.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
              <Card className="p-6 border-t-4 border-t-blue-400">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-bold text-slate-900">Fast Mode</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4 min-h-[40px]">
                  <strong>Best for:</strong> Quick drafts, scanning headlines, simple definitions, and summaries.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100">
                  "Give me a quick overview of telematics-based auto insurance."
                </div>
              </Card>

              <Card className="p-6 border-t-4 border-t-purple-600">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-slate-900">Deep / Reasoning Mode</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4 min-h-[40px]">
                  <strong>Best for:</strong> Multi-step analysis, strategic comparisons, and reports that need to be 100% solid.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100">
                  "Compare how regulators in US vs EU talk about telematics-based discounts in the last 12 months. Include citations."
                </div>
              </Card>
            </div>

            <Callout variant="info" title="Rule of Thumb">
              If you’d be embarrassed to get it wrong in front of leadership, lean toward deep/reasoning modes (like Gemini Advanced or Perplexity Pro). It takes longer, but it checks its work.
            </Callout>
          </section>
        );
      case 2:
        return (
          <section id="gemini-deep-research" className="mb-12 animate-fade-in">
            <h2>Using Gemini when the question is big</h2>
            <p className="mb-6">
              Gemini isn't just a chatbot. It is connected to the entire Google ecosystem.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-8">
              <li>
                <strong>On the Web:</strong> It can read dozens of sources to synthesize a structured report (Deep Research style).
              </li>
              <li>
                <strong>In Workspace:</strong> It can help you draft the email or slide deck based on that research immediately.
              </li>
            </ul>

            <Card className="p-6 bg-white border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Scenario: Plan a Research-Backed Campaign</h3>
              <p className="text-sm text-slate-600 mb-6">
                You need a tactical plan for a new product launch, grounded in what competitors are doing right now.
              </p>

              <div className="space-y-4">
                <div>
                  <strong className="text-sm text-slate-900 block mb-1">The Prompt</strong>
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-sm text-slate-700">
                    "Plan a 3-week campaign for our new renters' insurance product targeting young professionals. Use recent articles about renters' insurance trends. Output a table with week, channel, message, and main CTA."
                  </div>
                </div>

                <div>
                  <strong className="text-sm text-slate-900 block mb-1">What to look for</strong>
                  <p className="text-sm text-slate-600">
                    You should see a structured table. Crucially, look for the citations (little numbers or dropdowns) to verify where it found the "trends."
                  </p>
                </div>

                <div>
                   <strong className="text-sm text-slate-900 block mb-1">Iterate</strong>
                   <p className="text-sm text-slate-600">
                     Don't stop there. Ask: <em>"Make it shorter,"</em> <em>"Focus on members with roadside assistance,"</em> or <em>"Add SMS touchpoints."</em>
                   </p>
                </div>
              </div>
            </Card>
          </section>
        );
      case 3:
        return (
          <section id="perplexity-engine" className="mb-12 animate-fade-in">
            <h2>Perplexity: citations first</h2>
            <p className="mb-6">
              Perplexity is a "search engine that gives you answers, not links." Its superpower is transparency. Every claim usually has a little number next to it, linking to the source.
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Competitive Intelligence Exercise</h3>
              <PromptCard 
                label="Prompt Template"
                prompt={`Provide a competitive intelligence summary for [Industry] in [Time Window]. For each:
1. Cite at least two reputable sources.
2. Summarize each source in 1–2 sentences.
3. Present a table with columns: Industry, Article Title & Source (Date), Short Summary.`}
              />
              <p className="text-sm text-slate-600 mt-4">
                You can adjust the <strong>Time Window</strong> (e.g., "last 30 days") and <strong>Format</strong> (Table vs Bullets) to get exactly what you need for your slide deck.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Tailor it to your role</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Target className="w-4 h-4 text-purple-600 mt-0.5" />
                  <strong>Product Manager:</strong> Ask for "New feature landscapes and user complaints."
                </li>
                <li className="flex gap-2">
                  <Target className="w-4 h-4 text-purple-600 mt-0.5" />
                  <strong>Marketer:</strong> Ask for "Consumer sentiment trends and viral topics."
                </li>
                <li className="flex gap-2">
                  <Target className="w-4 h-4 text-purple-600 mt-0.5" />
                  <strong>Risk/Ops:</strong> Ask for "Regulatory changes or loss trends in [Region]."
                </li>
              </ul>
            </div>
          </section>
        );
      case 4:
        return (
          <section id="choose-tool" className="mb-12 animate-fade-in">
            <h2>Which tool for which question?</h2>
            <p className="mb-8 text-lg text-slate-700">
              I’ll let you in on a secret: You don’t need to be a "power user." You just need a simple rule-of-thumb 
              to know when to use basic chat, when to open your docs, and when to run deep research.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
              <Card className="p-4 border-t-4 border-t-slate-400">
                <h3 className="font-bold text-slate-900 mb-2">Use Chat Assistant when...</h3>
                <p className="text-sm text-slate-600">
                  You’re drafting, rephrasing, or brainstorming based on what you <strong>already know</strong>. You don't need links or live web info.
                </p>
              </Card>

              <Card className="p-4 border-t-4 border-t-blue-500">
                <h3 className="font-bold text-slate-900 mb-2">Use NotebookLM when...</h3>
                <p className="text-sm text-slate-600">
                  The truth lives inside your <strong>internal PDFs, decks, and docs</strong>. You want citations, but only from your own materials.
                </p>
              </Card>

              <Card className="p-4 border-t-4 border-t-purple-600">
                <h3 className="font-bold text-slate-900 mb-2">Use Research Tools when...</h3>
                <p className="text-sm text-slate-600">
                  You need <strong>timely information</strong>, external data, or market views. You’d send a human analyst to Google news or research databases.
                </p>
              </Card>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> Troubleshooting
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                   <span>If the answer feels generic, <strong>narrow the question</strong> (add region, time, or persona).</span>
                </li>
                <li className="flex gap-2 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                   <span>If the answer feels made up, <strong>check the citations</strong>. If they look weak, ask it to "Verify with more reputable sources."</span>
                </li>
                <li className="flex gap-2 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                   <span>If you need to share it, ask explicitly for structure: <strong>"Format with sections, bullets, and an executive summary."</strong></span>
                </li>
              </ul>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <ModuleLayout
      title="Research & Web: Beyond Google"
      description="Learn how to use AI research tools (like Perplexity or Gemini) to gather live facts, citations, and competitive intelligence in minutes."
      duration="15 mins"
      audience="All Employees"
      sections={sections}
      nextModulePath="/modules/tool-documents"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${Math.round(((currentStep + 1) / totalSteps) * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between mt-12 pt-8 border-t border-slate-200">
        <Button 
          variant="secondary" 
          onClick={handlePrev} 
          disabled={currentStep === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Previous
        </Button>

        {currentStep < totalSteps - 1 ? (
          <Button onClick={handleNext}>
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button variant="outline" disabled className="opacity-75 cursor-not-allowed">
            Module Complete <CheckCircle2 className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </ModuleLayout>
  );
}