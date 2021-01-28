const newTransaction = document.querySelector(".button.new")
const modalOverlay = document.querySelector(".modal-overlay")
const btnCancel = document.querySelector(".button.cancel")
const btnSave = document.querySelector(".button.save")
const txtDate = document.querySelector("#month")

// Load a intial date
window.addEventListener("load", event => {

  const date = new Date();
  const month = date.getMonth() < 10 ? (date.getMonth() + 1) : date.getMonth();
  const year = date.getFullYear();

  txtDate.value = `${year}-0${month}`
})

// Click Events of buttons

// To open the form for insert a new transaction
newTransaction.addEventListener("click", event => {
  modalOpen();
});

// To cancel a new transaction
btnCancel.addEventListener("click", event => {
  modalClose();
});

btnSave.addEventListener("click", event => {
  event.preventDefaut;
  saveTransactions()
})


// Function to add the class active on modal-overlay
function modalOpen() {
  modalOverlay.classList.add("active")
}

// Function to remove the class active of modal-overlay
function modalClose() {

  const descInput = document.querySelector("#description")
  const amountInput = document.querySelector("#amount")
  const dateInput = document.querySelector("#date")

  // Remove Class active from modal-overlay
  modalOverlay.classList.remove("active")

  // To clean the inputs content
  descInput.value = ""
  amountInput.value = ""
  dateInput.value = ""
}

function saveTransactions() {
  const descInput = document.querySelector("#description")
  const amountInput = document.querySelector("#amount")
  const dateInput = document.querySelector("#date")


}
