let array1 = ["maria", "roberta", "daniela"];
let array2 = ["melany", "marcos", array1,"andrea"];
forRancio:
for(let array in array2){
    if(array == 2){
        for(let array of array1){
            if(array == "maria"){
                continue forRancio; 
            }
            document.write(array + "<br>");
        }
        }else{
            document.write(array2[array])
    }
}