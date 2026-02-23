import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/services";

export const useUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: getUsers,
		staleTime: 1000,
	});
};
