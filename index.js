// home page to blog page
document.getElementById('blog-page').addEventListener('click', function(){
     location.href = "blog.html";
})
// -------------


// change button style when active
document.getElementById('history').addEventListener('click', function(){
     const donationBtn = document.getElementById('donation')
     donationBtn.classList.remove('btn-info')
     document.getElementById('history').classList.add('btn-info')

     const cartDiv = document.getElementById('cart-container')
     cartDiv.classList.add('hidden')
     document.getElementById('donation-history').classList.remove('hidden')
})

document.getElementById('donation').addEventListener('click', function(){
     const historyBtn = document.getElementById('history')
     historyBtn.classList.remove('btn-info')
     document.getElementById('donation').classList.add('btn-info')

     const historyDiv = document.getElementById('donation-history')
          historyDiv.classList.add('hidden')
          document.getElementById('cart-container').classList.remove('hidden')
})
// --------------------

// header section stiky top and bg blur



