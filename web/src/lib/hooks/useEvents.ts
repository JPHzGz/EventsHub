import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useEvents = () => {
  const { data: events, isPending } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.get<AppEvent[]>(
        "https://localhost:5001/api/v1/events",
      );
      return res.data;
    },
  });

  return { events, isPending };
};
