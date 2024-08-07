import { FC, ReactNode, useEffect, useState } from "react";
import { getProfile } from "../../services/auth";
import { AuthContext } from "./AuthContext";
import { UserType } from "../../models/user";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | Omit<UserType, "name"> | null>(
    null
  );

  console.log("user:", user);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: user } = await getProfile();
        if (user) {
          setUser(user.user);
        }
      } catch (error) {
        console.error("Error fetching profile", error);
      } finally {
      }
    };

    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
