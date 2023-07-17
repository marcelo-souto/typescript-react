import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../api/api";

export const useGetUser = () => {
  
  const token = localStorage.getItem("token");

  const queryClient = useQueryClient();

  const { isError, ...others } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });

  if (isError || !token) {
    localStorage.removeItem("token");
    queryClient.removeQueries({ queryKey: ["user", "token"] });
  }

  return { ...others };
};
