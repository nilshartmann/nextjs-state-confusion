"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type OrderButtonProps = {
  orderBy: "title" | "date";
  children: React.ReactNode;
};

export default function OrderButton({ orderBy, children }: OrderButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const disabled = searchParams.get("order_by") === orderBy;

  const handleClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order_by", orderBy);
    router.push(`pathname?${newParams.toString()}`);
  };

  return (
    <button onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}
