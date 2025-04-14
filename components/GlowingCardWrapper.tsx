'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect'; 
import { cn } from "@/lib/utils";

interface GlowingCardWrapperProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  descriptionText: string;
  className?: string; // For grid item control etc.
  // Add props for GlowingEffect customization if needed, using defaults from example
  glowSpread?: number;
  glowProximity?: number;
  glowDisabled?: boolean;
  glowInactiveZone?: number;
}

export default function GlowingCardWrapper({
  title,
  url,
  icon,
  descriptionText,
  className = '',
  glowSpread = 40, 
  glowProximity = 64,
  glowDisabled = false,
  glowInactiveZone = 0.01
}: GlowingCardWrapperProps) {
  return (
    // Outer container for layout (e.g., grid item). min-h ensures some height.
    <div className={cn("min-h-[10rem]", className)}> 
      {/* Relative parent with rounding and padding to contain the effect and card */}
      {/* Adjust rounded-xl and p-1/p-2 as needed */}
      <div className="relative h-full rounded-xl border border-border p-1"> 
        <GlowingEffect
          spread={glowSpread}
          glow={true} // Enable glow effect
          proximity={glowProximity}
          disabled={glowDisabled}
          inactiveZone={glowInactiveZone}
          className="rounded-xl" // Inherit rounding from parent
        />
        {/* The actual content card, positioned relatively to sit on top */}
        {/* border-0 removes default card border, bg-background ensures content isn't transparent */}
        <Card className="relative h-full overflow-hidden rounded-lg border-0 bg-background transition-colors duration-300 hover:bg-muted/50"> 
          <CardContent className="p-4 h-full"> {/* Adjust padding */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full flex flex-col justify-between"
            >
              {/* Top section: Icon and Title */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {/* Icon wrapper for consistent sizing */}
                  <div className="text-primary w-5 h-5 flex items-center justify-center">{icon}</div> 
                  <h2 className="text-lg font-semibold"> 
                    {title}
                  </h2>
                </div>
              </div>
              {/* Bottom section: Description text, pushed down */}
              <div className="text-sm text-muted-foreground mt-auto pt-2">
                {descriptionText}
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
