import './assets/scss/all.scss';

console.log("Hello world!");

const len = 75;
const ellipsis = document.querySelectorAll('.ellipsis');
ellipsis.forEach((item) => {
  if(item.innerHTML.length > len) {
    let txt = item.innerHTML.substring(0, len) + '...';
    item.innerHTML = txt;
  }
})

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})