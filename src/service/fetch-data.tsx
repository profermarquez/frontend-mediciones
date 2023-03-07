export const apiService = async ()=>{
//const api='';
const endPoint ='http://6915-34-86-14-46.ngrok.io/mediciones';
const data = await fetch(endPoint,{
    method:'GET',
});

return data.json()

}