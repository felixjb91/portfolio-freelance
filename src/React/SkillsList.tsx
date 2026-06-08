import { skills } from "@/lib/data-text";
import { useState } from "react";

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const entries = Object.entries(skills);

  return (
    <section aria-labelledby="skills-heading" className="pt-12 md:pt-16 pb-8">
      <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase text-[var(--muted)]">
        <span className="text-[var(--accent)]">01</span> — Ce que je fais
      </p>
      <h2
        id="skills-heading"
        className="mt-4 font-serif font-medium text-3xl md:text-4xl text-[var(--text)]"
      >
        Ce que je propose
      </h2>

      <div className="mt-12 grid md:grid-cols-2 border-t border-[var(--border)]">
        {entries.map(([category, items], index) => {
          const isOpen = openItem === category;
          const num = String(index + 1).padStart(2, "0");
          return (
            <div
              key={category}
              className="border-b border-[var(--border)] py-7 md:py-9 md:odd:pr-10 md:even:pl-10 md:even:border-l md:even:border-[var(--border)]"
            >
              <button
                type="button"
                onClick={() => toggleItem(category)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-4 text-left lg:cursor-default"
              >
                <span
                  className="font-mono text-sm text-[var(--accent)] pt-1.5"
                  aria-hidden="true"
                >
                  {num}
                </span>
                <span className="flex-1 font-serif text-xl md:text-2xl text-[var(--text)]">
                  {category}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-5 h-5 mt-1.5 flex-shrink-0 text-[var(--muted)] transition-transform lg:hidden ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 lg:mt-5 ${
                  isOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2.5 pl-10 font-sans text-sm md:text-base text-[var(--muted)]">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span
                        className="text-[var(--accent)] select-none"
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsList;
