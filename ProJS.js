const btn = document.querySelector('.bar');
const btnIcon = document.querySelector('.bar i');
const Menub = document.querySelector('.drop');

btn.onclick = function (){
    Menub.classList.toggle('open');
    const isOpen = Menub.classList.contains('Open');

    btnIcon.classList = isOpen
    ?'fa-solid fa-x'
    :'fa-solid fa-bars';
}

let selectedAmount = 0;

function selectAmount(amount) {
  selectedAmount = amount;
  document.getElementById('customAmount').value = '';
  updateSelectedAmountDisplay();
}

function updateAmount() {
  const customAmount = document.getElementById('customAmount').value;
  selectedAmount = customAmount ? parseFloat(customAmount) : 0;
  updateSelectedAmountDisplay();
}

function updateSelectedAmountDisplay() {
  const display = document.getElementById('selectedAmountDisplay');
  display.textContent = `Selected Amount: $${selectedAmount}`;
}

function togglePaymentFields() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const creditCardSection = document.querySelector('.credit-card');

  if (paymentMethod === 'card') {
    creditCardSection.style.display = 'block';
  } else {
    creditCardSection.style.display = 'none';
  }
}

document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (selectedAmount <= 0) {
    alert('Please select or enter a valid donation amount.');
    return;
  }
  alert('Work in progress... Thank you for your patience.');
});