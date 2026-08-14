let products = [];

const productContainer = document.getElementById("products-container");

const getProductsData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=30");
    const data = await response.json();

    products = data.products;

    products.map((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.width = 150;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("h3");
        price.innerText = `$${product.price}`;

        const decrementbtn = document.createElement("button");
        decrementbtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "Add";

        const incrementbtn = document.createElement("button");
        incrementbtn.innerText = "+";

        let count = 0;

        incrementbtn.addEventListener("click", () => {
            count++;
            span.innerText = count;
        });

        decrementbtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
            }

            span.innerText = count === 0 ? "Add" : count;
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementbtn);
        div.appendChild(span);
        div.appendChild(incrementbtn);

        productContainer.appendChild(div);
    });
};

getProductsData();