import { supabase } from '@/lib/supabase';


export const ProfileService = {
  async updateProfile({ fullName, userID }: { fullName: string; userID: string }) {
   await supabase
   .from('users')
   .update({ full_name: fullName })
   .eq('id', userID)
   .throwOnError();
  },
};
