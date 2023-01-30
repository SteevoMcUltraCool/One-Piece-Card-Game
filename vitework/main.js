const DOM = {
    OP1: document.getElementById("OP1"),
    CTC: document.getElementById("clickToContinue")
}
let initialized = false
window.addEventListener("click", function(){
    if (!initialized){
        initialized = true
        DOM.OP1.play()
        DOM.CTC.style.animation = "none"
    }
})