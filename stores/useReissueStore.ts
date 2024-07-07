export const useReissueStore = defineStore('reissueStore', () => {

    const reissuePromise = ref<Promise<boolean> | null>(null);
    
    const exist = () => reissuePromise.value !== null;
    
    const get = () => reissuePromise.value;
    
    const set = (promise: Promise<boolean> | null) => reissuePromise.value = promise;

    return {exist, get, set};
})