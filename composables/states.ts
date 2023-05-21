import type { User, Company } from "@/types";
import db from "@/db";

const fakeUser: User = {
  id: 1,
  name: "John Doe",
  email: "main@email.bbbl",
  role: "Admin",
  company: 1,
  headers: null,
};

export const useUser = () => useState<User | null>("user", () => fakeUser);

export const useCompany = () =>
  useState<Company | null | undefined>("company", () => {
    const user = useUser();

    if (!user.value || user.value === null || user.value.company === null) {
      return null;
    }
    return db.companies.find((company) => company.id === user.value?.company);
  });

export const useAuth = () =>
  useState<boolean>("auth", () => {
    const user = useUser();
    return user.value !== null;
  });
