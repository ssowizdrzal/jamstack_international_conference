var myuniqueidcounter = 100;
export function uniqueId() {
    myuniqueidcounter += 1
    return myuniqueidcounter;
}