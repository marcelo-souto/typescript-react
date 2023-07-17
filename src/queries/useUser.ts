import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../api/api";

export const useUser = () => {

  const token = localStorage.getItem("token");

  const queryClient = useQueryClient();

  const { isError, data: user,...others } = useQuery({

    queryKey: ["user", token],
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

  return { user, ...others };
};
