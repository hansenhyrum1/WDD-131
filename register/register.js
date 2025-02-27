import { participant, submitForm, totalFees } from "./template.js";

document.querySelector("#add").addEventListener("click", function () {
    participantCount++;
    const newParticipant = participant(participantCount);
    document.querySelector("#add").insertAdjacentHTML("beforebegin", newParticipant);
});

document.querySelector("form").addEventListener("submit", submitForm);
