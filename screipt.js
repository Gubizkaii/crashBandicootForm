let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let animal = document.getElementById("animal");
let karts = document.getElementById("karts");
let time = document.getElementById("time");
let kart_img = document.getElementById("kart_img");

const KartsList = [
    {
        nome:"oxide",
        url:"https://i.pinimg.com/originals/cd/ea/09/cdea09d7b733181b9d8d8e4ee942b3fa.png"
    },
    {
        nome:"cortex",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-rA1oB65BptpiEj3r3hlAidySGnyECfEwQ&usqp=CAU"
    },
    {
        nome:"bandicoot",
        url:"https://w7.pngwing.com/pngs/1024/446/png-transparent-crash-nitro-kart-crash-bandicoot-the-wrath-of-cortex-crash-team-racing-crash-of-the-titans-crash-tag-team-racing-crash-nitro-kart-car-video-game-vehicle.png"
    },
    {
        nome:"garcia",
        url:"https://w7.pngwing.com/pngs/985/42/png-transparent-radio-controlled-car-crash-nitro-kart-crash-team-racing-gamecube-car-game-car-video-game.png"
    },
];

for(let i=0;i <= KartsList.length;i++){
    karts.innerHTML+=`<option value='${KartsList[i].url}'>${KartsList[i].nome}</option> <br>`;
}

kart_img.scr=KartsList[0].url;
console.log(kart_img)