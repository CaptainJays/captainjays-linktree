import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { LinkData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function DailyChecklists() {
  // Read the profile data from the JSON file
  // const dataFilePath = path.join(process.cwd(), 'data', 'links.json');
  // // const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  // const data: LinkData = JSON.parse(fileContents);
  // const { profile } = data;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-block mb-6">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to links
          </Button>
        </Link>

        <Card className="border-2 border-secondary">
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
            {/* <CardDescription>Get to know {profile.name}</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Who I Am</h3>
              <p className="text-muted-foreground">
                {/* I'm {profile.name}, a passionate {profile.title} with a love for creating elegant solutions to complex problems.  */}
                My journey in technology began over 5 years ago, and I've been on an exciting path of continuous learning and growth ever since.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building responsive web applications using modern technologies like React, Next.js, and TypeScript. 
                My approach combines technical expertise with a keen eye for design, ensuring that the products I create are not only functional but also visually appealing and user-friendly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With a strong background in software development and team leadership, I have built my career on driving innovation, optimizing processes, and delivering high-impact solutions. My experience spans frontend development, system architecture, and operational efficiency, allowing me to bridge the gap between technology and business goals.
              </p>
              <p className="text-muted-foreground mb-4">
                I have successfully led teams in the planning and execution of key projects, ensuring seamless collaboration and efficiency. Through process optimization and the implementation of innovative solutions, I have reduced execution times by 20%, streamlined internal workflows, and enhanced user satisfaction. Additionally, I have introduced new information management tools that improved cross-department coordination, cutting report generation time by 50%.
              </p>
              <p className="text-muted-foreground mb-2">
                On the technical side, I specialize in developing scalable, modular frontend architectures that enhance maintainability and performance. I have designed intuitive, accessible user interfaces across multiple platforms, integrated third-party APIs to expand application capabilities, and implemented advanced SEO strategies to improve search engine visibility. My expertise in web security includes conducting regular audits, enforcing HTTP security policies, and ensuring compliance with data privacy standards.
              </p>
              <p className="text-muted-foreground mb-2">
                Collaboration is at the core of my approach—I work closely with UX/UI designers to bring interactive, high-performance interfaces to life. I conduct thorough testing to guarantee cross-device compatibility and employ performance optimization techniques, such as lazy loading and Lighthouse analysis, to deliver seamless user experiences.
              </p>
              <p className="text-muted-foreground">
                Driven by a passion for efficiency and innovation, I continuously seek ways to refine systems, enhance functionality, and elevate the quality of digital experiences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Beyond Coding</h3>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new hiking trails, creating music on the drums and guitar, riding my bike, or training at the gym. I enjoy pushing my limits—both physically and creatively—constantly seeking new challenges that fuel my passion for growth and self-improvement.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button>Back to all links</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}