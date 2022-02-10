const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

setTimeout(() => {
    document.getElementsByClassName("title-container")[0].remove();
}, 5000);

const tabMonth = ["jan", "fev", "mar", "avr", "mai", "jui", "juil", "aou", "sep", "oct", "nov", "dec"]

const printDate = async () => {
    let date;
    while (true) {
        date = new Date();
        let laDate = date.getDate() + "  " + tabMonth[date.getMonth()] + "  " + date.getFullYear();
        let heure = date.getHours() + " : " + date.getMinutes() + " : " + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        document.getElementById("heure").innerHTML = heure;
        document.getElementById("date").innerHTML = laDate;
        await pause(1000);
    }
}

printDate();