import db from "@/db";
let limit = 10;

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.id === undefined || !query.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  if (query.limit && Number(query.limit) < limit) {
    limit = Number(query.limit);
  }

  const deviceReadings = db.readings.filter((reading) => reading.device_id === Number(query.id));

  if (!deviceReadings.length) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found",
    });
  }

  const lastReadings = deviceReadings
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.measuredAt) - new Date(a.measuredAt);
    })
    .slice(0, limit);

  return lastReadings;
});
