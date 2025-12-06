"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function useQueryParams() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const set = (obj) => {
    const sp = new URLSearchParams(params.toString());
    Object.entries(obj || {}).forEach(([k, v]) => {
      if (v == null || v === "") sp.delete(k);
      else sp.set(k, String(v));
    });
    router.replace(`${pathname}?${sp.toString()}`);
  };

  return { params, set };
}
