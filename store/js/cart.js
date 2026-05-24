function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  let total = 0;

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="color:#e2e8f0;text-align:center;padding:32px;">' + (typeof t === 'function' ? t('cart.empty') : 'Your cart is empty') + '</p>';
    if (totalEl) totalEl.textContent = '0';
    return;
  }

  container.innerHTML = cart.map(function(item) {
    const itemTotal = item.totalPrice || item.finalPrice || item.total || 0;
    total += itemTotal;
    const optionsHtml = (item.selectedOptions || []).map(function(opt) {
      const question = opt.question || (opt.step && (opt.step.en || opt.step)) || '';
      const answer = opt.answer || (opt.option && (opt.option.name && opt.option.name.en || opt.option.name)) || '';
      return '<p style="color:#94a3b8;font-size:14px;margin-bottom:4px;">' + question + ': ' + answer + '</p>';
    }).join('');

    const discount = item.discountPercentage || 0;
    var priceHTML;
    if (discount > 0) {
      priceHTML = '<span style="text-decoration:line-through;color:#6B7280;font-size:14px;">AED ' + (item.originalPrice || itemTotal).toLocaleString() + '</span> <span style="color:#D4AF37;font-weight:bold;font-size:18px;">AED ' + itemTotal.toLocaleString() + '</span> <span style="background:#D4AF37;color:#0A192F;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:bold;">' + discount + '% OFF</span>';
    } else {
      priceHTML = '<span style="color:#D4AF37;font-weight:bold;font-size:18px;">AED ' + itemTotal.toLocaleString() + '</span>';
    }

    return '<div style="background:rgba(17,34,64,0.6);border:1px solid rgba(212,175,55,0.2);border-radius:16px;padding:24px;margin-bottom:24px;transition:all 0.3s;" onmouseover="this.style.borderColor=\'#D4AF37\';this.style.transform=\'translateY(-4px)\'" onmouseout="this.style.borderColor=\'rgba(212,175,55,0.2)\';this.style.transform=\'translateY(0)\'">' +
      '<div style="margin-bottom:16px;">' +
        '<h4 style="font-size:20px;font-weight:700;color:white;margin-bottom:12px;">' + (item.serviceName && item.serviceName.en || item.serviceName || item.name || 'Service') + '</h4>' +
        optionsHtml +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid rgba(212,175,55,0.15);">' +
        '<div>' + priceHTML + '</div>' +
        '<button style="background:linear-gradient(135deg,#D4AF37,#C4A035);color:#0A192F;font-weight:bold;min-height:44px;padding:10px 24px;border-radius:12px;border:none;cursor:pointer;transition:all 0.3s;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'" onclick="removeFromCart(\'' + (item.cartItemId || item.id) + '\')">Remove</button>' +
      '</div>' +
    '</div>';
  }).join('');

  if (totalEl) totalEl.textContent = 'AED ' + total.toLocaleString();
}

function removeFromCart(cartItemId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(function(item) { return (item.cartItemId || item.id) != cartItemId; });
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function setOrderStatus(message, isError) {
  const statusEl = document.getElementById('order-status');
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#ef4444' : '#e2e8f0';
}

document.addEventListener('DOMContentLoaded', function() {
  renderCart();

  const form = document.getElementById('order-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      e.preventDefault();
      alert(typeof t === 'function' ? t('order.empty-cart') : 'Your cart is empty!');
      return;
    }

    const name = document.getElementById('order-name').value;
    const email = document.getElementById('order-email').value;
    const phone = document.getElementById('order-phone').value;
    const notes = document.getElementById('order-notes').value;

    if (!name || !phone) {
      e.preventDefault();
      alert(typeof t === 'function' ? t('order.required') : 'Please enter name and phone');
      return;
    }

    let orderDetails = 'NEW ORDER RECEIVED\n\n';
    orderDetails += 'Client: ' + name + '\n';
    orderDetails += 'Phone: ' + phone + '\n';
    orderDetails += 'Email: ' + (email || 'N/A') + '\n';
    orderDetails += 'Notes: ' + (notes || 'N/A') + '\n\n';
    orderDetails += 'ORDER DETAILS:\n';

    let orderTotal = 0;
    cart.forEach(function(item, index) {
      const serviceNameEn = item.serviceName && item.serviceName.en || item.serviceName || item.name || 'Service';
      const itemTotal = item.totalPrice || item.total || 0;
      orderDetails += '\n' + (index + 1) + '. ' + serviceNameEn + '\n';
      orderDetails += '   Price: AED ' + itemTotal.toLocaleString() + '\n';
      orderDetails += '   Options:\n';
      (item.selectedOptions || []).forEach(function(opt) {
        const question = opt.question || (opt.step && (opt.step.en || opt.step)) || '';
        const answer = opt.answer || (opt.option && (opt.option.name && opt.option.name.en || opt.option.name)) || '';
        orderDetails += '   - ' + question + ': ' + answer + '\n';
      });
      orderTotal += itemTotal;
    });

    orderDetails += '\nTotal: AED ' + orderTotal.toLocaleString() + '\n';

    const aiPrompt = window.generateAIPrompt ? window.generateAIPrompt(name, email, phone, notes, cart) : '';

    var orderDetailsField = document.getElementById('order-details-field');
    var aiPromptField = document.getElementById('ai-prompt-field');
    var replytoField = document.getElementById('replyto-field');

    if (orderDetailsField) orderDetailsField.value = orderDetails;
    if (aiPromptField) aiPromptField.value = aiPrompt;
    if (replytoField) replytoField.value = email;

    setOrderStatus(typeof t === 'function' ? t('order.sending') : 'Sending order...', false);
  });
});
