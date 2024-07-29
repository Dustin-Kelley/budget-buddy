import { supabase } from "@/lib/supabase";

export const AuthService = {
    async signUp({ email, password }: { email: string, password: string }) {
        const { error } = await supabase.auth.signUp({ email, password })

        if (error) throw Error('Failed to sign up')
    }

};