export default function concateArrayOfStrings(array) {
    let $concated_string = ""
    if (array.length!==0){
        array.map((x) => (
             $concated_string = $concated_string + x + " " ))
    }
    return $concated_string
}

