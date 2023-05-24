import {BASE_PATH} from "../utils/constants";

export async function loginApi(formValue){
    try{
        const url = `http://localhost:8000/api/auth/login/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formValue),
        };

        const response = await fetch(url, params);
        if(response.status !== 200){
            throw new Error("Usuario o contrasena incorrectos");
        }

        const result = await response.json()
        return result;
    }
    catch(error){
        throw error;
    }
}