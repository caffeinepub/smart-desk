import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CourseCategory } from '../backend';

interface EnquiryInput {
  name: string;
  phoneNumber: string;
  email: string | null;
  courseCategory: CourseCategory | null;
  message: string;
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: EnquiryInput) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      const id = await actor.addEnquiry(
        input.name,
        input.phoneNumber,
        input.email,
        input.courseCategory,
        input.message
      );

      return id;
    },
    onSuccess: () => {
      // Invalidate enquiries list if we add admin features later
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}
