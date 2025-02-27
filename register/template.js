let participantCount = 1;

export function participant(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
          `;
}

export function submitForm(event) {
    event.preventDefault()

    const totalFee = totalFees();
    const adultName = document.querySelector("#adult_name").value;
    const successMessage = successTemplate({ name: adultName, participants: participantCount, totalFee: totalFee });
    
    document.querySelector("#summary").innerHTML = successMessage;

    document.querySelector("form").style.display = "none";
    document.querySelector("#summary").style.display = "block";

    }

export function successTemplate(info) {
    return `
        <p id="success">Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFee} in Fees.</p>
    `;
}

export function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    
    let totalFees = 0;
    feeElements.forEach(element => {
        totalFees += parseFloat(element.value) || 0;
    });
    
    return totalFees;
}