import React from 'react';
import { PageLayout, Heading, Card, Callout, PromptCard, Button } from '../../components/ui';
import { useRouter } from '../../lib/routerContext';
import { Shield, ArrowRight } from 'lucide-react';

export default function Page() {
  const { push } = useRouter();

  return (
    <PageLayout 
      title="Quick Reference Guide" 
      description="Approved tools, safety rules, and prompt templates for your daily work."
      actions={
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => push('/reference/prompting-guide')}>
             Prompting Guide
          </Button>
          <Button variant="outline" onClick={() => push('/reference/policy-quick-view')}>
             Policy Check
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-8">
          
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
                    <li>Summarizing <i>anonymized</i> feedback</li>
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
          <Card className="bg-blue-50 border-blue-200 p-6">
             <div className="flex items-center gap-2 mb-2 font-bold text-blue-900">
                <Shield className="w-5 h-5" />
                Policy Quick View
             </div>
             <p className="text-sm text-blue-800 mb-4">
               Not sure if it's safe? Check the Red/Yellow/Green list before you prompt.
             </p>
             <Button size="sm" className="w-full" onClick={() => push('/reference/policy-quick-view')}>
               View Rules <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </Card>

          <Callout variant="danger" title="Strictly Prohibited">
            <ul className="space-y-2 text-sm mt-2">
              <li>❌ Account Numbers</li>
              <li>❌ Client Names</li>
              <li>❌ Social Security Numbers</li>
              <li>❌ Employee Salaries</li>
              <li>❌ Confidential Strategy</li>
            </ul>
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
}