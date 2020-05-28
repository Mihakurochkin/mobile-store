// state

let products = [];
function setProducts(array) {
  products = array;
  update();
}

let loading = true;
function setLoading(value) {
  loading = value;
  update();
}

// update

function update() {
  $('#loader').css('display', loading ? 'block' : 'none')
}

// main code

$(() => {
  update();
  setTimeout(() => {
    setLoading(false)
  }, 1000);
});
