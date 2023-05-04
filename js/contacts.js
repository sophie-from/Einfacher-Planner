const sendReviews = document.getElementById("nachrichtSchicken");
sendReviews.addEventListener("click", () => { if(document.querySelector("textarea").value !== "") {
    alert("Danke für deine Nachricht")}
else {
    let errorMessage = document.createElement("strong");
    errorMessage.innerHTML = "Schreib deine Nachricht ins Formular";
    let review = document.getElementById("deineNachricht");
    review.insertAdjacentElement("beforebegin", errorMessage);
    review.addEventListener("input", ()=> {errorMessage.remove();});
}});
