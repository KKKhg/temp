export const useUserStore = defineStore('userStore', () => {
    const auth = ref(false);
    const accessToken = ref('');
    const refreshToken = ref('');
    
    
    const getAuth = () => auth.value;
    
    const setAuth = (bool: boolean) => auth.value = bool;
    
    const getToken = () => {
        return  {
            accessToken: accessToken.value,
            refreshToken: refreshToken.value
        };
    }
    
    const setToken = (at:string, rt:string) => {
        accessToken.value = at;
        refreshToken.value = rt;
    }    
    
    return { getAuth, setAuth, setToken, getToken };
})