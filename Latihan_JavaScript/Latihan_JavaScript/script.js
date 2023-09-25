//function tambah() {
//    let a = document.getElementById("bilangan1").value;
//    let b = document.getElementById("bilangan2").value;
//    document.getElementById("hasil").value = parseInt(a) + parseInt(b);
//}
//let tambah = function () {
//    let a = document.getElementById("bilangan1").value;
//    let b = document.getElementById("bilangan2").value;
//    document.getElementById("hasil").value = parseInt(a) + parseInt(b);
//}
function cekangka() {
    //const bil1 = document.getElementById("bilangan1").value;
    //const bil2 = document.getElementById("bilangan2").value;

    //if (bil1 < bil2) {
    //    document.getElementById("output").innerHTML = bil1 + " lebih kecil dari pada " + bil2;
    //} else if (bil1 > bil2) {
    //    document.getElementsByClassName("myclass")[0].innerHTML = bil1 + " lebih besar dari pada " + bil2;
    //} else {
    //    document.getElementsByTagName("p")[0].innerHTML = bil1 + " sama dengan " + bil2;
    //}

    const bil1 = parseInt($("#bilangan1").val());
    const bil2 = parseInt($("#bilangan2").val());

    if (bil1 < bil2) {
        $("#output").html(bil1 + " lebih kecil dari pada " + bil2);
    } else if (bil1 > bil2) {
        $(".myclass").html(bil1 + " lebih besar dari pada " + bil2);
    } else {
        $("p")[0].html(bil1 + " sama dengan " + bil2);
    }
}
let tambah = () => {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) + parseInt(b);
}
function kurang() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) - parseInt(b);
}
function kali() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) * parseInt(b);
}
function bagi() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) / parseInt(b);
}
function pangkat() {
    let a = document.getElementById("bilangan1").value;
    let b = document.getElementById("bilangan2").value;
    document.getElementById("hasil").value = parseInt(a) ** parseInt(b);
}