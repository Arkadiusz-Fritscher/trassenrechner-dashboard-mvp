export type Role = "Admin" | "Editor" | "Viewer";

export interface Headers {
  title: string;
  align: string;
  key: string;
}

export interface Company {
  id: number;
  name: string;
  headers: {
    devices?: Headers[];
    device?: Headers[];
  } | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  company: Company["id"] | null;
  headers?: Company["headers"];
}

export interface Device {
  id: number;
  company: number;
  type: string;
  location: string;
  brand: string;
  lastSeen: string;
  status: string;
}

export interface Reading {
  id: number;
  device_id: number;
  temperature: number;
  iso1: number;
  iso2: number;
  loop1: number;
  loop2: number;
  battery: number;
  measuredAt: Date;
}
