import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agents";

export const useEvents = (id?: string) => {
  const queryClient = useQueryClient();

  const { data: events, isPending } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await agent.get<AppEvent[]>("/events");
      return res.data;
    },
  });

  const { data: event, isLoading } = useQuery({
    queryKey: ["events", id],
    queryFn: async () => {
      const res = await agent.get<AppEvent>(`/events/${id}`);
      return res.data;
    },
    enabled: !!id,
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

  const createEvent = useMutation({
    mutationFn: async (event: AppEvent) => {
      await agent.post("/events", event);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });

  const deleteEvent = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/events/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });

  return {
    events,
    isPending,
    event,
    isLoading,
    updateEvent,
    createEvent,
    deleteEvent,
  };
};
