var products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "data:image/jpeg;base64,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",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:   "data:image/jpeg;base64,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",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "data:image/jpeg;base64,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",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "data:image/jpeg;base64,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",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];

var allProducts = document.getElementById("all-products");
var cartNumber = document.getElementById("cart-number");

for (var i = 0; i < products.length; i++) {
  console.log("products==>", products[i]);

  var productElement = `<div class="lg:w-1/4 md:w-1/2 p-4 w-full border">
  <a class="block relative h-48 rounded overflow-hidden">
    <img
      alt="ecommerce"
      class="object-cover object-center w-full h-full block"
      src="${products[i].image}"
    />
  </a>
  <div class="mt-4">
    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
      ${products[i].category}
    </h3>
    <h2 class="text-gray-900 title-font text-lg font-medium">
      ${products[i].title}
    </h2>
    <div class = 'flex justify-between items-center w-full'>
    <p class="mt-1">$${products[i].price}</p>
    <button onclick = "addToCart(this)" class = 'btn outline border-primary px-4'>Add</button>
    </div>
    
  </div>
</div>`;

  allProducts.innerHTML += productElement;
}

function addToCart(element) {
  if (element.innerText == "Added") {
    cartNumber.innerText = cartNumber.innerText - 1;
    element.innerText = 'Add'
  } else {
    cartNumber.innerText = parseInt(cartNumber.innerText) + 1;
    element.innerText = 'Added'

  } 
}

