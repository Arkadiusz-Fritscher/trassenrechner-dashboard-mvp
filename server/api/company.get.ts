import db from "@/db";
import type { User, Company } from "@/types";

export default defineEventHandler((event) => {
  const user = useUser();

  const query = getQuery(event);

  if (query.id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing id",
    });
  }

  const company = db.companies.find((company) => company.id === user.value?.company);
  if (company === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: "Company not found",
    });
  }

  return company;
});
