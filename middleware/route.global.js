export default defineNuxtRouteMiddleware((to, from) => {
    // if(import.meta.server) return;
    // const user = useUser();
    // if(to.path == "/login" && user.auth){
    //     window.location.reload();
    //     return navigateTo("test2");
    // }
    // let intopet = to.query.intopet;
    // if(!user.auth && intopet == "123"){
    //     console.log("no auth");
    //     user.setAuth(true);
    //     console.log(user.auth);
    //     return navigateTo("/test1");
    //     // return navigateTo("/test1", {external: true});
    //     // return navigateTo("https://naver.com");
    // }
    // // if(to.path == "/test1") {
    //     // return navigateTo("/test2");
    // // }
    // console.log("end of route middleware");
});
