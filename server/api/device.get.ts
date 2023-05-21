import db from "@/db";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  const device = db.devices.find((device) => device.id === Number(query.id));
  if (device === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found",
    });
  }

  return device;
});
