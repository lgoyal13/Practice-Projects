import React from 'react';
import { PageLayout, Card, Badge, Callout } from '../../components/ui';
import { Workflow, Code, Database, Zap } from 'lucide-react';

export default function Page() {
  return (
    <PageLayout 
      title="Advanced Tools & Workflows" 
      description="For power users ready to automate complex tasks."
    >
      <Callout variant="warning" title="Beta Features">
        These tools are currently in pilot mode. Access requires approval from your manager and the AI Governance team.
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 text-purple-600 rounded">
               <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Inbox Auto-Triage Agent</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Automatically reads customer support emails, extracts key data points (Issue Type, Urgency, Client ID), and recommends a response template.
          </p>
          <Badge variant="blue">Coming Soon</Badge>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 text-slate-800 rounded">
               <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Contract Semantic Search</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Search across 50,000+ PDF contracts and legal documents using natural language questions instead of keywords.
          </p>
          <Badge variant="success">Available (Pilot)</Badge>
        </Card>
      </div>
    </PageLayout>
  );
}