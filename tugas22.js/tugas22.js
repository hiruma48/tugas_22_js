function panggilforeach(){
    var kata = "Saya ingin belajar bersama";
    var result = kata.split(" ");
    result.forEach(function(item,index){
        console.log("item :",item,"index ke ",index);
    })
}
console.log(panggilforeach());