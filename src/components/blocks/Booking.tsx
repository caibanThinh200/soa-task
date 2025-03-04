"use client";

import { useState } from "react";
import CalendarComponent from "../ui/Calendar";
import CustomEditor from "../ui/Editor";
import { Paperclip, Sent } from "../ui/Icons";
import Input from "../ui/Input";
import Link from "next/link";
import Button from "../ui/Button";
import { Page } from "@/types/page";
import axios from "axios";
import { Event } from "react-big-calendar";
import AnimatedBlock from "../ui/Animated";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface BookingProps {
  data: Page["bloc_2_2"];
}

const Booking: React.FC<BookingProps> = ({ data }) => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({});
  const [events, setEvents] = useState<Event[]>([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", e?.target?.files?.[0]);

    try {
      const data = (await axios.post("/api/upload", formData)) as {
        data: { url: string };
      };
      console.log(data);
      if (data?.data?.url) {
        setPreviewUrl(data?.data?.url);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      // const response = await axios.post("/api/booking", data);
      console.log(data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const onReset = () => {
    setPreviewUrl("");
    setFormData({});
    reset();
  };

  ///(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  return (
    <AnimatedBlock>
      <div className="container mx-auto lg:py-20 py-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-main-orange divider text-center lg:w-1/2 mx-auto mb-10">
            <span>{data?.title}</span>
          </h2>
          <CalendarComponent events={events} updateEvents={setEvents} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <div className="flex gap-5 flex-col md:flex-row items-start lg:items-center">
              <label className="text-brown-coffee lg:w-[10%]">
                {data?.btn_1?.[0]}:
              </label>
              <div className="flex flex-col gap-3 w-full">
                <Input
                  {...register(data?.btn_1?.[1], {
                    required: "Please enter your name",
                  })}
                  className="w-full"
                  placeholder={data?.btn_1?.[1]}
                />
                {errors?.[data?.btn_1?.[1]] && (
                  <span className="text-red-600">
                    {(errors?.[data?.btn_1?.[1] as string] as any)?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-5 flex-col md:flex-row items-start lg:items-center">
              <label className="text-brown-coffee lg:w-[10%]">
                {data?.btn_2?.[0]}:
              </label>
              <div className="flex flex-col gap-3 w-full">
                <Input
                  {...register(data?.btn_2?.[1], {
                    pattern: {
                      value:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                      message: "Invalid email",
                    },
                    required: "Please enter your email",
                  })}
                  className="w-full"
                  placeholder={data?.btn_2?.[1]}
                />
                {errors?.[data?.btn_2?.[1]] && (
                  <span className="text-red-600">
                    {(errors?.[data?.btn_2?.[1] as string] as any)?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-5 flex-col md:flex-row ">
              <label className="text-brown-coffee lg:w-[10%]">
                {data?.btn_3}:
              </label>
              <CustomEditor />
            </div>
            <div className="flex gap-5 flex-col md:flex-row ">
              <label className="text-brown-coffee lg:w-[10%]">
                {data?.btn_4?.[0]}:
              </label>
              <div>
                <input
                  onChange={handleUploadFile}
                  type="file"
                  id="file"
                  className="sr-only"
                />
                <div className="flex items-center gap-2 flex-col lg:flex-row">
                  <label
                    className="text-[#1E88F9] flex items-center gap-2 cursor-pointer"
                    htmlFor="file"
                  >
                    <Paperclip />
                    {uploading ? "Loading" : `${data?.btn_4?.[1]}`}
                  </label>
                  <span className="text-spanish-gray">
                    (*{data?.btn_4?.[2]})
                  </span>
                </div>
                {previewUrl && (
                  <div className="flex gap-5 mt-10 items-center">
                    <Link
                      className="text-main-orange"
                      href={previewUrl}
                      target="_blank"
                    >
                      {previewUrl}
                    </Link>
                    <button
                      onClick={() => {
                        setPreviewUrl("");
                      }}
                    >
                      <Image
                        src={"/images/close.png"}
                        width={20}
                        height={20}
                        alt="close"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-5 flex-col md:flex-row">
              <Button
                onClick={onReset}
                type="button"
                variant="outline"
                className="px-10"
              >
                {data?.btn_5}
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="px-10 flex items-center justify-center gap-2 text-center"
              >
                {data?.btn_6} <Sent />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default Booking;
