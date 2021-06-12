let data={
    "electronics":{
        "Accessories":{
            "Crucial RAM 8GB": {
                "price": "₹3,500.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/61gws-rVpiL._SL1127_.jpg"
            },
            "Crucial BX500 240GB 3D NAND SATA": {
                "price": "₹2,500.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/51HIx1CNZxL._SL1007_.jpg"
            },
            "Ant Esports VS500L Power Supply": {
                "price": "₹1,915.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/61jwEyAezuL._SL1100_.jpg"
            },
            "Pi+ (PiPlus) Latest VER009S": {
                "price": "₹949.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/61EHopPdFAL._SL1000_.jpg"
            },
            "Corsair Carbide Series": {
                "price": "₹3,550.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/61fpO6fmplL._SL1500_.jpg"
            }
        },
        "Printers":{
            "Epson L3152 WiFi": {
                "price": "₹13,699.00",
                "img_link": "https://images-na.ssl-images-amazon.com/images/I/51Jt5sNrY8L._SL1200_.jpg"
            }
        },
        "Tablets": {

        },
        "Laptops": {

        }
    }
};

function putItems() {
    let temp = data["electronics"];
    for (const tempKey in temp) {
        console.log(tempKey);
        let template=document.getElementsByTagName("template")[0];
        template.content.getElementById("category").innerHTML=tempKey;
        let element = template.content.cloneNode(true);
        document.getElementById("products").appendChild(element);
        for (const tempKeyKey in temp[tempKey]) {
            let itemTemplate=document.getElementsByTagName("template")[1];
            itemTemplate.content.getElementById("prod_name").innerHTML=tempKeyKey;
            itemTemplate.content.getElementById("img_src").src=temp[tempKey][tempKeyKey].img_link;
            itemTemplate.content.getElementById("prod_price").innerHTML=temp[tempKey][tempKeyKey].price;
            let element = itemTemplate.content.cloneNode(true);
            document.getElementById("products").appendChild(element);
        }


    }


}