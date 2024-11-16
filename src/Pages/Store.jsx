import { createContext, useEffect, useReducer } from "react";

const initialvalue={
    user:JSON.parse(localStorage.getItem('Anugraha')) || null
}

export const Appcontext=createContext()




export const Storepage=({children})=>{

    const display=(state,action)=>{

        console.log("action values in store page",action);
        switch(action.status){
            case "success":
             return {user:action.datas}  
             
             case "remove":
                return {user:null}
        }
        

    }


    const [state,dispatch]=useReducer(display,initialvalue)

    console.log("final answer in statemanagement",state.user);
    const finalvalue=state?.user

    useEffect(()=>{
        localStorage.setItem("Anugraha", JSON.stringify(state?.user));

    },[state])

    return(
        <>
        <Appcontext.Provider value={{dispatch,finalvalue}}>
{children}
        </Appcontext.Provider>

        </>
    )
}