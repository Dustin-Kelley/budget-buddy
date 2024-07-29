import { supabase } from "@/lib/supabase";

export const AuthService = {
    async signUp({ email, password }: { email: string, password: string }) {
        const { error } = await supabase.auth.signUp({ email, password })

        if (error) throw Error('Failed to sign up')
    },

    async signIn({ email, password }: { email: string, password: string }) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) throw Error('Failed to sign in')
    }

};