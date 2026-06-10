"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function KeyCard() {
  return (
    <a
      href="https://lumin.rest/"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-left"
    >
      <Card className="border-zinc-800 transition-colors hover:border-[#f8bfd4]/50 h-full">
        <CardContent className="flex flex-col p-5">
          <span className="text-base font-semibold">Key System</span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold">Get a key</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Get access for free
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
