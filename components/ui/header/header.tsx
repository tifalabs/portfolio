"use client";

import React, { useState } from "react";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-end p-5">
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <i className="nes-icon trophy"></i>
      </button>

      {isShowModal && (
        <div className="nes-dialog absolute top-20 right-5 bg-white z-10 w-72">
          <div className="flex justify-end">
            <button onClick={() => setIsShowModal(false)}>
              <i className="nes-icon close is-small"></i>
            </button>
          </div>

          <div className="p-3 flex flex-col gap-4">
            <p className="title text-sm text-center">Tifa Links</p>

            <div className="flex gap-2 justify-center items-center">
              <a
                href="https://github.com/tifalabs"
                target="_blank"
                rel="noreferrer"
                className="nes-btn"
                aria-label="GitHub"
              >
                <i className="nes-icon github is-small"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCkkkLHgRZZ2j05YVs65LIIw"
                target="_blank"
                rel="noreferrer"
                className="nes-btn"
                aria-label="YouTube"
              >
                <i className="nes-icon youtube is-small"></i>
              </a>

              <a
                href="mailto:tifa.codes@gmail.com"
                className="nes-btn"
                aria-label="Email"
              >
                <i className="nes-icon gmail is-small"></i>
              </a>
            </div>

            <div className="nes-container is-dark text-xs">
              <p>Tifa Labs // projects, experiments, contact</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}