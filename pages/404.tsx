import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return <h1>404 - Page Not Found</h1>;
};

export default Custom404;
