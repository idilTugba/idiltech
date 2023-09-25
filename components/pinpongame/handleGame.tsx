import styles from "./styles.module.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import HandleKeyDown from "./handleKeyDown";
import HandleBall from "./handleBall";
import { GameContext, GameArea, GameContextType } from "./index";

export interface SticksInfo {
  stickHeight: number;
  leftStickTop: number;
  rightStickTop: number;
}

export default function HandleSticks() {
  const {
    gameAreaSize,
    pauseGame,
    setPauseGame,
    restartGame,
    firstPlay,
    setFirstPlay,
  } = useContext<GameContextType>(GameContext);

  const leftStickRef = useRef<HTMLDivElement>(null);

  const [sticksRef, setSticksRef] = useState<SticksInfo>({
    stickHeight: 0,
    leftStickTop: 0,
    rightStickTop: 0,
  });

  useEffect(() => {
    if (leftStickRef.current && gameAreaSize) {
      const height: number = leftStickRef.current.offsetHeight;
      const firstPosition: number =
        (gameAreaSize.y - sticksRef.stickHeight) / 2;
      setSticksRef({
        stickHeight: height,
        leftStickTop: firstPosition,
        rightStickTop: firstPosition,
      });
    }
  }, [leftStickRef]);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.keyCode) {
      case 87:
        if (sticksRef.leftStickTop <= 0) break;
        setSticksRef((sticksRef) => ({
          ...sticksRef,
          leftStickTop: sticksRef.leftStickTop - 30,
        }));
        break;
      case 83:
        if (sticksRef.leftStickTop + sticksRef.stickHeight >= gameAreaSize.y)
          break;
        setSticksRef((sticksRef) => ({
          ...sticksRef,
          leftStickTop: sticksRef.leftStickTop + 30,
        }));
        break;
      case 38:
        if (sticksRef.rightStickTop <= 0) break;
        setSticksRef((sticksRef) => ({
          ...sticksRef,
          rightStickTop: sticksRef.rightStickTop - 30,
        }));
        break;
      case 40:
        if (sticksRef.rightStickTop + sticksRef.stickHeight >= gameAreaSize.y)
          break;
        setSticksRef((sticksRef) => ({
          ...sticksRef,
          rightStickTop: sticksRef.rightStickTop + 30,
        }));
        break;
    }
  };

  return (
    <>
      <div
        ref={leftStickRef}
        style={{ top: sticksRef.leftStickTop + "px" }}
        className="w-1 h-[50px] bg-black absolute z-[99] left-3"
      ></div>
      <div
        style={{ top: sticksRef.rightStickTop + "px" }}
        className="w-1 h-[50px] bg-black absolute z-[99] right-3"
      ></div>
      <HandleKeyDown onKeyDown={handleKeyDown} />
      <HandleBall sticksRef={sticksRef} />
    </>
  );
}
