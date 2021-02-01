const productList = {
        products: [
        {
            'name':'Books',
            'imageUrl':'https://douglasjpa.s3-sa-east-1.amazonaws.com/Update.png',
            'price':'10.99',
            'description':'Write down your comments'
        },
        {
            'name':'Carpet',
            'imageUrl':'https://mypicturemusic.s3-sa-east-1.amazonaws.com/Find.png',
            'price':'15.99',
            'description':'To relaxing above it'
        }    
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className='product-list';
        for (const prod of this.products){
            const prodEl = document.createElement('li');
            //this name is good to get css style applied on creation
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2 ${prod.title}></h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to card</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();