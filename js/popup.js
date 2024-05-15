document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.createElement("div");
  popupContainer.className = "popup";

  const message = document.createElement("p");
  message.className="popup-message";
  message.innerHTML =
    "WELCOME TO OUR STORE.";

  const inputContainer = document.createElement("div");
  inputContainer.className="input-container";

  const inputField = document.createElement("input");
  inputField.className="input-text";
  inputField.type = "text";
  inputField.placeholder = "How can we help you?";

  const sendButton = document.createElement("button");
  sendButton.className="send-button";
  sendButton.innerHTML = "Submit";

  inputContainer.appendChild(inputField);
  inputContainer.appendChild(sendButton);


  popupContainer.appendChild(message);
  popupContainer.appendChild(inputContainer);

  document.body.appendChild(popupContainer);

  setTimeout(function () {
    popupContainer.style.display = "block";
  }, 1000);
});
