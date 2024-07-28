const API_URL = 'https://abc.execute-api.eu-north-1.amazonaws.com/prod';

async function createProduct() {
    const productId = document.getElementById('create-product-id').value;
    const productName = document.getElementById('create-product-name').value;
    const price = document.getElementById('create-product-price').value;
    const color = document.getElementById('create-product-color').value;
    const inventory = document.getElementById('create-product-inventory').value;

    const product = {
        productId,
        productName,
        price: parseFloat(price),
        color,
        inventory: parseInt(inventory, 10)
    };

    const response = await fetch(`${API_URL}/product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });

    const data = await response.json();
    alert('Product created successfully!');
    console.log(data);
}

async function updateProduct() {
    const productId = document.getElementById('update-product-id').value;
    const updateKey = document.getElementById('update-key').value;
    const updateValue = document.getElementById('update-value').value;

    const updateData = {
        productId,
        updateKey,
        updateValue: isNaN(updateValue) ? updateValue : parseFloat(updateValue)
    };

    const response = await fetch(`${API_URL}/product`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });

    const data = await response.json();
    alert('Product updated successfully!');
    console.log(data);
}

async function deleteProduct() {
    const productId = document.getElementById('delete-product-id').value;

    const response = await fetch(`${API_URL}/product`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
    });

    const data = await response.json();
    alert('Product deleted successfully!');
    console.log(data);
}

async function getProduct() {
    const productId = document.getElementById('get-product-id').value;

    const response = await fetch(`${API_URL}/product?productId=${productId}`);
    const product = await response.json();

    document.getElementById('product-details').innerText = JSON.stringify(product, null, 2);
}

async function getAllProducts() {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();

    document.getElementById('all-products').innerText = JSON.stringify(data.products, null, 2);
}
