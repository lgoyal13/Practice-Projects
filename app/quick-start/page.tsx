import React, { useState } from 'react';
import { PageLayout, Card, Button, ProgressBar, Callout, Badge } from '../../components/ui';
import { useRouter } from '../../lib/routerContext';
import { 
  ArrowRight, 
  BrainCircuit, 
  MessageSquare, 
  CheckCircle, 
  AlertTriangle,
  RefreshCw,
  ThumbsUp
} from 'lucide-react';

export default function Page() {
  const { push } = useRouter();
  const [step, setStep] = useState(1);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const totalSteps = 3;
  const nextStep = () => {
    setStep(Math.min(step + 1, totalSteps + 1));
    window.scrollTo(0, 0);
  };

  // Completion State
  if (step > totalSteps) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in">
        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">You're ready to start!</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
          You now understand how AI thinks, how to prompt it effectively, and how to verify its work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => push('/modules')}>
            Continue Learning
          </Button>
          <Button size="lg" variant="outline" onClick={() => push('/playground')}>
            Try the Playground
          </Button>
        </div>
      </div>
    );
  }

  return (
    <PageLayout 
      title="Quick Start Guide" 
      description="Understand the basics of Generative AI in 10 minutes."
    >
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-10">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-3">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <ProgressBar current={step} total={totalSteps} />
        </div>

        {/* STEP 1: CONCEPT */}
        {step === 1 && (
          <div className="animate-fade-in space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 shrink-0 hidden md:block">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">It's not magic. It's "Next Word Prediction".</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Generative AI (like the models we use) has read billions of documents. 
                  When you ask it a question, it isn't "thinking" like a human. 
                  It is simply predicting the most likely next word in a sentence based on patterns it has seen before.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-slate-50 border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">It is GREAT at:</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex gap-2">✅ Summarizing messy text</li>
                      <li className="flex gap-2">✅ Transforming tone (e.g., "Make this polite")</li>
                      <li className="flex gap-2">✅ Brainstorming ideas</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50 border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">It is BAD at:</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex gap-2">❌ Knowing "truth" vs "fiction"</li>
                      <li className="flex gap-2">❌ Math (without specific tools)</li>
                      <li className="flex gap-2">❌ Keeping secrets (if you use public tools)</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button size="lg" onClick={nextStep}>
                Next: See an Example <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: EXAMPLE */}
        {step === 2 && (
          <div className="animate-fade-in space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Garbage In, Garbage Out</h2>
              <p className="text-lg text-slate-700 mb-8">
                The quality of the AI's answer depends entirely on the quality of your prompt.
                See the difference below for a typical task: <strong>Drafting a rejection email.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bad Example */}
              <div className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
                <Badge variant="danger" className="mb-2">Weak Prompt</Badge>
                <div className="bg-white border border-red-200 rounded-xl p-4 shadow-sm">
                  <p className="font-mono text-sm text-slate-600">
                    "Write a letter to John saying we can't pay for the extra work."
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                  <div className="ml-8 text-sm text-slate-600 space-y-2 italic">
                    <p>"Dear John,"</p>
                    <p>"We are writing to inform you that we will not pay for the extra work..."</p>
                    <p className="text-red-500 font-semibold not-italic text-xs mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3"/> Too blunt, no contract reference, generic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Good Example */}
              <div className="space-y-4">
                <Badge variant="success" className="mb-2">Strong Prompt</Badge>
                <div className="bg-white border border-green-200 rounded-xl p-4 shadow-md ring-1 ring-green-100">
                  <p className="font-mono text-sm text-slate-800">
                    "Act as a professional Project Manager. Draft a letter to a vendor explaining that their request for 'extra budget' is denied based on the Fixed Price Agreement. Use an empathetic but firm tone. Do not use jargon."
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200"></div>
                  <div className="ml-8 text-sm text-slate-600 space-y-2 italic">
                    <p>"Dear Vendor,"</p>
                    <p>"We understand the complexities of this project. We have carefully reviewed your request..."</p>
                    <p>"Unfortunately, under the Fixed Price terms of our agreement..."</p>
                    <p className="text-green-600 font-semibold not-italic text-xs mt-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3"/> Professional, accurate, empathetic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Callout variant="info" title="Key Takeaway">
              Give the AI a <strong>Role</strong> ("Act as..."), a <strong>Task</strong>, and <strong>Constraints</strong> ("No jargon").
            </Callout>

            <div className="flex justify-end pt-4">
              <Button size="lg" onClick={nextStep}>
                Next: Your Turn <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: INTERACTIVE QUIZ */}
        {step === 3 && (
          <div className="animate-fade-in space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                   <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Mini-Exercise: Fix the Prompt</h2>
              </div>
              <p className="text-lg text-slate-700 mb-6">
                <strong>Scenario:</strong> You need to email a client explaining that product delivery is delayed by 2 weeks due to supply chain issues.
              </p>
              <p className="text-slate-600 mb-8">
                Which prompt will get the best result?
              </p>
            </div>

            <div className="space-y-4">
              {/* Option A */}
              <button
                onClick={() => setQuizAnswer('A')}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  quizAnswer === 'A' 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${quizAnswer === 'A' ? 'border-red-500 bg-red-500 text-white' : 'border-slate-300'}`}>A</div>
                  <div>
                    <p className="font-mono text-sm text-slate-800 mb-2">"Why is it late? Write an email."</p>
                    {quizAnswer === 'A' && (
                      <p className="text-red-600 text-sm font-medium animate-fade-in">
                        Too vague! The AI doesn't know about the supply chain or the 2-week delay. It will hallucinate a reason.
                      </p>
                    )}
                  </div>
                </div>
              </button>

              {/* Option B */}
              <button
                onClick={() => setQuizAnswer('B')}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  quizAnswer === 'B' 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${quizAnswer === 'B' ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300'}`}>B</div>
                  <div>
                    <p className="font-mono text-sm text-slate-800 mb-2">
                      "Draft an email to a client explaining a 2-week delivery delay. Cite 'global supply chain issues' as the primary driver. Tone should be apologetic but confident."
                    </p>
                    {quizAnswer === 'B' && (
                      <div className="mt-2 animate-fade-in">
                        <p className="text-green-700 text-sm font-bold flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" /> Correct!
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          You provided specific data (2 weeks, supply chain) and tone instructions. Perfect.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* Option C */}
              <button
                onClick={() => setQuizAnswer('C')}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  quizAnswer === 'C' 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${quizAnswer === 'C' ? 'border-red-500 bg-red-500 text-white' : 'border-slate-300'}`}>C</div>
                  <div>
                    <p className="font-mono text-sm text-slate-800 mb-2">"Email the client about the delay."</p>
                    {quizAnswer === 'C' && (
                      <p className="text-red-600 text-sm font-medium animate-fade-in">
                        Too short. The AI needs context to be useful.
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                size="lg" 
                onClick={nextStep} 
                disabled={quizAnswer !== 'B'}
                variant={quizAnswer === 'B' ? 'primary' : 'secondary'}
              >
                Finish <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

      </div>
    </PageLayout>
  );
}