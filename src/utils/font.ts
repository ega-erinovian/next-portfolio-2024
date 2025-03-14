import {
  Montserrat,
  Playfair_Display,
  Road_Rage,
  Poppins,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const roadRage = Road_Rage({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
