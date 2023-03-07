import { component$ } from "@builder.io/qwik";
import type{ mediciones } from "~/models/mediciones";

export default component$ (
    ({humedad, temperatura,tiempo}:Pick<mediciones,'humedad'| 'temperatura' | 'tiempo'>) => 
    {
        
            return (
                <>
                <div class="card">
                    <div class="text-center">
                        <div >Temperatura: {temperatura}</div>
                        <div >Humedad {humedad}</div>
                        <div >Fecha: {tiempo}</div>
                    </div>
                </div>
                    
                </>
            )
        }
    );