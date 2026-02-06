'use client';

import { useRouter } from "next/navigation";
// hooks/useLetsTalk.js

const useLetsTalk = () => {
  const router = useRouter();

  const goToContact = () => {
     router.push("/contact?scrollToForm=true");
  };

  return goToContact;
};

export default useLetsTalk;