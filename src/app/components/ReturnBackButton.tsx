"use client";
import { useRouter, usePathname } from "next/navigation";
import { ReturnBackButtonProps } from "../interfaces/returnBackButton";

const ReturnBackButton: React.FC<ReturnBackButtonProps> = ({
  fallbackRoute = "/",
}) => {
  const path = usePathname();
  const router = useRouter();

  const returnBack = () => {
    const pathSegments = path.split("/").filter(Boolean);
    if (pathSegments.length > 1) {
      const newPath = `/${pathSegments.slice(0, -1).join("/")}`;
      router.push(newPath);
    } else {
      router.push(fallbackRoute);
    }
  };

  return (
    <button className="goBackButton" onClick={returnBack}>
      Go Back
    </button>
  );
};

export default ReturnBackButton;
