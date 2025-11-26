import React, { useState } from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { Card, Callout, Button } from '../../../components/ui';
import { FileText, Layers, Clock, ShieldAlert, CheckCircle2, Database, ArrowLeft, ArrowRight, Lightbulb, Search, Zap, AlertTriangle, MessageSquare, Upload } from 'lucide-react';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    { id: 'why-doc-tools', title: 'Why "Your Docs" Tools Exist' },
    { id: 'notebooklm-basics', title: 'NotebookLM in Plain Language' },
    { id: 'notebooklm-scenario', title: 'Scenario: Competitive Pricing Pack' },
    { id: 'first-tasks', title: 'Great First Tasks to Try' },
    { id: 'habits-and-safety', title: 'Habits That Keep You Effective' },
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
          <section id="why-doc-tools" className="mb-12 animate-fade-in">
            <h2>When Google can’t help you</h2>
            <p className="text-lg text-slate-700">
              Search engines and open web tools are amazing, but they have a blind spot: they can't see your internal strategy docs, meeting notes, or confidential spreadsheets.
            </p>
            <p className="text-slate-600">
              The "Your Docs" category of tools (like <strong>NotebookLM</strong>) shines when the answer is buried in <strong>your</strong> material, not the internet.
            </p>

            <div className="my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What this module is about</h3>
              <p className="text-slate-600 mb-4">
                This is about using AI to read, link, and explain the documents you already have. 
                It gets you grounded answers that cite <em>only</em> your sources, not random blog posts.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                 <h4 className="font-bold text-slate-900 mb-3">Imagine being able to:</h4>
                 <ul className="space-y-3 text-sm text-slate-700">
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                     <span>Summarize 5 years of member feedback into key trends.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                     <span>Turn a 40-page policy PDF into a 1-page plain language explainer.</span>
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                     <span>Compare three project plans and pull out shared risks and dependencies.</span>
                   </li>
                 </ul>
              </div>
            </div>
          </section>
        );
      case 1:
        return (
          <section id="notebooklm-basics" className="mb-12 animate-fade-in">
            <h2>Think of it as a private research room</h2>
            <p className="mb-6">
              When you use a tool like NotebookLM, you are building a custom expert. Here is how it works in plain language.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
              <Card className="p-6 border-t-4 border-t-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900">1. Ingestion</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Drag in PDFs, Google Docs, Sheets, Slides, web pages, or even paste text. This is the "brain" of your notebook.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-purple-500">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-slate-900">2. Notebooks</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Group related sources into a workspace. Keep "Q3 Competitive Analysis" separate from "Risk Program Docs."
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-emerald-500">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900">3. Chat</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Ask questions across all your sources at once. <br/>
                  <em>"What are the top 5 risks mentioned in these docs?"</em>
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-amber-500">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-slate-900">4. Views</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Generate structured outputs instantly: Study guides, briefing docs, timelines, mind maps, or FAQs.
                </p>
              </Card>
            </div>
          </section>
        );
      case 2:
        return (
          <section id="notebooklm-scenario" className="mb-12 animate-fade-in">
            <h2>Walkthrough: Understand competitors in 10 minutes</h2>
            <p className="mb-6">
              Let's look at a concrete scenario: <strong>"Competitive Pricing Analysis."</strong>
            </p>

            <Card className="p-6 bg-white border-slate-200">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Upload Sources</h4>
                    <p className="text-sm text-slate-600">Upload competitor PDFs and link to their pricing web pages in one Notebook.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ask the Big Question</h4>
                    <div className="mt-2 bg-slate-50 p-3 rounded border border-slate-200 font-mono text-sm text-slate-700">
                      "Compare the pricing strategies of Company X and Company Y in a bullet list, then create a simple comparison table I can paste into slides."
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Refine the Output</h4>
                    <p className="text-sm text-slate-600 mb-2">Treat the answer as a draft. Follow up with:</p>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200 font-mono text-xs text-slate-600">
                      "Focus on enterprise plans and highlight risks for our segment."
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Generate a Quiz</h4>
                    <p className="text-sm text-slate-600 mb-2">Test your own understanding:</p>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200 font-mono text-xs text-slate-600">
                      "Create 5 quiz questions to test my understanding of how these companies price."
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        );
      case 3:
        return (
          <section id="first-tasks" className="mb-12 animate-fade-in">
            <h2>Five things you can do in your first week</h2>
            <p className="mb-8 text-lg text-slate-700">
              Don't wait for a "big project." Here are five simple tasks to try right now.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                   <FileText className="w-5 h-5 text-purple-500 mt-1" />
                   <div>
                     <strong className="block text-slate-900">Training Handbook</strong>
                     <p className="text-sm text-slate-600">
                       "Give me a 1-page onboarding guide for new hires. Make a version for managers and a version for analysts."
                     </p>
                   </div>
                </div>
              </Card>

              <Card className="p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                   <Search className="w-5 h-5 text-blue-500 mt-1" />
                   <div>
                     <strong className="block text-slate-900">Research PDFs</strong>
                     <p className="text-sm text-slate-600">
                       "Write a literature-review-style summary and a mind map of themes from these 4 papers."
                     </p>
                   </div>
                </div>
              </Card>

              <Card className="p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                   <Database className="w-5 h-5 text-emerald-500 mt-1" />
                   <div>
                     <strong className="block text-slate-900">Quarterly Reports</strong>
                     <p className="text-sm text-slate-600">
                       "Pull out 5 key trends from these spreadsheets and propose 3 slide headlines."
                     </p>
                   </div>
                </div>
              </Card>

              <Card className="p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                   <ShieldAlert className="w-5 h-5 text-amber-500 mt-1" />
                   <div>
                     <strong className="block text-slate-900">Policy PDF</strong>
                     <p className="text-sm text-slate-600">
                       "Explain this policy in plain language for frontline staff. Include 5 FAQs."
                     </p>
                   </div>
                </div>
              </Card>

              <Card className="p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3">
                   <Clock className="w-5 h-5 text-indigo-500 mt-1" />
                   <div>
                     <strong className="block text-slate-900">Project Notes</strong>
                     <p className="text-sm text-slate-600">
                       "Turn these messy notes into a rollout plan with milestones and owners."
                     </p>
                   </div>
                </div>
              </Card>
            </div>

            <Callout variant="info" title="Pro Tip">
              If the answer feels generic, check whether you actually uploaded the right docs and referenced them in your question. The AI can only be as smart as the files you give it.
            </Callout>
          </section>
        );
      case 4:
        return (
          <section id="habits-and-safety" className="mb-12 animate-fade-in">
            <h2>Good habits make this a superpower, not a toy</h2>
            <p className="mb-8">
              To get professional results, treat this like a professional workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Best Practices</h3>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <strong>Keep notebooks focused</strong>
                      <p className="text-slate-500">Don’t mix unrelated projects. One notebook per topic or initiative.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <strong>Name notebooks clearly</strong>
                      <p className="text-slate-500">"Q3 Member Churn Review" is better than "Untitled Notebook 4".</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <strong>Ask grounded questions</strong>
                      <p className="text-slate-500">"Based <em>only</em> on these docs, summarize..." or "If sources disagree, highlight where."</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <strong>Use it to teach back</strong>
                      <p className="text-slate-500">Generate quizzes and flashcards for yourself to verify you understood the material.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-amber-500" /> Troubleshooting
                 </h3>
                 <ul className="space-y-3 text-sm text-slate-700">
                   <li className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>If something looks wrong, click on the cited source number and check the original text.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>If the model can’t find an answer, assume the source documents might be incomplete, not just that the AI is "dumb."</span>
                   </li>
                 </ul>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <ModuleLayout
      title="Your Documents: AI as a Research Assistant"
      description="Learn how to use tools like NotebookLM to chat securely with your own internal files, creating grounded summaries, reports, and insights."
      duration="15 mins"
      audience="All Employees"
      sections={sections}
      nextModulePath="/modules/tool-builder"
    >
      {/* Progress Bar */}
      <div className="mb-10">
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

      {/* Current Section Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
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