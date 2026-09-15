import {hackathons} from "./Data/HackathonData";

export default function HackathonSection() {
  return (
    <section className="mb-5 mt-5">
      <h2 className="text-lg font-bold text-white">Hackathons</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
        I like building under pressure and tight constraints. Some of the
        hackathons I&apos;ve shipped for.
      </p>

      <ul className="mt-6 space-y-4">
        {hackathons.map((hackathon, i) => {
          const isWinner = hackathon.title.includes("Code with Kiro Hackathon");

          return (
            <li key={i}>
              <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/80">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-white">
                          {hackathon.title}
                        </h3>

                        {isWinner && (
                          <span className="hackathon-winner-badge mt-2 inline-flex w-fit items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                            Winner
                          </span>
                        )}
                      </div>

                      <div className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-right">
                        {hackathon.date}
                      </div>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {hackathon.description}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
