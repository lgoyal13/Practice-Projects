import React from 'react';
import { Button, Card, Badge } from '../components/ui';
import { useRouter } from '../lib/routerContext';
import { 
  ArrowRight, 
  Zap, 
  PenTool, 
  FileText, 
  Search, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

export default function Page() {
  const { push } = useRouter();

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-12">
      
      {/* Hero Section */}
      <section className="bg-slate-900 rounded-2xl p-8 md:p-16 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <Badge variant="blue" className="mb-4 bg-blue-500/20 text-blue-100 border-blue-500/50">Internal Beta v1.0</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Work smarter, <br/>
            <span className="text-blue-400">not harder.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
            Welcome to the Enterprise AI Academy. Learn how to use our secure AI tools to draft client emails, summarize reports, and research market trends in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
               size="lg" 
               onClick={() => push('/quick-start')}
               className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 h-14 text-lg shadow-lg shadow-blue-900/50"
            >
              <Zap className="w-5 h-5 mr-2" /> 
              Start 10-Min Quick Win
            </Button>
            <Button 
               size="lg" 
               variant="outline" 
               onClick={() => push('/modules')}
               className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white h-14 px-8"
            >
              Browse All Modules
            </Button>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>

      {/* Persona / "Jobs to be Done" Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">How can AI help you today?</h2>
            <p className="text-slate-600 mt-1">Select a task to see how AI speeds it up.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            className="p-6 hover:shadow-lg transition-all border-t-4 border-t-blue-500 cursor-pointer group"
            onClick={() => push('/modules/prompting')}
          >
             <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">"I write a lot of emails."</h3>
             <p className="text-slate-600 text-sm mb-6 leading-relaxed">
               Staring at a blank page? Learn how to generate drafts for client updates, project announcements, and difficult feedback instantly.
             </p>
             <div className="flex items-center text-blue-600 font-medium text-sm">
               Go to Drafting <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
             </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all border-t-4 border-t-purple-500 cursor-pointer group"
            onClick={() => push('/modules/fundamentals')}
          >
             <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">"I read long documents."</h3>
             <p className="text-slate-600 text-sm mb-6 leading-relaxed">
               Drowning in vendor contracts or 50-page reports? Learn to extract key dates, terms, and financial figures in seconds.
             </p>
             <div className="flex items-center text-purple-600 font-medium text-sm">
               Go to Summarization <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
             </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all border-t-4 border-t-emerald-500 cursor-pointer group"
            onClick={() => push('/reference')}
          >
             <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">"I need to look things up."</h3>
             <p className="text-slate-600 text-sm mb-6 leading-relaxed">
               Need to clarify a policy or check a regulation? Use our approved tools to find answers faster than traditional search.
             </p>
             <div className="flex items-center text-emerald-600 font-medium text-sm">
               Go to Tools <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
             </div>
          </Card>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What's in the Academy?</h2>
            <p className="text-slate-600 mb-6">
              Our curriculum is designed for busy professionals. 
              No coding. No hype. Just practical skills you can use today.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong className="text-slate-900">Fundamentals:</strong> What is LLM, Hallucination, and how to spot errors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong className="text-slate-900">Prompt Engineering:</strong> The P.C.T.F. framework for getting perfect answers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong className="text-slate-900">Responsible Use:</strong> Data privacy, PII protection, and ethical guidelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700"><strong className="text-slate-900">Advanced Tools:</strong> Agents, workflows, and piloting new features.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
             <Card className="relative p-6 border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4 text-slate-900 font-bold border-b border-slate-100 pb-3">
                   <Shield className="w-5 h-5 text-blue-600" />
                   Company AI Policy Snapshot
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 text-sm">
                    <span className="text-green-600 font-bold">✅</span>
                    <span className="text-slate-600">Always review AI output for accuracy.</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-green-600 font-bold">✅</span>
                    <span className="text-slate-600">Use only approved internal tools.</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-red-500 font-bold">❌</span>
                    <span className="text-slate-600">Never input PII (Names, SSNs, Accounts).</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-6 text-sm" onClick={() => push('/reference')}>
                   Read Full Guidelines
                </Button>
             </Card>
          </div>
        </div>
      </section>

    </div>
  );
}