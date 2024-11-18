if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getRandomZnak(znaky){
    var cislo = Math.floor(Math.random() * 5);
    //na tom indexu vrátí ten určitý znak
    return znaky[cislo];
}

function roztoc(){
    let znaky = ["🧐", "🎄", "🐥", "😍", "🍄"];
    const rychlost1 = 100;
    const rychlost2 = 200;
    const rychlost3 = 300;
    const sazka = document.getElementById("sazka").value

    for (let i = 0; i < 20000; i++){
        if (i % rychlost1 == 0){
            console.log(getRandomZnak(znaky));
            document.getElementById("element1").textContent = getRandomZnak(znaky);
        }
        if (i % rychlost2 == 0){
            
            document.getElementById("element2").textContent = getRandomZnak(znaky);
            
        }
        if (i % rychlost3 == 0){
            document.getElementById("element3").textContent = getRandomZnak(znaky);
        }
  
    }
    for (let j = 0; j < 5; j++){
        if (document.getElementById("element1").textContent === document.getElementById("element2").textContent && document.getElementById("element2").textContent === document.getElementById("element3").textContent){
            document.getElementById("vyhra").innerText = "Výhra: vyhrál!!"
        }
        else{
            document.getElementById("vyhra").innerText = "Výhra: nevyhrál :("
        }
    }
    


}