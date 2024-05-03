import { useEffect, useState } from "react";

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progress = Number(currentProgress / scrollHeight).toFixed(2);
        setCompletion(Number(progress) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
}

export default useScrollProgress;
