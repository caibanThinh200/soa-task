import dynamic from "next/dynamic";
import { getPageLang } from "@/lib/api/lang";
import Image from "next/image";
import Chat from "@/components/ui/Chat";

const Booking = dynamic(() => import("@/components/blocks/Booking"));
const Hero = dynamic(() => import("@/components/blocks/Hero"));
const Cards = dynamic(() => import("@/components/blocks/Cards"));
const Map = dynamic(() => import("@/components/blocks/Map"));
const Slider = dynamic(() => import("@/components/blocks/Slider"));
const Carousel = dynamic(() => import("@/components/blocks/Carousel"));
const Explore = dynamic(() => import("@/components/blocks/Explore"));
const Content = dynamic(() => import("@/components/blocks/Content"));

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageData = await getPageLang(locale as "en" | "fr");
  return (
    <main>
      <Chat />
      <Hero data={pageData?.banner_title} />
      <Cards data={pageData?.bloc_1} />
      <Map mark={pageData?.carte_point} data={pageData?.bloc_2} />
      <Booking data={pageData?.bloc_2_2} />
      <Slider data={pageData?.bloc_3} />
      <Carousel data={pageData?.bloc_4} />
      <Explore data={pageData?.bloc_5} />
      <Content data={pageData?.bloc_6} />
    </main>
  );
}
