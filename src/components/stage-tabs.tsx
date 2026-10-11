import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type StageTab = {
  value: string;
  label: string;
};

/*
 * Segmented tab control in the style of the Uiverse "tab-container" —
 * grey track, white sliding pill — rebuilt on shadcn/Radix Tabs
 * (keyboard + screen-reader support) with a motion `layoutId` pill
 * instead of radio-input CSS hacks. Widths are fluid, not fixed 130px.
 */
export function StageTabs({
  tabs,
  defaultValue,
  children,
}: {
  tabs: Array<StageTab>;
  defaultValue?: string;
  children: ReactNode;
}) {
  const [value, setValue] = useState(defaultValue ?? tabs[0]?.value ?? "");

  return (
    <Tabs value={value} onValueChange={setValue} className="w-full">
      <TabsList className="h-auto w-full rounded-[9px] border border-ink/10 bg-[#dadadb] p-[2px]">
        {tabs.map((tab) => {
          const active = value === tab.value;
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative h-9 flex-1 rounded-[7px] bg-transparent px-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft/60 shadow-none transition-colors data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none sm:text-xs"
            >
              {active && (
                <motion.span
                  layoutId="stage-tab-pill"
                  aria-hidden="true"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                  className="absolute inset-0 rounded-[7px] border border-black/5 bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.12),0px_3px_1px_rgba(0,0,0,0.04)]"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {children}
    </Tabs>
  );
}

export { TabsContent };
