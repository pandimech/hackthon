var arr = [];
var b = 100;
async function getName() {
    try {
        const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const makeup = await res.json();
        const data = await makeup;

        function getStatus(x) {

            document.body.innerHTML = " ";
            but();
            for (var i = ((x - 1) * b); i < (b * x); i++) {
                var card = document.createElement('div');
                card.setAttribute('class', 'card col-sm-4')

                var card_head = document.createElement('div');
                card_head.setAttribute('class', 'card-header');
                card_head.style.background = "white";

                var h1 = document.createElement('h1');
                h1.setAttribute('class', 'name text-center');
                h1.innerHTML = `${data[i].brand}`

                var brand_image = document.createElement("div");
                brand_image.setAttribute('class', 'card-img text-center');

                var img = document.createElement('img');
                img.setAttribute('class', 'svg');
                img.src = `${data[i].image_link}`

                var brand_name = document.createElement('div');
                brand_image.setAttribute('class', 'card-body');

                var brandname = document.createElement('h3');
                brandname.setAttribute('class', 'ability text-center');
                brandname.innerHTML = `${data[i].name}`



                var brand_product_link = document.createElement('div');
                brand_product_link.setAttribute('class', 'paragraph text-center');
                brand_product_link.style.background = "white";

                var product_link = document.createElement('a');
                product_link.innerHTML = "Product link"
                product_link.setAttribute('href', `${data[i].product_link}`);

                var discri = document.createElement('div');
                discri.setAttribute('class', 'text-center');

                var discription = document.createElement('div');
                discription.innerText = `${data[i].description}`
                discription.style.overflow = "scroll"
                discription.style.width = "320px";
                discription.style.border = "2px solid black";
                discription.style.height = "150px";
                discription.style.background = "yellow";


                card_head.append(h1);
                brand_image.append(img);
                brand_name.append(brandname);
                brand_product_link.append(product_link)
                discri.append(discription)
                card.append(card_head, brand_image, brand_name, brand_product_link, discri);
                document.body.append(card);

            }

        }

        function but() {
            for (var j = 0; j <= (data.length / b) - 1; j++) {
                var a = document.createElement('button');
                a.setAttribute('class', 'col-sm-1')
                a.innerHTML = j + 1;
                document.body.appendChild(a);
                arr.push(a);
            }
            arr.forEach(element => {
                element.onclick = function() {
                    getStatus(element.innerHTML);
                }
            })
        }
        but()

    } catch (error) {
        console.error(error)
    }
}


getName();