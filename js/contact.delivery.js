function formValidator(form) {
    function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
      parent.classList.add("error");
      parent.append(errorLabel);
    }
  
    function removeError(input) {
      const parent = input.parentNode;
      if (parent.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        parent.classList.remove("error");
      }
    }
  
    function createSelectError(select, option) {
      const parentSelect = select.closest(".input-box");
      const errorLabelSelect = document.createElement("label");
      errorLabelSelect.classList.add("error-label");
      errorLabelSelect.textContent = option;
      parentSelect.classList.add("error");
      parentSelect.append(errorLabelSelect);
    }
  
    function removeSelectError(select) {
      const parentSelect = select.closest(".input-box");
      if (parentSelect.classList.contains("error")) {
        parentSelect.querySelector(".error-label").remove();
        parentSelect.classList.remove("error");
      }
    }
    function createDateError(dateInput, text) {
      const parentDate = dateInput.closest(".input-box");
      const errorLabelDate = document.createElement("label");
      errorLabelDate.classList.add("error-label");
      errorLabelDate.textContent = text;
      parentDate.classList.add("error");
      parentDate.append(errorLabelDate);
    }
  
    function removeDateError(dateInput) {
      const parentDate = dateInput.closest(".input-box");
      if (parentDate.classList.contains("error")) {
        parentDate.querySelector(".error-label").remove();
        parentDate.classList.remove("error");
      }
    }
  
    let result = true;
    const allInputs = form.querySelectorAll("input");
  
    for (const input of allInputs) {
      removeError(input);
      if (input.value === "") {
        createError(input, "The field is not filled!");
        result = false;
      }
    }
  
    const selectInput = form.querySelector("#choices");
    removeSelectError(selectInput);
    if (selectInput.value === "") {
      createSelectError(selectInput, "Select Water type!");
      result = false;
    }
  
    const dateInput = form.querySelector(".select-date");
    removeDateError(dateInput);
  
    if (!dateInput.value || dateInput.value === "2023-01-01") {
      createDateError(dateInput, "Select date!");
      result = false;
    }
    return result;
  }
  
  document
    .getElementById("add-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      const isValid = formValidator(this);
      if (isValid) {
        this.submit();
      }
    });
  