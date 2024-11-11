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
    const cislo = Math.floor(Math.random() * (znaky.lenght));
    //na tom indexu vrátí ten určitý znak
    return znaky[cislo];
}

function roztoc(){
    let znaky = ["🧐", "🎄", "🐥", "😍", "🍄"];
    const rychlost1 = 100;
    const rychlost2 = 200;
    const rychlost3 = 300;

    for (let i = 0; i < 20000; i++){
        if (i % rychlost1 == 0){
            document.getElementById("element1").textContent = getRandomZnak(znaky);
        }
        if (i % rychlost2 == 0){
            document.getElementById("element2").textContent = getRandomZnak(znaky);
            
        }
        if (i % rychlost3 == 0){
            document.getElementById("element3").textContent = getRandomZnak(znaky);
        }
    }

}