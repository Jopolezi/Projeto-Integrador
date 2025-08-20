import { useState, useEffect } from "react";
import axios from "axios";

const UserAPI = axios.create({
  baseURL: "http://localhost:3000/api/auth/perfil",
  headers: {
    "Content-Type": "application/json",
  },
});

export function useProfile() {
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await UserAPI.get("/perfil");
        setProfile(response.data);
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const response = await UserAPI.put("/perfil", data);
      setProfile(response.data);
      return response.data;
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, updateProfile };
}

const searchProfile = async () => {
}

