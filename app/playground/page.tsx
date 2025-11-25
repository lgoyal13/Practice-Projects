import React from 'react';
import { Playground } from '../../components/Playground'; // Reusing existing component
import { PageLayout } from '../../components/ui';

export default function Page() {
  return (
    <PageLayout title="AI Playground" description="Safe sandboxed environment for experimentation.">
       <Playground />
    </PageLayout>
  );
}
