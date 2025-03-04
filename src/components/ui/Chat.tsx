"use client";
import { motion } from "motion/react";
import Image from "next/image";

const Chat = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{
        delay: 1,
      }}
      className="fixed lg:bottom-10 lg:right-20 bottom-5 right-5 z-20"
    >
      <button className="bg-main-orange p-3 flex items-center justify-center lg:size-[56px] size-[40px] rounded-full">
        <Image src="/svg/chat.svg" width={32} height={32} alt="chat" />
      </button>
    </motion.div>
  );
};

export default Chat;
