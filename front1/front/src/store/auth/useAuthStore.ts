import type { User } from '~/src/obj/user'
import type {authInfo} from "~/src/obj/authInfo";

export const userAuthStore = defineStore('userAuth' , {
    state: () => ({
        user: null as null | User,
        token: null as string | null,
    }),

actions : {

        async login({email , password} : authInfo){
            try{
                const response = await $fetch<{ access_token: string }>('http://localhost:3001/auth/login', {
                    method: 'POST',
                    body: { email, password },
                });

                this.token = response.access_token;
                localStorage.setItem('token', this.token);
                console.log('token:', localStorage.getItem('token'));
            }

            catch (err){
                console.log(err)
            }
        },

        async logout (){
            this.token = null;
            localStorage.removeItem('token');
            console.log(localStorage.getItem('token'));
        }



}

})