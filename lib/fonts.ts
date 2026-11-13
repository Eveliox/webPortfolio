import { Chakra_Petch, Dela_Gothic_One, JetBrains_Mono } from "next/font/google";

// UI + body: squared, technical, still readable in paragraphs.
export const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-chakra",
});

// Display: heavy Japanese poster face, covers Latin, kana, and kanji.
export const dela = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dela",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});
