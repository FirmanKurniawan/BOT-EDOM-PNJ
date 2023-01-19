let input = 5;
let elements = ['a','b','c','d'];
limits = [9,8,6,4];
for (j = 0; j<elements.length; j++){
    for (i = 1; i<= limits[j]; i++){
        document.querySelector("#" + elements[j] + i + "_" + input).click();
    }
}
