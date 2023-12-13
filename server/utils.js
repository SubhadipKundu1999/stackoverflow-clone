import Filter from "bad-words";
 const filters = new Filter();

export function clean(speech){
const new_speech = filters.clean(speech);
return new_speech;

}


