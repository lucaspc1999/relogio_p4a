const horas= document.getElementById("horas")
const minutos= document.getElementById("minutos")
const segundos= document.getElementById("segundos")

function time(){
    const dataAtual = new Date()
    const hora =dataAtual.getHours().toString().padStart(2,0)
    const minuto =dataAtual.getMinutes().toString().padStart(2,0)
    const segundo =dataAtual.getSeconds().toString().padStart(2,0)

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

}

setInterval(time,1000)