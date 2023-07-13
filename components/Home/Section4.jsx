import {useEffect} from "react";
import { mySvg } from "@/svg";
import aos from "aos";
export const Section4 = () => {
  useEffect(() => {

    aos.init({
      duration: 400, 
      easing: 'ease',
      delay: 200
    })
  }, [])
  return (
    <div className="relative h-80 flex items-center justify-center text-center text-4xl bg-[#0a0660] mt-10 py-4 text-white">
      <p data-aos='fade-down' className="z-10 px-4 lg:w-1/2">
        &quot;Traveling isn&apos;t about running away from things. Sometimes
        it&apos;s running into what you truly wants!&quot;
      </p>
      <div className="absolute inset-0 bg-black/40 w-full h-full"></div>
      {mySvg.svg}
    </div>
  );
};
