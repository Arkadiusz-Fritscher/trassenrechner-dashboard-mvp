import db from "@/db";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  const deviceReadings = db.readings.filter((reading) => reading.device_id === Number(query.id));
  if (db.readings === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found",
    });
  }

  return deviceReadings;
});
