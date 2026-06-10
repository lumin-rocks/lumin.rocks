"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import WordRotate from "@/components/ui/word-rotate";
import Navbar from "@/components/layout/navbar";
import GameCard from "@/components/home/game-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/home/copy-button";
import Image from "next/image";
import Executor from "@/components/home/executor";
import PurchaseBadge from "@/components/home/purchase-badge";
import Footer from "@/components/layout/footer";
import { supportedGames } from "@/data/games";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const supportedGameHeadings = supportedGames.map(
  ({ title }: { title: string }) => `${SITE_NAME} supports ${title}`,
);

export default function Home() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const LOADSTRING = `loadstring(game:HttpGet("${SITE_URL}/"))()`;

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 px-4">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50",
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#f8bfd4]/12 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <BlurFade delay={0.25}>
              <div className="mb-8">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                  )}
                >
                  <a href="/purchase">
                    <PurchaseBadge />
                  </a>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.35}>
              <h1 className="text-7xl md:text-8xl font-bold text-center mb-4 tracking-tight">
                <span className="text-[#f8bfd4]">lumin</span>
                <span>.rest</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.45}>
              <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-xl">
                Premium Roblox script hub
              </p>
            </BlurFade>

            <BlurFade delay={0.55}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                <div className="w-full sm:w-auto">
                  <Input
                    type="text"
                    className="overflow-hidden text-ellipsis w-full sm:w-90 border-[#f8bfd4]/20 focus-visible:ring-[#f8bfd4]/50 font-mono text-sm"
                    readOnly
                    value={LOADSTRING}
                  />
                </div>
                <CopyButton text={LOADSTRING} />

                <Button size="icon" variant="outline" asChild>
                  <a
                    aria-label="Discord Server"
                    href="https://discord.gg/getlumin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/social/discord-symbol-white.svg"
                      alt="Discord"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.7} className="w-full mt-16">
              <div className="flex flex-col items-center justify-center">
                <BlurFade className="mb-4" delay={0.3} inView>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Supported Executors
                  </span>
                </BlurFade>

                <div className="flex flex-row items-center justify-center gap-8 md:gap-10 max-md:flex-col max-md:gap-6">
                  <BlurFade delay={0.75} inView>
                    <Executor
                      name="Potassium"
                      image="/executor-icons/potassium.png"
                      url="https://docs.potassium.pro/"
                    />
                  </BlurFade>
                  <BlurFade delay={0.85} inView>
                    <Executor
                      name="Seliware"
                      image="/executor-icons/seliware.png"
                      url="https://seliware.com/"
                    />
                  </BlurFade>
                  <BlurFade delay={0.95} inView>
                    <Executor
                      name="Real"
                      image="/executor-icons/real.png"
                      url="https://projectreal.net/real"
                      iconSize={32}
                    />
                  </BlurFade>
                </div>

                <BlurFade delay={1.05} inView>
                  <p className="text-muted-foreground text-sm mt-5">
                    And many more...
                  </p>
                </BlurFade>
              </div>
            </BlurFade>
          </div>
        </section>

        <section className="relative py-24 md:py-32 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-[#f8bfd4]/8 via-transparent to-transparent pointer-events-none" />

          <div
            id="games"
            className="flex flex-col items-center text-center overflow-hidden relative max-w-6xl mx-auto"
          >
            <BlurFade className="mb-4" delay={0.3} inView>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Supported Games
              </span>
            </BlurFade>

            <BlurFade className="mb-3" delay={0.4} inView>
              <WordRotate
                className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-20"
                words={supportedGameHeadings}
                duration={4000}
                framerProps={{
                  initial: { opacity: 0, y: -30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 30 },
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />
            </BlurFade>

            <BlurFade delay={0.55} inView>
              <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-md">
                High quality features for the games you actually play.
              </p>
            </BlurFade>

            <BlurFade
              className="flex flex-wrap justify-center gap-6 w-full"
              delay={0.55}
              inView
            >
              {supportedGames.map((game) => (
                <GameCard
                  key={game.mappingName}
                  mappingName={game.mappingName}
                  title={game.title}
                  image={game.image}
                  placeId={game.placeId}
                  url={game.url}
                  rscriptsUrl={game.rscriptsUrl}
                  scriptbloxUrl={game.scriptbloxUrl}
                  gamesStatusData={{}}
                />
              ))}
            </BlurFade>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
