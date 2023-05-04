const sendFirstGoal = document.getElementById("sendFirstGoal");
sendFirstGoal.addEventListener("click", sendingFirstGoal, { once: true });
let btnFirstGoal = false;
function sendingFirstGoal() {
  let mainGoals = document.getElementById("zieleSetzen");
  let resultArr = [];
  if (btnFirstGoal == false) {
    let goal1 = document.getElementById("goal1");
    if (goal1.value !== "") {
      resultArr.push(goal1.value);
    }
    mainGoals.innerHTML = `<fieldset>
    <legend>Jetzt schreib mal noch drei wichtige Aufgaben:</legend>
    <label for="ersteWichtigeAufgabe">Erste wichtige Aufgabe</label
    ><br /><br />
    <textarea
      id="ersteWichtigeAufgabe"
      name="ersteWichtigeAufgabe" 
    ></textarea
    ><br /><br />
    <label for="zweiteWichtigeAufgabe">Zweite wichtige Aufgabe</label
    ><br /><br />
    <textarea
      id="zweiteWichtigeAufgabe"
      name="zweiteWichtigeAufgabe" 
    ></textarea
    ><br /><br />
    <label for="dritteWichtigeAufgabe" >Dritte wichtige Aufgabe</label
    ><br /><br />
    <textarea
      id="dritteWichtigeAufgabe"
      name="dritteWichtigeAufgabe"
    ></textarea
    ><br /><br />
  </fieldset>
  <input
            id="sendSecondGoal"
            type="button"
            class="button"
            value="Senden"
          />`;
  }
  btnFirstGoal = true;
  const sendSecondGoal = document.getElementById("sendSecondGoal");
  sendSecondGoal.addEventListener("click", sendingSecondGoal, { once: true });
  let btnSecondGoal = false;

  function sendingSecondGoal() {
    if (btnSecondGoal == false) {
      const goal2 = document.querySelectorAll("textarea");
      goal2.forEach((goal) => {
        if (goal.value !== "") {
          resultArr.push(goal.value);
        }
      });
      mainGoals.innerHTML = `<fieldset>
      <legend>
        Und jetzt liste sechs Aufgaben, die du heute noch machen möchtest:
      </legend>

      <label for="Aufgabe1">1.</label><br /><br />
      <textarea id="Aufgabe1" name="Aufgabe1"></textarea><br /><br />
      <label for="Aufgabe2">2.</label><br /><br />
      <textarea id="Aufgabe2" name="Aufgabe2"></textarea><br /><br />
      <label for="Aufgabe3">3.</label><br /><br />
      <textarea id="Aufgabe3" name="Aufgabe3"></textarea><br /><br />
      <label for="Aufgabe4">4.</label><br /><br />
      <textarea id="Aufgabe4" name="Aufgabe4"></textarea><br /><br />
      <label for="Aufgabe5">5.</label><br /><br />
      <textarea id="Aufgabe5" name="Aufgabe5"></textarea><br /><br />
      <label for="Aufgabe6">6.</label><br /><br />
      <textarea id="Aufgabe6" name="Aufgabe6"></textarea><br /><br />
    </fieldset>
    <input
            id="sendGoals"
            type="button"
            class="button"
            hidden="hidden"
            value="Senden"
          />
    `;
    }
    btnSecondGoal = true;
    const buttonGoals = document.getElementById("sendGoals");
    buttonGoals.addEventListener("click", myFunction, { once: true });

    function myFunction() {
      const goal3 = document.querySelectorAll("textarea");
      goal3.forEach((goal) => {
        if (goal.value !== "") {
          resultArr.push(goal.value);
        }
      });
      if (menuClicked == false) {
        let mainNight = document.createElement("div");
        mainNight.setAttribute("id", "main_night");
        mainNight.setAttribute("class", "section");
        let footer = document.getElementById("footer");
        document.body.insertBefore(mainNight, footer);
        let resultPart = document.createElement("div");
        resultPart.setAttribute("id", "nightly");
        mainNight.appendChild(resultPart);
        let headresultPart = document.createElement("h1");
        headresultPart.setAttribute("id", "Ende");
        headresultPart.innerHTML = "Was war heute erledigt";
        resultPart.appendChild(headresultPart);
        if (resultArr.length == 0) {
          let resultForm = document.createElement("form");
          resultForm.setAttribute("id", "zusammenfassung");
          resultPart.appendChild(resultForm);
          let fieldsetResult = document.createElement("fieldset");
          fieldsetResult.setAttribute("form", "zusammenfassung");
          resultForm.appendChild(fieldsetResult);
          let legendResult = document.createElement("legend");
          legendResult.innerHTML = "Faß die Erfolge des Tages";
          fieldsetResult.appendChild(legendResult);
          let labelResult = document.createElement("label");
          labelResult.setAttribute("for", "goalAchieved");
          labelResult.innerHTML = "Was hast du heute gemacht?";
          let inputResult = document.createElement("textarea");
          inputResult.setAttribute("id", "goalAchieved");
          inputResult.setAttribute("name", "goalAchived");
          let labelAchieved = document.createElement("label");
          labelAchieved.setAttribute("for", "succesAchieved");
          labelAchieved.innerHTML = "Was war damit erreicht?";
          let inputAchieved = document.createElement("textarea");
          inputAchieved.setAttribute("id", "successAchieved");
          inputAchieved.setAttribute("name", "successAchieved");
          let sendDailySuccess = document.createElement("input");
          sendDailySuccess.setAttribute("id", "sendDailySuccess");
          sendDailySuccess.setAttribute("type", "button");
          sendDailySuccess.setAttribute("class", "button");
          sendDailySuccess.setAttribute("value", "Senden");

          fieldsetResult.append(
            labelResult,
            inputResult,
            labelAchieved,
            inputAchieved,
            sendDailySuccess
          );
          sendDailySuccess.addEventListener("click", () => {
            let errorMessage = document.createElement("strong");
            inputAchieved.addEventListener("input", () => {
              errorMessage.remove();
            });

            if (document.getElementById("successAchieved").value !== "") {
              let successMessage = document.createElement("div");
              successMessage.setAttribute("id", "successMessage");
              let headSuccessMessage = document.createElement("h2");
              headSuccessMessage.innerHTML = "Deine Erfolge heute:";
              let listSuccess = document.createElement("ul");
              listSuccess.setAttribute("id", "listSuccess");
              let listPoint = document.createElement("li");
              listPoint.innerHTML = inputAchieved.value;
              listSuccess.appendChild(listPoint);
              let dailySuccessMessage = document.createElement("p");
              dailySuccessMessage.innerHTML =
                "Du hast heute viel geschafft. Deine Erfolge, selbst wenn sie klein scheinen, sind wertvoll. \
            Jetzt lass dich ausruhen. Mach etwas, was du besonders gern tust.";
              let headGoodBye = document.createElement("h2");
              headGoodBye.innerHTML = "Bis Morgen!";
              successMessage.append(
                headSuccessMessage,
                listSuccess,
                dailySuccessMessage,
                headGoodBye
              );
              resultPart.replaceChild(successMessage, resultForm);
            } else {
              errorMessage.innerHTML =
                "Bitte schreib, was du heute erreicht hat.  <br> <span> \
            Das muss nichts Grosses sein. Zum Beispiel, wenn du hast heute etwas gegessen, \
            hast du dich für dein Wohlbefinden gekümmert.<span/>";
              labelAchieved.insertAdjacentElement("afterend", errorMessage);
            }
          });
        } else {
          let finalForm = document.createElement("fieldset");
          finalForm.setAttribute("id", "finalForm");
          let legend = document.createElement("legend");
          legend.innerHTML =
            "Kreuz die Aufgaben an, die du heute erledigt hast";
          document.getElementById("nightly").appendChild(finalForm);
          let answers = document.createElement("div");
          finalForm.append(legend, answers);
          resultArr.forEach((result) => {
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "goalsAnswer");
            let checkboxLabel = document.createElement("label");
            checkboxLabel.setAttribute("for", result);
            checkboxLabel.innerHTML = result;
            answers.append(checkbox, checkboxLabel);
          });

          let button = document.createElement("input");
          button.setAttribute("id", "sendAchieved");
          button.setAttribute("type", "button");
          button.setAttribute("class", "button");
          button.setAttribute("value", "Weiter");
          finalForm.appendChild(button);
          button.addEventListener("click", () => {
            let arrResult = [];
            document.querySelectorAll(".goalsAnswer").forEach((el) => {
              if (el.checked) {
                arrResult.push(el.nextElementSibling.innerHTML);
                return arrResult;
              }
            });
            let resultForm = document.createElement("form");
            resultForm.setAttribute("id", "zusammenfassung");
            let fieldsetResult = document.createElement("fieldset");
            fieldsetResult.setAttribute("form", "zusammenfassung");
            resultForm.appendChild(fieldsetResult);
            let legendResult = document.createElement("legend");
            legendResult.innerHTML = "Faß die Erfolge des Tages zusammen";
            fieldsetResult.appendChild(legendResult);
            resultPart.replaceChild(resultForm, finalForm);

            if (arrResult.length == 0) {
              let labelResult = document.createElement("label");
              labelResult.setAttribute("for", "goalAchieved");
              labelResult.innerHTML = "Was hast du heute gemacht?";
              let inputResult = document.createElement("textarea");
              inputResult.setAttribute("id", "goalAchieved");
              inputResult.setAttribute("name", "goalAchived");
              let labelAchieved = document.createElement("label");
              labelAchieved.setAttribute("for", "succesAchieved");
              labelAchieved.innerHTML = "Was war damit erreicht?";
              let inputAchieved = document.createElement("textarea");
              inputAchieved.setAttribute("id", "successAchieved");
              inputAchieved.setAttribute("name", "successAchieved");
              let sendDailySuccess = document.createElement("input");
              sendDailySuccess.setAttribute("id", "sendDailySuccess");
              sendDailySuccess.setAttribute("type", "button");
              sendDailySuccess.setAttribute("class", "button");
              sendDailySuccess.setAttribute("value", "Senden");

              fieldsetResult.append(
                labelResult,
                inputResult,
                labelAchieved,
                inputAchieved,
                sendDailySuccess
              );
              sendDailySuccess.addEventListener("click", () => {
                let errorMessage = document.createElement("strong");
                inputAchieved.addEventListener("input", () => {
                  errorMessage.remove();
                });

                if (document.getElementById("successAchieved").value !== "") {
                  let successMessage = document.createElement("div");
                  successMessage.setAttribute("id", "successMessage");
                  let headSuccessMessage = document.createElement("h2");
                  headSuccessMessage.innerHTML = "Deine Erfolge heute:";
                  let listSuccess = document.createElement("ul");
                  listSuccess.setAttribute("id", "listSuccess");
                  let listPoint = document.createElement("li");
                  listPoint.innerHTML = inputAchieved.value;
                  listSuccess.appendChild(listPoint);
                  let dailySuccessMessage = document.createElement("p");
                  dailySuccessMessage.innerHTML =
                    "Du hast heute viel geschafft. Deine Erfolge, selbst wenn sie klein scheinen, \
                sind wertvoll. Jetzt lass dich ausruhen. Mach etwas, was du besonders gern tust.";
                  let headGoodBye = document.createElement("h2");
                  headGoodBye.innerHTML = "Bis Morgen!";
                  successMessage.append(
                    headSuccessMessage,
                    listSuccess,
                    dailySuccessMessage,
                    headGoodBye
                  );
                  resultPart.replaceChild(successMessage, resultForm);
                } else {
                  errorMessage.innerHTML =
                    "Bitte schreib, was du heute erreicht hat.  <br> <span> Das muss nichts Grosses sein. \
                Zum Beispiel, wenn du hast heute etwas gegessen, hast du dich für dein Wohlbefinden gekümmert.<span/>";
                  labelAchieved.insertAdjacentElement("afterend", errorMessage);
                }
              });
            } else {
              for (item of arrResult) {
                let labelResult = document.createElement("label");
                labelResult.setAttribute("for", `${item}`);
                labelResult.innerHTML = item;
                let labelAchieved = document.createElement("label");
                labelAchieved.setAttribute("for", "successAchieved");
                labelAchieved.innerHTML = "Was war damit erreicht?";
                let inputAchieved = document.createElement("textarea");
                inputAchieved.setAttribute("id", `successAchieved_${item}`);
                inputAchieved.setAttribute("class", "successAchieved");
                fieldsetResult.append(
                  labelResult,
                  labelAchieved,
                  inputAchieved
                );
              }
              let sendDailySuccess = document.createElement("input");
              sendDailySuccess.setAttribute("id", "sendDailySuccess");
              sendDailySuccess.setAttribute("type", "button");
              sendDailySuccess.setAttribute("class", "button");
              sendDailySuccess.setAttribute("value", "Senden");
              fieldsetResult.appendChild(sendDailySuccess);
              sendDailySuccess.addEventListener("click", () => {
                let errorMessage = document.createElement("strong");
                document.querySelectorAll(".successAchieved").forEach((el) =>
                  el.addEventListener("input", () => {
                    errorMessage.remove();
                  })
                );
                let arrSuccess = [];
                document.querySelectorAll(".successAchieved").forEach((el) => {
                  if (el.value !== "") {
                    arrSuccess.push(el.value);
                    return arrSuccess;
                  }
                });
                if (arrSuccess.length == 0) {
                  errorMessage.innerHTML =
                    "Bitte schreib, was du heute erreicht hat.  <br> <span> Das muss nichts Grosses sein. \
                Zum Beispiel, wenn du hast heute etwas gegessen, hast du dich für dein Wohlbefinden gekümmert.<span/>";
                  legendResult.insertAdjacentElement("afterend", errorMessage);
                } else {
                  let successMessage = document.createElement("div");
                  successMessage.setAttribute("id", "successMessage");
                  let headSuccessMessage = document.createElement("h2");
                  headSuccessMessage.innerHTML = "Deine Erfolge heute:";
                  let listSuccess = document.createElement("ul");
                  listSuccess.setAttribute("id", "listSuccess");

                  for (item of arrSuccess) {
                    let listPoint = document.createElement("li");
                    listPoint.innerHTML = item;
                    listSuccess.appendChild(listPoint);
                  }
                  let dailySuccessMessage = document.createElement("p");
                  dailySuccessMessage.innerHTML =
                    "Du hast heute viel geschafft. Deine Erfolge, selbst wenn sie klein scheinen, \
                sind wertvoll. Jetzt lass dich ausruhen. Mach etwas, was du besonders gern tust.";
                  let headGoodBye = document.createElement("h2");
                  headGoodBye.innerHTML = "Bis Morgen!";
                  successMessage.append(
                    headSuccessMessage,
                    listSuccess,
                    dailySuccessMessage,
                    headGoodBye
                  );
                  resultPart.replaceChild(successMessage, resultForm);
                }
              });
            }
          });
        }
      }

      buttonClicked = true;
      return buttonClicked;
    }
  }
}

const endPart = document.getElementById("endPart");
endPart.addEventListener("click", newFunction, { once: true });
let menuClicked = false;
let buttonClicked = false;

function newFunction() {
  if (buttonClicked == false) {
    let mainNight = document.createElement("div");
    mainNight.setAttribute("id", "main_night");
    mainNight.setAttribute("class", "section");
    let footer = document.getElementById("footer");
    document.body.insertBefore(mainNight, footer);
    let resultPart = document.createElement("div");
    resultPart.setAttribute("id", "nightly");
    mainNight.appendChild(resultPart);
    let headresultPart = document.createElement("h1");
    headresultPart.setAttribute("id", "Ende");
    headresultPart.innerHTML = "Was war heute erledigt";
    resultPart.appendChild(headresultPart);
    let resultForm = document.createElement("form");
    resultForm.setAttribute("id", "zusammenfassung");
    resultPart.appendChild(resultForm);
    let fieldsetResult = document.createElement("fieldset");
    fieldsetResult.setAttribute("form", "zusammenfassung");
    resultForm.appendChild(fieldsetResult);
    let legendResult = document.createElement("legend");
    legendResult.innerHTML = "Faß die Erfolge des Tages";
    fieldsetResult.appendChild(legendResult);
    let labelResult = document.createElement("label");
    labelResult.setAttribute("for", "goalAchieved");
    labelResult.innerHTML = "Was hast du heute gemacht?";
    let inputResult = document.createElement("textarea");
    inputResult.setAttribute("id", "goalAchieved");
    inputResult.setAttribute("name", "goalAchived");
    let labelAchieved = document.createElement("label");
    labelAchieved.setAttribute("for", "succesAchieved");
    labelAchieved.innerHTML = "Was war damit erreicht?";
    let inputAchieved = document.createElement("textarea");
    inputAchieved.setAttribute("id", "successAchieved");
    inputAchieved.setAttribute("name", "successAchieved");
    let sendDailySuccess = document.createElement("input");
    sendDailySuccess.setAttribute("id", "sendDailySuccess");
    sendDailySuccess.setAttribute("type", "button");
    sendDailySuccess.setAttribute("class", "button");
    sendDailySuccess.setAttribute("value", "Senden");

    fieldsetResult.append(
      labelResult,
      inputResult,
      labelAchieved,
      inputAchieved,
      sendDailySuccess
    );
    sendDailySuccess.addEventListener("click", () => {
      let errorMessage = document.createElement("strong");
      inputAchieved.addEventListener("input", () => {
        errorMessage.remove();
      });

      if (document.getElementById("successAchieved").value !== "") {
        let successMessage = document.createElement("div");
        successMessage.setAttribute("id", "successMessage");
        let headSuccessMessage = document.createElement("h2");
        headSuccessMessage.innerHTML = "Deine Erfolge heute:";
        let listSuccess = document.createElement("ul");
        listSuccess.setAttribute("id", "listSuccess");
        let listPoint = document.createElement("li");
        listPoint.innerHTML = inputAchieved.value;
        listSuccess.appendChild(listPoint);
        let dailySuccessMessage = document.createElement("p");
        dailySuccessMessage.innerHTML =
          "Du hast heute viel geschafft. Deine Erfolge, selbst wenn sie klein scheinen, sind wertvoll. \
          Jetzt lass dich ausruhen. Mach etwas, was du besonders gern tust.";
        let headGoodBye = document.createElement("h2");
        headGoodBye.innerHTML = "Bis Morgen!";
        successMessage.append(
          headSuccessMessage,
          listSuccess,
          dailySuccessMessage,
          headGoodBye
        );
        resultPart.replaceChild(successMessage, resultForm);
      } else {
        errorMessage.innerHTML =
          "Bitte schreib, was du heute erreicht hat.  <br> <span> Das muss nichts Grosses sein. \
          Zum Beispiel, wenn du hast heute etwas gegessen, hast du dich für dein Wohlbefinden gekümmert.<span/>";
        labelAchieved.insertAdjacentElement("afterend", errorMessage);
      }
    });
  }

  menuClicked = true;
  return menuClicked;
}
