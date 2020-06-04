import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return <h1>404 - Page Not Found</h1>;
}
