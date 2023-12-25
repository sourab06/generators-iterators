function fetchnextelement(array){
    let idx=0;
    function next(){
        if(idx==array.lenght){
            return undefined;
        }
        const nextelement=array[idx];
        idx++;
        return nextelement;
    }
    return {next};
}
const auto=fetchnextelement([99,11,12,13,0,1,2,3,4]);
console.log(auto.next());
console.log(auto.next());