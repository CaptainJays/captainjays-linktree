import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

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
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90 py-12 px-4">
      <div className="max-w-2xl mx-auto">
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
                  <div className="text-sm text-muted-foreground">
                    Click to open checklist form →
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
    </main>
  );
}