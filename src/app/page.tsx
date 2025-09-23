"use client";

import { trpc } from "@/trpc/react";

export default function Home() {
  const { data, isLoading } = trpc.hello.useQuery({ name: "Kushal" });

  if (isLoading) return <p>Loading...</p>;
  return <h1>{data?.message}</h1>;
}
