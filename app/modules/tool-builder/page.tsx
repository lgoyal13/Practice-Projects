
import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { Card, Callout, PromptCard, Badge, Button } from '../../../components/ui';
import { PenTool, Sliders, Cpu, ShieldAlert, Hammer, ArrowRight } from 'lucide-react';
import { useRouter } from '../../../lib/routerContext';

export default function Page() {
  const { push } = useRouter();

  const sections = [
    { id: 'intro', title: 'From Chatter to Builder' },
    { id: 'concepts', title: 'System vs. User' },
    { id: 'workflow', title: 'The Prototyping Loop' },
    { id: 'templates', title: 'Template Library' },
    { id: 'activity', title: 'Design Your Assistant' },
  ];

  return (
    <ModuleLayout
      title="The Builder's Lab: Prototyping AI Tools"
      description="Ready to move beyond basic chat? Learn how to use 'Playground' environments (like Google AI Studio) to build reusable AI assistants for your team."
      duration="20 mins"
      audience="Power Users & Champions"
      sections={sections}
      nextModulePath="/playground"
    >
      {/* HEADER ALERT */}
      <div className="mb-8 not-prose">
        <Callout variant="warning" title="Advanced Module">
          This module is optional. It is intended for employees who are comfortable with technology and want to build tools for others.
        </Callout>
      </div>

      {/* SECTION 1: INTRO */}
      <section id="intro" className="mb-12">
        <h2>From Chatter to Builder</h2>
        <p>
          Most people use AI like a chat app: they type a question, get an answer, and close the tab.
        </p>
        <p>
          <strong>Builders</strong> use AI differently. They use "Playground" environments to design 
          <strong> stable, repeatable tools</strong> that can be shared with the team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="p-6 bg-slate-50 border-slate-200">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-2">
              <span className="text-xl">💬</span> The User
            </h3>
            <p className="text-sm text-slate-600">
              "Rewrites emails one by one."
            </p>
          </Card>
          <Card className="p-6 bg-emerald-50 border-emerald-200">
            <h3 className="font-bold text-emerald-800 flex items-center gap-2 mb-2">
              <Hammer className="w-5 h-5" /> The Builder
            </h3>
            <p className="text-sm text-slate-600">
              "Creates an 'Email Polisher' tool that the whole team can use."
            </p>
          </Card>
        </div>
      </section>

      {/* SECTION 2: CONCEPTS */}
      <section id="concepts" className="mb-12">
        <h2>Core Concept: System Instructions</h2>
        <p>
          In a chat, you just type a message. In a Playground, you have two boxes:
        </p>
        
        <div className="space-y-4 not-prose">
          <Card className="p-4 border-l-4 border-l-purple-600 bg-purple-50/50">
            <div className="flex items-center gap-2 mb-2 font-bold text-purple-900 uppercase text-xs tracking-wider">
              <Cpu className="w-4 h-4" /> System Instruction (The Brain)
            </div>
            <p className="text-sm text-slate-800 font-medium">
              "You are a helpful customer service assistant. You always speak in a polite, apologetic tone. You never admit liability."
            </p>
            <p className="text-xs text-slate-500 mt-2">
              *This stays constant. It defines the AI's personality and rules.*
            </p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-600 bg-blue-50/50">
            <div className="flex items-center gap-2 mb-2 font-bold text-blue-900 uppercase text-xs tracking-wider">
              <span className="text-lg leading-none">👤</span> User Prompt (The Input)
            </div>
            <p className="text-sm text-slate-800 font-medium">
              "My package is late and I am angry."
            </p>
            <p className="text-xs text-slate-500 mt-2">
              *This changes every time. It's the specific task for today.*
            </p>
          </Card>
        </div>
      </section>

      {/* SECTION 3: WORKFLOW */}
      <section id="workflow" className="mb-12">
        <h2>The Prototyping Loop</h2>
        <p>
          Building a tool isn't magic. It's a 3-step loop.
        </p>
        <ol className="list-decimal pl-5 space-y-4 text-slate-700">
          <li>
            <strong>Define the Goal:</strong> e.g., "I want to turn messy meeting notes into clean HTML emails."
          </li>
          <li>
            <strong>Draft the System Prompt:</strong> Give the AI its role and constraints.
          </li>
          <li>
            <strong>Test & Iterate:</strong> Feed it 5 different messy notes. If it fails on one, update the System Prompt (not the user prompt) to handle that edge case.
          </li>
        </ol>
      </section>

      {/* SECTION 4: TEMPLATES */}
      <section id="templates" className="mb-12">
        <h2>Template Library</h2>
        <p>Copy these System Instructions into a Playground (like Google AI Studio) to start.</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">1. The Corporate Editor</h3>
            <p className="text-sm text-slate-600 mb-2">Ensures all team emails sound professional and consistent.</p>
            <PromptCard 
              label="System Instruction"
              prompt={`You are an internal communications assistant for [Your Company]. 
Your job is to rewrite user input to be clear, concise, and professional.

Guidelines:
- Use active voice.
- Remove passive aggressive language.
- Ensure the tone is helpful but firm.
- If the user provides messy bullet points, format them into a clean paragraph.`}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">2. The Data Extractor</h3>
            <p className="text-sm text-slate-600 mb-2">Turns unstructured text into CSV-ready data.</p>
            <PromptCard 
              label="System Instruction"
              prompt={`You are a Data Analyst.
Your job is to extract specific fields from the text provided by the user.

Output Format: JSON only.
Fields to extract:
- "date": YYYY-MM-DD
- "client_name": String
- "amount": Number (if mentioned)
- "sentiment": "Positive" | "Neutral" | "Negative"

If a field is missing, return null.`}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: ACTIVITY */}
      <section id="activity" className="mb-12">
        <h2>Activity: Design Your Assistant</h2>
        <Card className="p-6 bg-slate-50 border-slate-200 not-prose">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PenTool className="w-5 h-5 text-purple-600" /> Worksheet
          </h3>
          <p className="text-slate-600 mb-6">
            Before you build, plan. Answer these three questions for your first tool.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">1. Who is it for?</label>
              <div className="p-3 bg-white border border-slate-200 rounded text-sm text-slate-400 italic">
                e.g., "The Sales Team"
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">2. What repetitive task does it solve?</label>
              <div className="p-3 bg-white border border-slate-200 rounded text-sm text-slate-400 italic">
                e.g., "Summarizing 1-hour call transcripts into 3 bullet points."
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">3. What is the one rule it must never break?</label>
              <div className="p-3 bg-white border border-slate-200 rounded text-sm text-slate-400 italic">
                e.g., "Never make up a quote that wasn't said."
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <Button onClick={() => push('/playground')} className="w-full">
              Go to Playground to Build It <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </section>

      {/* SECTION 6: SAFETY */}
      <section id="safety" className="mb-12">
        <Callout variant="danger" title="Safety Warning: Dev Environment">
           <p className="mb-2">
             Builder tools and Playgrounds are often treated as <strong>Development Environments</strong>.
           </p>
           <ul className="list-disc pl-5 space-y-1">
             <li>Do not paste real customer PII or highly sensitive strategy docs while testing.</li>
             <li>Use "Dummy Data" (e.g., "Jane Doe" instead of a real client).</li>
             <li>Check with IT before connecting these prototypes to real internal systems/APIs.</li>
           </ul>
        </Callout>
      </section>
    </ModuleLayout>
  );
}
