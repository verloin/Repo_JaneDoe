// $(function(){




// });

document.querySelectorAll('.modalbtn').forEach(function (element) {
  element.onclick = showModal;
});

function showModal() {
  document.querySelector('#modal-wrap').classList.toggle('modal-hide');
  document.querySelector('body').classList.toggle('backgroundBody');

}

