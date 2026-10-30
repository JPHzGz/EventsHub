import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agents";

export const useEvents = () => {
  const queryClient = useQueryClient();
  const { data: events, isPending } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await agent.get<AppEvent[]>("/events");
      return res.data;
    },
  });

  const updateEvent = useMutation({
    mutationFn: async (event: AppEvent) => {
      await agent.put("/events", event);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });

  return { events, isPending, updateEvent };
};
