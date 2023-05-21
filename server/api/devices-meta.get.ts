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

  // Reduce companyDevices to a array of brand names
  const brands = companyDevices.reduce((brands, device) => {
    if (!brands.includes(device.brand)) {
      brands.push(device.brand);
    }
    return brands;
  }, []);

  // Reduce companyDevices to a array of model names
  const types = companyDevices.reduce((types, device) => {
    if (!types.includes(device.type)) {
      types.push(device.type);
    }
    return types;
  }, []);

  // Count the amount of devices status values
  const status = companyDevices.reduce((status, device) => {
    if (!status[device.status]) {
      status[device.status] = 0;
    }
    status[device.status]++;
    return status;
  }, {});

  return { status, brands: brands.length, types: types.length, total: companyDevices.length };
});
