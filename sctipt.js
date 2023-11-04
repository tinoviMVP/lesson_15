function Operatorr() {
    let code = Number(document.getElementById("Code").value)

    if (code == 97 || code == 88) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: MobiUz`
    }
    if (code == 95) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Uzmobile`
    }
    if (code == 99 || code == 77) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Uzmobile GSM`
    }
    if (code == 93 || code == 94 || code == 55) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Ucell`
    }
    if (code == 33) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Humans`
    }
    if (code == 90 || code == 91) {
        document.getElementById("operatorName").innerHTML = `Ваш оператор: Beeline`
    }
}