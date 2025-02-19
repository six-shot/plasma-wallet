import React from "react";
import styles from "./MovingLight.module.css";

export default function MovingLight() {
  return (
    <div className="flex justify-center iteqms-center">
      <div className="relative w-[1240px] h-[817px] rounded-[40px] ">
        <div className="button-frames absolute -inset-4 overflow-hidden button-frames-primary rounded-[40px]"></div>
        <div className="button-frames absolute -inset-4 overflow-hidden button-frames-primary rounded-[40px]"></div>
      </div>
    </div>
  );
}
