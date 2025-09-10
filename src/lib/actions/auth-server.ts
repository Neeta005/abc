"use server";

import { auth } from "../auth";
import { redirect } from "next/navigation";

export async function getSession() {
  const session = await auth();
  return session;
}

export async function requireSession() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return session;
}