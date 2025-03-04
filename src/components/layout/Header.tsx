"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Page } from "@/types/page";
import { motion } from "motion/react";
import Drawer from "react-modern-drawer";

interface HeaderProps {
  data: Page["head_menu"];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-brown-coffee/70 backdrop-blur-[0.7] absolute w-full h-fit inset-0 z-40">
      <div className="container py-5 mx-auto">
        <div className=" justify-between gap-10 items-center min-[1025px]:flex hidden">
          <div className="text-white flex items-center">
            <Link href="/" className="uppercase font-bold">
              Logo sample
            </Link>
          </div>
          <ul className="flex 2xl:gap-10 gap-5 items-center">
            {data?.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 * (idx + 1),
                }}
              >
                <Link
                  className="font-medium text-white hover:text-main-orange transition-colors duration-300"
                  href="/"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            transition={{
              type: "spring",
              stiffness: 260,
              delay: data?.length * 0.2,
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex gap-4 items-center"
          >
            <Image
              src="/svg/mountain.svg"
              width={28}
              height={28}
              alt="mountain"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/svg/whale.svg"
              width={28}
              height={28}
              alt="whale"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/svg/aim.svg"
              width={28}
              height={28}
              alt="aim"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
            <div className="flex gap-4">
              <Link href={"/en"} locale="en">
                <Image
                  className="size-4 object-cover cursor-pointer hover:scale-110 transition-all duration-300"
                  src="/images/us.png"
                  width={16}
                  height={16}
                  alt="us"
                />
              </Link>
              <Link href={"/fr"} locale="fr">
                <Image
                  className="size-4 object-cover cursor-pointer hover:scale-110 transition-all duration-300"
                  src="/svg/france.svg"
                  width={16}
                  height={16}
                  alt="france"
                />
              </Link>
            </div>
            <button className="p-4 py-2 rounded-full bg-main-orange cursor-pointer hover:scale-110 transition-all duration-300">
              <Image
                src="/svg/arrow-up.svg"
                width={24}
                height={24}
                alt="arrow up"
              />
            </button>

            {/* <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-inherit p-1">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <Link
                href={"/"}
                lang="en"
                onClick={() => changeLanguage("en")}
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  !isChecked ? "text-primary bg-inherit" : "text-body-color"
                }`}
              >
                <Image src="/images/us.png" width={16} height={16} alt="us" />
              </Link>
              <Link
                href={"/"}
                lang="fr"
                onClick={() => changeLanguage("fr")}
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                  isChecked ? "text-primary bg-inherit" : "text-body-color"
                }`}
              >
                <Image
                  src="/svg/france.svg"
                  width={16}
                  height={16}
                  alt="france"
                />
              </Link>
            </label> */}
          </motion.div>
        </div>
        <div className="items-center justify-between min-[1025px]:hidden flex">
          <div className="text-white flex items-center">
            <Link href="/" className="uppercase font-bold">
              Logo sample
            </Link>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 7H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <Drawer
              size={"100%"}
              open={isOpen}
              onClose={() => setIsOpen(!isOpen)}
              direction="right"
            >
              <div className="p-10">
                <div className="mb-14">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <Image
                      src={"/images/close.png"}
                      className="size-5"
                      width={30}
                      height={30}
                      alt={"close"}
                    />
                  </button>
                </div>
                <div className="flex flex-col gap-5 items-center ">
                  <ul className="flex 2xl:gap-10 flex-col gap-5 items-center">
                    {data?.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ scale: 0 }}
                        animate={{ scale: isOpen ? 1 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2 * (idx + 1),
                        }}
                      >
                        <Link
                          onClick={(e) => {
                            // e.preventDefault();
                            setIsOpen(false);
                            // router.push(item.href);
                          }}
                          className="font-medium hover:text-main-orange transition-colors"
                          href="/"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      delay: data?.length * 0.2,
                    }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={isOpen && { y: 0, opacity: 1 }}
                    className="flex gap-4 items-center"
                  >
                    <Image
                      src="/svg/mountain.svg"
                      width={28}
                      height={28}
                      alt="mountain"
                    />
                    <Image
                      src="/svg/whale.svg"
                      width={28}
                      height={28}
                      alt="whale"
                    />
                    <Image
                      src="/svg/aim.svg"
                      width={28}
                      height={28}
                      alt="aim"
                    />
                    <div className="flex gap-4">
                      <Link
                        onClick={(e) => {
                          // e.preventDefault();
                          setIsOpen(false);
                          // router.push(item.href);
                        }}
                        href={"/en"}
                        locale="en"
                      >
                        <Image
                          className="size-4 object-cover"
                          src="/images/us.png"
                          width={16}
                          height={16}
                          alt="us"
                        />
                      </Link>
                      <Link
                        onClick={(e) => {
                          // e.preventDefault();
                          setIsOpen(false);
                          // router.push(item.href);
                        }}
                        href={"/fr"}
                        locale="fr"
                      >
                        <Image
                          className="size-4 object-cover"
                          src="/svg/france.svg"
                          width={16}
                          height={16}
                          alt="france"
                        />
                      </Link>
                    </div>
                    <button className="p-4 py-2 rounded-full bg-main-orange">
                      <Image
                        src="/svg/arrow-up.svg"
                        width={24}
                        height={24}
                        alt="arrow up"
                      />
                    </button>
                  </motion.div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
