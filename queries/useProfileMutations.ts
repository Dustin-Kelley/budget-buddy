import { ProfileService } from "@/services/ProfileService";
import { useMutation } from "@tanstack/react-query";
import { useCurrentUser } from "./userQueries";

export function useUpdateProfile() {
    const {userID} = useCurrentUser();
    const { isPending, mutate } = useMutation({
      mutationFn: async ({ fullName,  }: { fullName: string, }) => {
        await ProfileService.updateProfile({ fullName, userID });
      },
      onSuccess: () => {
        console.log('Profile updated successfully');
      },
      onError: (error) => {
      console.log('There was an error updating your profile', error);
      },
    });
  
    return {
    isUpdateProfile: isPending,
    updateProfile: mutate
    };
  }