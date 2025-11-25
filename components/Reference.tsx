import React from 'react';
import { PageLayout, Heading, Card, Callout, PromptCard } from './ui';

export const Reference: React.FC = () => {
  return (
    <PageLayout 
      title="Quick Reference Guide" 
      description="Approved tools, safety rules, and prompt templates for your daily work."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-8">
          
          <section>
            <Heading level={2} className="mb-4">Effective Prompting</Heading>
            <Card className="p-6">
               <h3 className="text-lg font-bold text-blue-800 mb-4 border-b border-blue-100 pb-2">The 4-Part Formula</h3>
               <div className="space-y-4">
                 <div className="flex gap-3">
                   <span className="font-bold text-slate-900 w-24 shrink-0">1. Persona</span>
                   <p className="text-slate-600 text-sm">"Act as a Senior Project Manager..."</p>
                 </div>
                 <div className="flex gap-3">
                   <span className="font-bold text-slate-900 w-24 shrink-0">2. Context</span>
                   <p className="text-slate-600 text-sm">"I am reviewing a vendor proposal for IT services..."</p>
                 </div>
                 <div className="flex gap-3">
                   <span className="font-bold text-slate-900 w-24 shrink-0">3. Task</span>
                   <p className="text-slate-600 text-sm">"Summarize the key deliverables and risks..."</p>
                 </div>
                 <div className="flex gap-3">
                   <span className="font-bold text-slate-900 w-24 shrink-0">4. Format</span>
                   <p className="text-slate-600 text-sm">"Provide a bulleted list with risks in red."</p>
                 </div>
               </div>
            </Card>
          </section>

          <section>
            <Heading level={2} className="mb-4">Common Templates</Heading>
            <div className="space-y-4">
              <PromptCard 
                label="Email Draft"
                prompt="Draft a polite but firm email to a client explaining that we need the signed contract before we can start work. Reference section 2.1 of the proposal." 
              />
              <PromptCard 
                label="Summarization"
                prompt="Summarize the following meeting notes into a chronological list of action items. Highlight any deadlines that are at risk." 
              />
            </div>
          </section>

          <section>
            <Heading level={2} className="mb-4">Approved Use Cases</Heading>
            <Card className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li>Drafting internal emails</li>
                    <li>Brainstorming marketing copy</li>
                    <li>Summarizing <i>anonymized</i> survey feedback</li>
                    <li>Explaining complex excel formulas</li>
                 </ul>
                 <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li>Debugging SQL queries</li>
                    <li>Rephrasing technical jargon for clients</li>
                    <li>Meeting agenda creation</li>
                    <li>Role-playing difficult conversations</li>
                 </ul>
              </div>
            </Card>
          </section>
        </div>

        <div className="space-y-6">
          <Callout variant="danger" title="Strictly Prohibited">
            <ul className="space-y-2 text-sm mt-2">
              <li>❌ Account Numbers</li>
              <li>❌ Client Names</li>
              <li>❌ Social Security Numbers</li>
              <li>❌ HR/Salary Data</li>
              <li>❌ Confidential Strategy</li>
            </ul>
          </Callout>
          
          <Callout variant="info" title="Power User Tip">
            If the AI gives a wrong answer, ask it: 
            <span className="block mt-2 font-mono text-xs bg-blue-100 p-2 rounded">
              "Take a step back and explain your reasoning step-by-step before giving the final answer."
            </span>
          </Callout>

          <Callout variant="success" title="Approved Tools">
            <ul className="space-y-2 text-sm mt-2">
              <li>✅ Internal Gemini Chat</li>
              <li>✅ GitHub Copilot (Devs only)</li>
              <li>✅ Microsoft Copilot (Enterprise)</li>
            </ul>
          </Callout>
        </div>
      </div>
    </PageLayout>
  );
};