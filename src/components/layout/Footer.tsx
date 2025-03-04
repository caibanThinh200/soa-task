import { FooterLink, Page } from "@/types/page";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  data: Page["footer"];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const chunkArray = (arr: FooterLink[] = [], size = 3) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const columns = chunkArray(data?.links as FooterLink[], 3);

  const socials = ["/svg/facebook.svg", "/svg/insta.svg", "/svg/youtube.svg"];

  return (
    <div className="bg-brown-coffee">
      <div className="container mx-auto py-20">
        <div className="flex justify-between pb-10 flex-col lg:flex-row gap-10">
          <div className="text-white">
            <p>{data?.address?.name}</p>
            <p>{data?.address?.phone}</p>
            <p>{data?.address?.location}</p>
          </div>
          {columns?.map((column, idx) => (
            <ul key={idx} className="flex flex-col gap-2 flex-wrap">
              {column?.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="text-white/60">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="border-t border-white/30 pt-10">
          {/* <p className="text-white/60">{data?.name}</p> */}
          <div className="flex justify-between items-center">
            <p className="text-white">@ BASIC 2024</p>
            <div className="flex gap-2 items-center">
              {socials?.map((social, idx) => (
                <Link key={idx} href={"/"}>
                  <Image src={social} width={32} height={32} alt="social" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
