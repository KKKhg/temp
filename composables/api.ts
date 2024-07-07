import type { UseFetchOptions } from "#app"

export const useApi = () => {
    
    const useReissue = useReissueStore();
    
    const customUseFetch = (url: string, customOptions: UseFetchOptions = {}) => {
        const interceptors = getInterceptors(customOptions);
        
        try {
            // return $fetch(url, {
            return useFetch(url, {
                retry: 1,
                retryStatusCodes: [401],
                ...customOptions,
                ...interceptors
            });
        } catch(e) {
            console.log("useCustomFetch catch");
        }
    }

    const get = (url: string, customOptions: UseFetchOptions) => {
        return customUseFetch(url, {
            method: 'GET',
            ...customOptions
        });
    }
    
    const post = async (url: string, customOptions: UseFetchOptions) => {
        return customUseFetch(url, {
            method: 'POST',
            ...customOptions
        });
    }
    
    const postMultipart = async (url: string, customOptions: UseFetchOptions) => {
        return customUseFetch(url, {
            method: 'POST',
            ...customOptions
        });
    }
    
    
    const getInterceptors = (customOptions: UseFetchOptions) => {
        const reissueStore = useReissueStore();
        const abortController = new AbortController();  
        
        return {
            signal: abortController.signal,
            async onRequest({ request, options }) {
                
                if(useReissue.exist()) {
                    if(!await useReissue.get()) {
                        abortController.abort();
                    }
                }
                
                const useUser = useUserStore();
                const {accessToken, refreshToken} = useUser.getToken();
                
                if(accessToken && refreshToken) {
                    options = options || {};
                    
                    const tokenHeaders = {
                        'Authorization': 'Bearer ' + accessToken,
                        'RefreshToken' : refreshToken
                    };
                    
                    options.headers = {...options.headers, ...tokenHeaders};
                }
                if(customOptions.onRequest) customOptions.onRequest({request, options});
                
            },
            async onResponseError({ request, response, options }) {
                // console.log("onResponseError", request, response, options);
                console.log(options);
                console.log("response.status", response.status);
                if(response.status === 401) {
                    if(await reissue()) {
                        console.log("refresh SUCCESS!!");
                        
                        const useUser = useUserStore();
                        const {accessToken, refreshToken} = useUser.getToken();
                        
                        const tokenHeaders = {
                            'Authorization': 'Bearer ' + accessToken,
                            'RefreshToken' : refreshToken
                        };
                        
                        options.headers = {...options.headers, ...tokenHeaders};
                        
                    } else {
                        console.log("refresh FAILED!!");
                        options.retry = 0;
                        // logout logic
                    }
                } else {
                    if(customOptions.onRequestError) customOptions.onRequest({request, options});
                    else alert("error => " +  response.status);
                }
            }
        };
    }
    
    const reissue = async () => {
        if(!useReissue.exist()) {
            useReissue.set(
                new Promise<boolean>(async (resolve, reject) => {
                    try {
                        const { setToken, getToken } = useUserStore();
                        const { accessToken, refreshToken } = getToken();
                        const body = await $fetch("http://localhost:8081/v1/auth/reissue", {
                            headers: {
                                'Authorization': 'Bearer ' + accessToken,
                                'RefreshToken' : refreshToken
                            },
                            credentials: 'include'
                        });
                        
                        if(body.code === 200) {
                            setToken(body.data.accessToken, body.data.refreshToken);
                            resolve(true);
                        } else {
                            throw new Error("Reissue Failed");
                        }
                    } catch(e) {
                        console.log("fail");
                        resolve(false);
                    }  finally {
                        useReissue.set(null);
                    }
                })
            )
        }
        return useReissue.get();
    }    
    
    return { get, post, postMultipart }
}
