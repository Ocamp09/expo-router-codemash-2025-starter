import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useFavsQuery = function () {
  const { authToken } = useAuth();

  const query = useQuery({
    queryKey: [`favs`],
    queryFn: async () => {
      const response = await fetch(`/api/works/favs`, {
        method: "GET",
        headers: {
          authToken,
        },
      });
      return await response.json();
    },
  });

  return query;
};
