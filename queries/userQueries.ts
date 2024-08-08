import { supabase } from '@/lib/supabase';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

const user = createQueryKeys('user', {
  currentUser: () => ({
    queryFn: async () => {
      const { data: { user } = {} } = await supabase.auth.getUser();

      if (!user || !user?.id) throw new Error('no user found');

      return { user };
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
    user: data?.user || null,
    userID: data?.user?.id || '',
  };
}
