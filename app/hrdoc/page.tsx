import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle'; 
import { ArrowLeft } from 'lucide-react';
import GlowingCardWrapper from '@/components/GlowingCardWrapper'; // Import the wrapper
import { SiRoadmapdotsh } from "react-icons/si"; // Import roadmap icon


export default function RoadmapsPage() { 
  const roadmaps = [
    {
      title: "Payroll Status Form",
      url: "https://mega.nz/file/jNwi3DCS#7LjZAEe-n8CdxDO1mF-lGARL-wQ5NAjYmdIAuehOjBQ"
    },
    {
      title: "Tax Forms",
      url: "https://mega.nz/folder/XR53UAaZ#yK55682-f4gW_OzD4X3kiw"
    },
    {
        title: "2025 Period Calendar",
        url: "https://mega.nz/file/2MhlURoR#ZCXVoreN8Vg8uxgqx5AXXvNg4GUD-INMQqBWUaqvZ0U"
      },
    {
        title: "Parent Guardian Authorization Form",
        url: "https://mega.nz/file/DV4lAZKB#73_6ktk9KaWsa_iQeSpJo1a5NzHASm9Nfz_e8zZP-_w"
    },
    {
        title: "Payroll Redirection Form 6",
        url: "https://mega.nz/file/iBZjXIJT#sbSSWdK2RotSciZkwJf_xM5XiHUXQJqCYRX_ItJQlDs"
    },
    {
        title: "Direct Deposit Reversal Affidavit Form",
        url: "https://mega.nz/file/nUh30ZgA#vOiSCqyvYxnvOaj-nHygSU7LKgxZkFKwedhElrX0ZeM"
    },
    {
        title: "Lost Payroll Check Affidavit Form",
        url: "https://mega.nz/file/jYxUVABA#JxPuI0H9Rm1YWGrA7DMZ2tQCKIf0mwXnfp-KWvjA4eE"
    },
    {
        title: "Direct Deposit Form",
        url: "https://mega.nz/file/aYhGBAZA#6bixfYMOevMvd54gvcrxkwQ67UNBn_rcVJBprPh2IQA"
    },
    {
        title: "8850 & 9061 Forms",
        url: "https://mega.nz/folder/GcRDjDIa#5_6CTe_KUtwwE5yb9S295w"
    },
    {
        title: "I9 Forms",
        url: "https://mega.nz/folder/KB503BqS#DsXcpn_lq-T4Uo9R55VgGg"
    }
    // ... (rest of the roadmaps commented out)
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
            <h1 className="text-3xl font-bold mb-8">Training Roadmaps</h1> 
          </div>

          {/* Use grid layout with the wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roadmaps.map((roadmap, index) => (
              <GlowingCardWrapper 
                key={index}
                title={roadmap.title}
                url={roadmap.url}
                icon={<SiRoadmapdotsh className="h-5 w-5" />} // Pass SiRoadmapdotsh icon
                descriptionText="Click to open roadmap →"
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
