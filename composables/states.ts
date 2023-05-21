export type Role = "Admin" | "Editor" | "Viewer";

export interface Group {
  id: number;
  name: string;
  members: User["id"][];
  devices: number[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  group: Group["id"] | null;
}

export const useUser = () =>
  useState<User | null>("user", () => {
    return { id: 1, name: "John Doe", email: "main@fjdlsjfk.ld", role: "Admin", group: 1 };
  });

export const useAuth = () =>
  useState<boolean>("auth", () => {
    const user = useUser();
    return user.value !== null;
  });
