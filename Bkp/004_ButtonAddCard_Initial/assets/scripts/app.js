class Product {

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  
  addToCard(){
      console.log('Adding product to Card');
      console.log(this.product);
      
  }
  
  render() {
      
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCardButton = prodEl.querySelector('button');
    addCardButton.addEventListener ('click', this.addToCard.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Book',
      'https://douglasjpa.s3-sa-east-1.amazonaws.com/Update.png',
      'A book!',
      19.99
    ),
    new Product(
      'A Glass',
      'https://mypicturemusic.s3-sa-east-1.amazonaws.com/Find.png',
      'A Glass',
      89.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
