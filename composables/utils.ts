import type { Headers } from "@/types";

export const useUtils = () => {
  const objectKeys = (obj: object) => {
    return Object.keys(obj).map((key) => {
      return {
        title: key,
        key: key,
      } as Headers;
    });
  };

  const formatDate = (date: string) => {
    const d = new Date(date);

    const formatDate = d.toLocaleDateString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "numeric",
      year: "2-digit",
      timeZone: "Europe/Berlin",
      hourCycle: "h24",
    });

    return formatDate;
  };

  return { objectKeys, formatDate };
};
