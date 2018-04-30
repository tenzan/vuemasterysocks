var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-white.jpg",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                vartiantId: 2234,
                variantColor: "green"
            },
            {
                vartiantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})