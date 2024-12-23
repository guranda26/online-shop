// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export function useAuthRedirect() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = localStorage?.getItem("isAuth");
//     const isLoggedIn = checkAuth && JSON.parse(checkAuth);
//     if (isLoggedIn) {
//       router.push("/home");
//     } else {
//       setLoading(false);
//     }
//   }, [router]);

//   return loading;
// }
