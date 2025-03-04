import Layout from "@/components/layout";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "ckeditor5/ckeditor5.css";
import "swiper/css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-modern-drawer/dist/index.css";
import "../globals.css";
// import "ckeditor5-premium-features/ckeditor5-premium-features.css";
export default function Template({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return children;
}
