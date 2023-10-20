import { useState, useEffect } from "react";

export const HaulerList = () => {
  return (
    <div className="flex flex-col self-center bg-gradient-to-r from-slate-700/30 to-slate-400/30 rounded-3xl scale-auto w-max justify-center items-center mt-12">
      <div className="haulers-view-container flex flex-col items-center justify-center h-2/6 my-4">
        <div className="haulers-view-header"></div>
        <div className="haulers-view-list">{}</div>
      </div>
    </div>
  );
};
