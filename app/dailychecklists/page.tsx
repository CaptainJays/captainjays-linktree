import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import { ArrowLeft, ListChecks } from 'lucide-react';
import GlowingCardWrapper from '@/components/GlowingCardWrapper'; // Import the new wrapper

export default function DailyChecklists() {
  const checklists = [
    {
      title: "Daily Checklist",
      url: "https://app.jotform.com/250135187550150"
    },
    {
      title: "Boil Out/ Reset",
      url: "https://app.jotform.com/250265864135155"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)] -z-10" />
      <div className="max-w-2xl mx-auto space-y-8 px-4 py-12 relative">
        <ThemeToggle />
        
        <div>
          <Link href="/" className="inline-block mb-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to links
            </Button>
          </Link>

          <div className="mb-8 text-center">
            <Image
              src="/cj-logo.png"
              alt="Captain Jay's Logo"
              width={200}
              height={200}
              className="mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold mb-8">All Store Checklists</h1>
          </div>

          {/* Use grid layout with the wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklists.map((checklist, index) => (
              <GlowingCardWrapper 
                key={index}
                title={checklist.title}
                url={checklist.url}
                icon={<ListChecks className="h-5 w-5" />} // Pass ListChecks icon
                descriptionText="Click to open checklist form →"
                glowSpread={60}
                // Pass any specific GlowingEffect props here if needed
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button>Back to all links</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
