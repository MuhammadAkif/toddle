/*All type check function goes here*/
export const TypeUtils = {

    isFunction(param){
       return  typeof param === "function";
    },
    isString(param){
        return  typeof param === "string";
    }
}

export const TodoUtils = {
    resetInput(elem){
        if(elem.value){
            elem.value = '';
        }
    }
}