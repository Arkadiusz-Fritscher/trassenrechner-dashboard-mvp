import { readings as $readings } from "@/fakeDB.json";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  const readings = $readings.filter((reading) => reading.device_id === Number(query.id));
  if (readings === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found",
    });
  }

  return readings;
});
