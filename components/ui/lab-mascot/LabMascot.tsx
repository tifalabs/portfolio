"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function LabMascot() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-56 z-20">
      {isShowDialog && (
        <div className="nes-balloon from-right w-56 bg-white">
          <p className="text-xs">Tifa Labs is online...</p>
        </div>
      )}

      <Image
        onMouseEnter={() => setIsShowDialog(true)}
        onMouseLeave={() => setIsShowDialog(false)}
        src={"/pixel-orc.webp"}
        width={300}
        height={300}
        alt="Tifa Labs pixel mascot"
        className="cursor-pointer hover:scale-105 transition-transform"
        priority
      />
    </div>
  );
}