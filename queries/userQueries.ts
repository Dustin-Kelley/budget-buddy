import { supabase } from '@/lib/supabase';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

const user = createQueryKeys('user', {
  currentUser: () => ({
    queryFn: async () => {
      const { data: { user } = {} } = await supabase.auth.getUser();

      if (!user || !user?.id) throw new Error('no user found');

      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error || !userData) {
        const userData = {
          avatar_image: null,
          email: user.email || null,
          error,
          full_name: null,
          id: user.id,
        };
        return { userData };
      }

      return { userData };
    },
    queryKey: [{}],
  }),

  //Haven't tested this yet...
  userById: ({ id }: { id: string | undefined }) => ({
    queryFn: async () => {
      if (!id) throw new Error('no user id provided');

      const { data } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single()
        .throwOnError();

      if (!data) throw new Error('no user found');

      return {};
    },
    queryKey: [{ id }],
  }),
});

export function useCurrentUser() {
  const { data, isPending } = useQuery(user.currentUser());
  return {
    isLoadingUser: isPending,
    user: data?.userData || null,
    userID: data?.userData?.id || '',
  };
}
