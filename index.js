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

}

// main code

$(() => {
  $('#header').css('background', 'red')
});
