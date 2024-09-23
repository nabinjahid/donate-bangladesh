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
          document.getElementById('header').classList.add('backdrop-blur-lg')
          document.getElementById('nav').classList.remove('bg-[#F9F7F3]')
          document.getElementById('nav').classList.add('bg-[#F9F7F3]/30', 'backdrop-blur-lg')
     } else {
          document.getElementById('header').classList.remove('backdrop-blur-lg')
          document.getElementById('nav').classList.remove('bg-[#F9F7F3]/30', 'backdrop-blur-lg')
          document.getElementById('nav').classList.add('bg-[#F9F7F3]')
     }
})
// -----------------

// common function
function takeInputGiveOutput(inputId, stateId) {

     const inputVlue = parseFloat(document.getElementById(inputId).value);
     const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
     const remainingBalance = mainBalance - inputVlue;
     document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);


     const previousStateValue = parseFloat(document.getElementById(stateId).innerText)
     const newStateValue = previousStateValue + inputVlue;
     document.getElementById(stateId).innerText = newStateValue.toFixed(2);

     return document.getElementById(inputId).value = '';
}
// -----------------

document.getElementById('noakhali-donat-btn').addEventListener('click', function () {
     takeInputGiveOutput('noakhali-input', 'noakhali-amount-state');

})
document.getElementById('feni-donate-btn').addEventListener('click', function () {
     takeInputGiveOutput('feni-input','feni-amount-state');

})
document.getElementById('aid-donate-btn').addEventListener('click', function () {
     takeInputGiveOutput('aid-input','aid-amount-state');

})