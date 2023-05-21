import { devices } from "@/fakeDB.json";

export default defineEventHandler((event) => {
  return devices;
});
