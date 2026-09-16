function toggleFaq(qEl) {
  var item = qEl.closest('.faq-item');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) { item.classList.add('open'); }
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(e) {
  e.preventDefault();
  alert('送信ありがとうございます。確認メールをお送りいたします。');
}
