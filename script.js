
document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById("ticket-confirm").style.display = 'flex';  
})

document.getElementById("exit-sing").addEventListener('click', function () {
    document.getElementById("ticket-confirm").style.display = 'none'; 
})
//  add value and minus value
document.getElementById('first-class-rise').addEventListener('click', function () {
    handleTicketChange('first-class', true);  
})
document.getElementById('first-class-fall').addEventListener('click', function () {
    handleTicketChange('first-class', false);  
})
document.getElementById('economy-class-rise').addEventListener('click', function () {
    handleTicketChange('economy', true);  
})
document.getElementById('economy-class-fall').addEventListener('click', function () {
    handleTicketChange('economy', false); 
})

document.getElementById('first-class-count').value = 0;
document.getElementById('economy-count').value = 0;
document.getElementById('subtotal-amount').innerText = '$' + 0;
document.getElementById('vat-amount').innerText = '$' + 0;
document.getElementById('total-amount').innerText = '$' + 0;


document.getElementById('first-class-ticket').innerText = 0;
document.getElementById('economy-ticket').innerText = 0;
document.getElementById('total-bill').innerText = '$' + 0;

