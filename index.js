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
  $('#loader').css('display', loading ? 'block' : 'none');

  const container = $('#products');
  container.empty();

  products.forEach((product) => {
    container.append(`
      <div class="product">
        <img class="product-photo" src="${product.photo}" alt="">
        <div class="product-info">
          <h2>${product.model}</h2>
          <h2>${product.brand}</h2>
          <h2>${product.price}</h2>
        </div>
      </div>
    `);
  });
}

// main code

$(() => {
  update();
  $.get('http://localhost:3000/products', (array) => {
    setLoading(false);
    setProducts(array);
  });
});
