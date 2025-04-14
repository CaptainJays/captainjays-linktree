import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // Removed unused CardHeader, CardTitle
import ThemeToggle from '@/components/theme-toggle'; // Added import
import { ArrowLeft } from 'lucide-react';

// Renamed function to follow PascalCase convention for components
export default function RoadmapsPage() { 
  const checklists = [
    {
      title: "Team Member - Day 1",
      url: "https://roadmap.sh/r/team-member-day-1-copy-gghc1"
    },
    {
      title: "Team Member - Day 2",
      url: "https://roadmap.sh/r/team-member-day-1-copy"
    },
    {
        title: "Team Member - Day 3",
        url: "https://roadmap.sh/r/team-member-day-2-copy"
      },
    {
        title: "Team Member - Day 4",
        url: "https://roadmap.sh/r/team-member-day-3-copy"
    }
    // ... (rest of the checklists commented out)
  ];

  return (
    // Updated main element classes to match homepage
    <main className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background relative">
      {/* Added overlay div from homepage */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      {/* Updated content container classes to match homepage */}
      <div className="max-w-2xl mx-auto space-y-8 px-4 py-12 relative">
        <ThemeToggle /> {/* Added ThemeToggle */}

        <div> {/* Wrapped content for proper spacing */}
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
            {/* Changed h1 text to be specific to roadmaps */}
            <h1 className="text-3xl font-bold mb-8">Training Roadmaps</h1> 
          </div>

          <div className="grid gap-4">
            {checklists.map((checklist, index) => (
              <Card key={index} className="border-2 border-secondary hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <a 
                    href={checklist.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-xl font-semibold mb-2">
                      {index + 1}. {checklist.title}
                    </h2>
                    {/* Updated link text */}
                    <div className="text-sm text-muted-foreground">
                      Click to open roadmap → 
                    </div>
                  </a>
                </CardContent>
              </Card>
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
