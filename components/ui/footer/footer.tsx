"use client";

import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    title: "security-learning-lab",
    href: "https://github.com/tifalabs/security-learning-lab",
    theme: "dark",
    desc: "Cybersecurity learning lab for notes, safe practice, and security concepts.",
  },
  {
    title: "cybpick",
    href: "https://github.com/tifalabs/cybpick",
    theme: "light",
    desc: "Cyber-themed tool/project experiment from the Tifa Labs archive.",
  },
  {
    title: "android-ai-server",
    href: "https://github.com/tifalabs/android-ai-server",
    theme: "dark",
    desc: "Android + AI server experiment for local/networked AI workflows.",
  },
  {
    title: "portfolio",
    href: "https://github.com/tifalabs/portfolio",
    theme: "light",
    desc: "This retro 8-bit portfolio site built with Next.js and NES.css.",
  },
  {
    title: "node-top",
    href: "https://github.com/tifalabs/node-top",
    theme: "dark",
    desc: "Node.js experiment/project from the Tifa Labs repo collection.",
  },
  {
    title: "aegis-core",
    href: "https://github.com/tifalabs/aegis-core",
    theme: "light",
    desc: "Core experimental project with a security-inspired name and structure.",
  },
];

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-5 left-5 z-20">
      <button type="button" onClick={() => setIsShowModal(!isShowModal)}>
        <i className="nes-icon is-large star"></i>
      </button>

      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10 p-4">
          <div className="nes-dialog w-full max-w-3xl bg-white max-h-[85vh] overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={() => setIsShowModal(false)}>
                <i className="nes-icon close is-small"></i>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>

              <p>Tifa Labs Archive:</p>

              <p className="text-xs text-center">
                Some repos may be private while they are still cooking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {projects.map((project) => (
                  <Link
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={`nes-container with-title h-full ${
                        project.theme === "dark" ? "is-dark" : ""
                      }`}
                    >
                      <p className="title">{project.title}</p>
                      <p className="text-xs">{project.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}