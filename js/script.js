document.getElementById('buyNowButton').addEventListener('click', function() {
    var productInfo = {
        productId: 'SP001',
        productName: 'Máy in Laser HP',
        productPrice: 300
    };

    localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
    window.location.href = 'giohang.html';
});

var selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

if (selectedProduct) {
    document.getElementById('productId').textContent = selectedProduct.productId;
    document.getElementById('productName').textContent = selectedProduct.productName;
    document.getElementById('productPrice').textContent = selectedProduct.productPrice;
}
