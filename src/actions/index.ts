'use server'

import { cookies } from "next/headers";

export const login = async () => {
  "use server";
  const res = fetch("htt/api/");
  const cookie = (await res).headers.get("Set-Cookie");
  ("token=sdog9780erduygr");
  // cookie?.split("=");
  cookies().set("token", "23546345634563456", {
    httpOnly: true
  });
};