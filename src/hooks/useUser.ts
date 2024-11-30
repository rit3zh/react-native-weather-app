import { useState, useEffect } from "react";
import { getUser } from "@/core";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/core/db";
import { IUser } from "@/typings/user/User";

export function useUser() {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const key = await getUser();
        const userDocRef = doc(db, "users", key as string);

        const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            setUser(docSnapshot.data() as IUser);
          } else {
            return null;
          }
        });

        return unsubscribe;
      } catch (error) {}
    };

    fetchUser();
  }, []);

  return user;
}
