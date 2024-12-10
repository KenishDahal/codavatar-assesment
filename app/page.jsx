// app/page.jsx
"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  // Automatically redirect to the signup page
  router.push("/signup");

  return <div>Redirecting to signup...</div>;
  

};

export default HomePage;
