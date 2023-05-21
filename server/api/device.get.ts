import { devices } from "@/fakeDB.json";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  const device = devices.find((device) => device.device_id === Number(query.id));
  if (device === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found",
    });
  }

  return device;
});
