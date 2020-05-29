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
  setTimeout(() => {
    setLoading(false);
    setProducts([
      {
        model: 'Galaxy S20',
        brand: 'Samsung',
        price: '27000грн',
        photo: 'https://i.citrus.ua/uploads/content/product-photos/topchiy/February-2020/SM-G980FLBDSEK_07.jpg'
      },
      {
        model: 'Galaxy S20',
        brand: 'Samsung',
        price: '27000грн',
        photo: 'https://i.citrus.ua/uploads/content/product-photos/topchiy/February-2020/SM-G980FLBDSEK_07.jpg'
      },
      {
        model: 'Iphone 11 pro max',
        brand: 'Apple',
        price: '40000грн',
        photo: 'https://i1.rozetka.ua/goods/14907250/copy_apple_iphone_11_pro_max_64gb_midnight_green_5dc04476dae58_images_14907250030.jpg'
      },
      {
        model: 'P Smart Z Blue',
        brand: 'Huawei',
        price: '5000грн',
        photo: 'https://i2.rozetka.ua/goods/12866306/huawei_p_smart_z_blue_images_12866306898.jpg'
      },
      {
        model: 'Iphone 11 pro max',
        brand: 'Apple',
        price: '40000грн',
        photo: 'https://i1.rozetka.ua/goods/14907250/copy_apple_iphone_11_pro_max_64gb_midnight_green_5dc04476dae58_images_14907250030.jpg'
      }
    ])
  }, 1000);
});
