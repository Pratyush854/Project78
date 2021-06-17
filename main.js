var array1 = ["IMG_0945.JPG", "029.JPG", "Atitgoyal.jpeg"];
var array2 = ["Pratyush Goyal", "Isha Goyal", "Atit Goyal"];
var x = 0;
var y = 0;
function update() {
    document.getElementById("img1").src=array1[x];
    x++;
    if (x == 3) {
        x = 0;
    }
    document.getElementById("para").innerHTML=array2[y];
    y++;
    if (y == 3) {
        y = 0;
    }
}