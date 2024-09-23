// home page to blog page
document.getElementById('blog-page').addEventListener('click', function () {
     location.href = "blog.html";
})
// -------------


// change button style when active
document.getElementById('history').addEventListener('click', function () {
     const donationBtn = document.getElementById('donation')
     donationBtn.classList.remove('btn-info')
     document.getElementById('history').classList.add('btn-info')

     const cartDiv = document.getElementById('cart-container')
     cartDiv.classList.add('hidden')
     document.getElementById('donation-history').classList.remove('hidden')
})

document.getElementById('donation').addEventListener('click', function () {
     const historyBtn = document.getElementById('history')
     historyBtn.classList.remove('btn-info')
     document.getElementById('donation').classList.add('btn-info')

     const historyDiv = document.getElementById('donation-history')
     historyDiv.classList.add('hidden')
     document.getElementById('cart-container').classList.remove('hidden')
})
// --------------------

// header section stiky top and bg blur
window.addEventListener('scroll', function () {
     if (window.scrollY > 50) {
          document.getElementById('header').classList.add('bg-[#F9F7F3]/60', 'backdrop-blur-lg')
          document.getElementById('nav').classList.remove('bg-[#F9F7F3]')
     } else {
          document.getElementById('header').classList.remove('bg-[#F9F7F3]/60', 'backdrop-blur-l6')
          document.getElementById('nav').classList.add('bg-[#F9F7F3]')
     }
})
// -----------------

// common function
function takeInputGiveOutput(inputId, stateId, name, btn) {

     const inputVlue = parseFloat(document.getElementById(inputId).value);
     console.log(typeof inputVlue);


     if (isNaN(inputVlue) || inputVlue < 0) {
          alert('Invalid Donation amount')
          return document.getElementById(inputId).value = '';
     }

     const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
     const remainingBalance = mainBalance - inputVlue;
     document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);


     const previousStateValue = parseFloat(document.getElementById(stateId).innerText)
     const newStateValue = previousStateValue + inputVlue;
     document.getElementById(stateId).innerText = newStateValue.toFixed(2);

     // creating history div
     const historyContainer = document.getElementById('donation-history')
     const div = document.createElement('div');
     let updateTime = new Date().toUTCString();

     div.innerHTML = `
          <h1 class="font-bold text-xl">${inputVlue} BDT is donated for ${btn === 'aid-donate-btn'?'Aid for Injured in the' :'flood donation in'} ${name} , Bangladesh</h1>
                <p>${updateTime}</p>
     `;
     div.classList.add('border', 'rounded-lg', 'p-4', 'space-y-3')
     historyContainer.appendChild(div);



     document.getElementById(inputId).value = ''
     return success.showModal();
}
// -----------------

document.getElementById('noakhali-donat-btn').addEventListener('click', function () {
     takeInputGiveOutput('noakhali-input', 'noakhali-amount-state', 'Noakhali', 'noakhali-donat-btn');

})
document.getElementById('feni-donate-btn').addEventListener('click', function () {
     takeInputGiveOutput('feni-input', 'feni-amount-state', 'Feni', 'feni-donate-btn');

})
document.getElementById('aid-donate-btn').addEventListener('click', function () {
     takeInputGiveOutput('aid-input', 'aid-amount-state', 'Quota Movement', 'aid-donate-btn');

})