import React from "react";
import { useTheme } from "../context/ThemeContext";

const Now = () => {
  const { theme } = useTheme();
  return (
    <section className="lg:mb-32">
      <div id="now" className="">
        <div className="lg:hidden grid items-center col-span-2 grid-cols-[auto_1fr] gap-4 mb-12">
          <h2
            className={`text-[20px] leading-[36px] font-semibold text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 `}
          >
            Now
          </h2>
          <span className="inline-block h-[1.5px] bg-current opacity-50 transition-all duration-300 w-full" />
        </div>
        <h2
          className={`hidden lg:flex mb-12 text-[20px] leading-[36px] font-semibold text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 `}
        >
          Now
        </h2>
        <p className="text-xs leading-8 mb-4 italic opacity-70 lg:text-sm">
          Last updated: <time dateTime="2025-06-02">June 2, 2025</time>
        </p>
        <div className="mb-8">
          <p className="text-sm lg:text-base leading-6">
            Becoming the best version of myself. This "Now" page reflects my
            current priorities and goals, and I will update it regularly as my
            focus and activities change over time.
          </p>
        </div>
        <div className="mb-6">
          <h3
            className={`font-medium text-[18px] leading-[21px] mb-3 lg:text-[24px]`}
          >
            What I am doing:
          </h3>
          <p className="text-xs leading-6 opacity-60 lg:text-sm">
            As of June 2025, here are a few things I'm focused on:
          </p>
        </div>

        {/* Current Focus */}
        <ul className="space-y-4 mb-6 list-disc pl-5">
          <li className="leading-6 text-sm lg:text-base">
            <strong style={{ color: theme.accent }}>
              Morning walks before I start working:
            </strong>{" "}
            Prioritizing physical health and mental clarity.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong style={{ color: theme.accent }}>
              Being consistent with working on my projects:
            </strong>{" "}
            I have been able to add a number of projects to my portfolio.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong style={{ color: theme.accent }}>
              Reading and Writing More:
            </strong>{" "}
            I’ve expanded my idea of reading beyond just fiction or self-help books. Lately, I’ve been diving into blogs and personal essays on topics I genuinely enjoy and it’s inspiring me to write more.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong style={{ color: theme.accent }}>
              Building a Digital Garden:
            </strong>{" "}
            I’m currently building my own personal wiki and maintaining a digital Zettelkasten in a digital garden to capture and connect my thoughts.
          </li>
        </ul>

        {/* Previously */}
        <div className="mb-4">
          <p className="text-xs leading-8 mb-4 italic opacity-70 lg:text-sm">
          As of <time dateTime="2025-02-02">February 2, 2025</time>
        </p>
          <ul className="space-y-4 list-disc pl-5 text-muted">
            <li className="leading-6 text-sm lg:text-base line-through">
              <strong style={{ color: theme.accent }}>
                75 Soft Challenge:
              </strong>{" "}
              Embarked on the 75 Soft Challenge to build new habits and stay disciplined for 75 days.
            </li>
          </ul>
          </div>

          <div className="mb-4">
          <p className="text-xs leading-8 mb-4 italic opacity-70 lg:text-sm">
          As of <time dateTime="2024-11-24">November 24, 2024</time>
        </p>
          <ul className="space-y-4 list-disc pl-5 text-muted">
            <li className="leading-6 text-sm lg:text-base line-through">
              <strong style={{ color: theme.accent }}>
                Working on Building Bloques and upcoming ventures:
              </strong>{" "}
              Dedicating my leisure time to growing my projects.
            </li>

            <li className="leading-6 text-sm lg:text-base line-through">
              <strong style={{ color: theme.accent }}>
                Sleeping More:
              </strong>{" "}
              I adjusted my wake-up time from 5 AM to 6 AM to improve sleep and reduce fatigue.
            </li>
          </ul>
        </div>


        <div className="mb-10 leading-6 text-sm lg:text-base space-y-2">
          <p>
            I plan to update this page regularly, reflecting on my progress and
            adjusting my focus as needed. Stay tuned for the next update!{" "}
          </p>
          <p>
            This is a now section, if you do not have one, {" "}
            <a
              href="https://nownownow.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.accent
              }}
            >
              consider adding one to your site
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Now;
