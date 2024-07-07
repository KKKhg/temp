<template>
    <div>
        <h1>HELLO</h1>
    </div>
    <div>
        <pre>
            {{ res1 }}
            
            login ? {{ useUser.getAuth() }}
            
            {{ useUser.getToken() }}
            
            s: {{ s }}
        </pre>
    </div>
    
    <div>email: <input type="text" v-model="email"></div>
    <div>pw: <input type="password" v-model="password"></div>
    
    <div><button @click="login" >login</button></div><br>
    <div><button @click="reissue" >reissue</button></div><br>
    <div><button @click="test1" >test1</button></div><br>
    <div><button @click="test2" >test2</button></div><br>
    <div><button @click="refresh" >refesh</button></div><br>
    
    <div><input type="file" @change="onChange"></div>
    
    <div><input type="text"></div>
    
    <div><button @click="test3">submit</button></div>
</template>

<script setup>

const email = ref("");
const password = ref("");

const res1 = ref("Initial value");

const s = ref('0');

const file = ref();

const onChange = (event) => {
    console.log(event);
    file.value = event.target.files[0];
}

const test3 = async () => {
    let data = {
        s: "hey"
    }
    const formData = new FormData();
    
    const dataBlob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    
    formData.append("s", dataBlob);
    formData.append("files[]", file.value);
    
    const res = await useApi().postMultipart(`${baseurl}/v1/user/test3`, {
        body: formData
    });
    console.log("============", res);
    
    
}


const {data, refresh} = await useAsyncData(() => useApi().get(`${baseurl}/v1/user/test1`, {
        query: {
          s: Number(s.value) + 1
        },
        onRequest({ request, options }) {
            console.log("test1 onRequest");
        }
    }));

console.log("top level await data", data.value);
s.value = data.value.data.s;


const baseurl = "http://localhost:8081";

const useUser = useUserStore();

const login = async () => {
    const body = await useApi().post(`${baseurl}/v1/login`, {
        method: 'post',
        body: {
            "email": email.value,
            "password": password.value
        }
    });
    
    console.log(body);
    if(body?.code == 200) {
        useUser.setToken(body.data.accessToken, body.data.refreshToken);
        useUser.setAuth(true);
    } else {
        alert(body.msg);
    }
}


async function test1() {
    s.value += 1;
    const data = await useApi().get(`${baseurl}/v1/user/test1`, {
        query: {
          s: s.value
        },
        onRequest({ request, options }) {
            console.log("test1 onRequest");
        }
    });
    console.log(process.client ? "client" : "server", "test1", data);
    if(data) {
        res1.value = data.s;    
    }
    
};


const test2 = async () => {
    const res = await useApi().get(`${baseurl}/v1/user/test2`);
    console.log("test2 res", res);
}






</script>

<style scoped>

</style>