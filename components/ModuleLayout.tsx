import React from 'react';
import { PageLayout, Badge, Card, Button } from './ui';
import { Clock, Users, ArrowLeft, BookOpen } from 'lucide-react';
import { useRouter } from '../lib/routerContext';

interface ModuleSection {
  id: string;
  title: string;
}

interface ModuleLayoutProps {
  title: string;
  description: string;
  duration: string;
  audience: string;
  sections: ModuleSection[];
  children: React.ReactNode;
  nextModulePath?: string;
}

export const ModuleLayout: React.FC<ModuleLayoutProps> = ({
  title,
  description,
  duration,
  audience,
  sections,
  children,
  nextModulePath
}) => {
  const { push } = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-20">
      {/* Header / Meta */}
      <div className="mb-8 border-b border-slate-200 pb-8">
        <Button variant="ghost" size="sm" onClick={() => push('/modules')} className="mb-4 text-slate-500 pl-0 hover:bg-transparent hover:text-blue-600">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Curriculum
        </Button>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-xl text-slate-600 max-w-3xl mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-4">
          <Badge variant="neutral">
            <Clock className="w-3 h-3 mr-1.5 inline" />
            {duration}
          </Badge>
          <Badge variant="blue">
            <Users className="w-3 h-3 mr-1.5 inline" />
            {audience}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Table of Contents */}
        <div className="hidden lg:block col-span-1">
          <div className="sticky top-8 space-y-4">
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider">In this module</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </nav>
            {nextModulePath && (
              <div className="pt-6 border-t border-slate-100">
                <Button className="w-full justify-between" onClick={() => push(nextModulePath)}>
                  Next Module <ArrowLeft className="w-4 h-4 rotate-180" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 lg:col-span-3">
          <article className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:text-slate-900 prose-a:text-blue-600">
            {children}
          </article>
          
          {/* Mobile Navigation Footer */}
          {nextModulePath && (
             <div className="mt-12 pt-8 border-t border-slate-200 lg:hidden">
                <Button size="lg" className="w-full" onClick={() => push(nextModulePath)}>
                  Next Module
                </Button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};