import db from "@/db";
import { Device } from "@/types";

export default defineEventHandler((event) => {
  const allDevices: Device[] = db.devices;

  const query = getQuery(event);

  const company = query.company;
  if (company === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing company",
    });
  }

  const companyDevices = allDevices.filter((device) => device.company == company);
  return companyDevices;
});
