import { ReactNode } from "react";

export interface SessionData {
  org: string;
  orgUnit: string;
  short?: string;
}

export interface RoomData {
  org: string;
  orgUnit: string;
  short?: string;
}

export interface ResponseData {
  message: string;
  data?: SessionData | RoomData | null;
}

export interface SessionContextType {
  session: SessionData | null;
  response: ResponseData | null;
  error: string | null;
  createSession: () => Promise<void>;
  startConference: () => Promise<void>;
  clearResponse: () => void;
}

export interface RoomContextType {
  room: RoomData | null;
  response: ResponseData | null;
  error: string | null;
  createRoom: () => Promise<void>;
  startConference: () => Promise<void>;
  clearResponse: () => void;
}

export interface SessionProps {
  children: ReactNode;
}

export interface RoomProps {
  children: ReactNode;
}