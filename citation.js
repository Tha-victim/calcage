
// function randomcitation() {
//     const cit = ["ya", "ye", "yi", "yo", "yu"];

//     const index = Math.floor(Math.random() * cit.length);
//     const cita = cit[index];
//     document.getElementById("citat").innerHTML = cita;
// }

// function copy() {
//     const txt = document.getElementById("citat").value;

//     navigator.clipboard.writeText(txt)
//         .then(() => {
//             notification.classList.add('show');
                
//             setTimeout(() => {
//                 notification.classList.remove('show');
//             }, 3000);
//             // alert("Texte copié ! ✅");
//             // setTimeout(() )
//         })
//         // .catch(err => {
//         //     alert("Erreur");
//         // })
// }

function calcAge() {
    const auj = new Date();
    const naiss = new Date(document.getElementById("dat").value);
    let age = auj.getFullYear() - naiss.getFullYear();

    const moisact = auj.getMonth();
    const jouract = auj.getDate();
    const moisnaiss = naiss.getMonth();
    const journaiss = naiss.getDate();

    if (moisact < moisnaiss || (moisact === moisnaiss && jouract < journaiss)) {
        age--;
    }

    if (age < 18) {
        document.getElementById("age").style.color = "red";
    }
    else {
        document.getElementById("age").style.color = "green";     
    }

    document.getElementById("age").innerHTML = age;


}