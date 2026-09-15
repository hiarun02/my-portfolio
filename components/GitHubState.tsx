"use client";

import GitHubCalendar from "react-github-calendar";
import {useEffect, useState} from "react";

const calendarTheme = {
  light: ["#e6e4de", "#c7e8d3", "#8fd3aa", "#45b97b", "#157347"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GitHubState = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const updateColorScheme = () => {
      setColorScheme(
        document.documentElement.classList.contains("light") ? "light" : "dark",
      );
    };

    updateColorScheme();
    const observer = new MutationObserver(updateColorScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-5">
      {/* GitHub Calendar */}
      <div className="my-8">
        <h2 className="text-lg font-bold mb-5">GitHub Contributions</h2>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="inline-block min-w-full">
            <GitHubCalendar
              username="hiarun02"
              blockSize={10}
              colorScheme={colorScheme}
              theme={calendarTheme}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubState;
