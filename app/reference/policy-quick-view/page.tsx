import React from 'react';
import { PageLayout, Card, Callout, Heading, Badge } from '../../../components/ui';
import { ShieldCheck, ShieldAlert, ShieldX, HelpCircle } from 'lucide-react';

export default function Page() {
  return (
    <PageLayout 
      title="Policy Quick View" 
      description="Can I use AI for this? A quick reference for daily decisions."
    >
      
      {/* SECTION 1: TRAFFIC LIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-t-4 border-t-green-500 bg-green-50/30">
          <div className="flex items-center gap-2 mb-4">
             <ShieldCheck className="w-6 h-6 text-green-600" />
             <h2 className="text-xl font-bold text-green-800">GREEN (Go)</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">Approved for general use with standard vigilance.</p>
          <ul className="space-y-2 text-sm text-slate-800">
             <li className="flex gap-2">✅ Summarizing generic documents</li>
             <li className="flex gap-2">✅ Drafting internal emails</li>
             <li className="flex gap-2">✅ Brainstorming marketing ideas</li>
             <li className="flex gap-2">✅ Coding assistance (Copilot)</li>
          </ul>
        </Card>

        <Card className="border-t-4 border-t-yellow-500 bg-yellow-50/30">
          <div className="flex items-center gap-2 mb-4">
             <ShieldAlert className="w-6 h-6 text-yellow-600" />
             <h2 className="text-xl font-bold text-yellow-800">YELLOW (Caution)</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">Requires anonymization or manager approval.</p>
          <ul className="space-y-2 text-sm text-slate-800">
             <li className="flex gap-2">⚠️ Analyzing meeting transcripts (Anonymized ONLY)</li>
             <li className="flex gap-2">⚠️ Drafting client letters (Review carefully)</li>
             <li className="flex gap-2">⚠️ Uploading internal PDFs (Internal tools ONLY)</li>
          </ul>
        </Card>

        <Card className="border-t-4 border-t-red-500 bg-red-50/30">
          <div className="flex items-center gap-2 mb-4">
             <ShieldX className="w-6 h-6 text-red-600" />
             <h2 className="text-xl font-bold text-red-800">RED (Stop)</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">Strictly prohibited. Violation of policy.</p>
          <ul className="space-y-2 text-sm text-slate-800">
             <li className="flex gap-2">❌ Uploading PII to public web</li>
             <li className="flex gap-2">❌ Automated hiring/firing decisions</li>
             <li className="flex gap-2">❌ Generating code for core security systems</li>
             <li className="flex gap-2">❌ Inputting login credentials</li>
          </ul>
        </Card>
      </div>

      {/* SECTION 2: DATA CLASSIFICATION TABLE */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Data Classification Guide</Heading>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Examples</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">AI Usage Rule</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Public</td>
                <td className="px-6 py-4 text-slate-600">Marketing brochures, website copy, press releases.</td>
                <td className="px-6 py-4"><Badge variant="success">Permitted</Badge></td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Internal</td>
                <td className="px-6 py-4 text-slate-600">Org charts, training manuals, meeting agendas.</td>
                <td className="px-6 py-4"><Badge variant="success">Permitted (Internal Tools)</Badge></td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Confidential</td>
                <td className="px-6 py-4 text-slate-600">Strategic plans, unreleased products, partner contracts.</td>
                <td className="px-6 py-4"><Badge variant="warning">Restricted</Badge></td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-red-700">Restricted (PII)</td>
                <td className="px-6 py-4 text-slate-600">SSNs, HR records, Credit Card #s, Legal Case files.</td>
                <td className="px-6 py-4"><Badge variant="danger">Prohibited in Public AI</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: FAQ */}
      <section className="mb-12">
        <Heading level={2} className="mb-6">Frequently Asked Questions</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout variant="info" title="Can I use ChatGPT?">
            Only the Enterprise version provided by IT. The free version on the open web learns from your data. Do not use it for company work.
          </Callout>
          <Callout variant="info" title="What if I delete the name?">
             Anonymization helps, but be careful with "quasi-identifiers" (e.g., "The Mayor of Chicago" is identifiable even without a name). When in doubt, leave it out.
          </Callout>
          <Callout variant="info" title="Can AI reject a candidate?">
             <strong>No.</strong> AI can draft the email or summarize the resume, but a human manager must review the file and make the hiring decision.
          </Callout>
          <Callout variant="info" title="How do I report an issue?">
             If you suspect a data leak or see a biased output, email the <strong>AI Governance Team</strong> immediately.
          </Callout>
        </div>
      </section>

    </PageLayout>
  );
}