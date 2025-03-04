import { Page } from "@/types/page";
import { api } from "./api";

export const getPageLang = async (lang: "en" | "fr") => {
  const result = await api.get(`${process.env.NEXT_PUBLIC_API_URL}/pages`, {
    params: {
      lang,
    },
  });
  return result?.data[0] as Page;
};
