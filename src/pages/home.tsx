import { component$, Resource,useResource$ } from "@builder.io/qwik";
import CharacterComponent from '../components/character/character'
import { apiService } from "~/service/fetch-data";
import { mediciones } from "~/models/mediciones";

export default component$ (() => {
    const useResource = useResource$(()=> apiService())
    return (
        <Resource 
            value={useResource}
            onPending={()=><p>Loading....</p>}
            onResolved ={(res)=>{
                return (
                    <>
                    <ul class="grid-container">
                        {res.map((temp:mediciones)=>{
                                    console.log(temp);
                                    return (<li key ={temp.tiempo}>
                                        <CharacterComponent {...temp}/>
                                    </li>)
                                })
                            }
                        </ul>
                    </>
                );
                
                
                
            }}
        />
    );
    });