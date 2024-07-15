import Image from "next/image";
import { Inter } from "next/font/google";
import SplashPage from "./splash";

const inter = Inter({ subsets: ["latin"] });

export default function Landingpage() {
  return (
    <SplashPage />
  );
}
