import { useEffect, useState } from "react";

export const useTypewriter = (
  text: string,
  speed: number = 50,
  start: boolean = true
) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return; // wait until triggered

    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayed;
};
