We are creating the one ecommerce app so on this we are doing the 
design like

on the top we have navbar in the nav bar we have logo our brand name amazonone and one search bar

in the down we add the three section where we have popular , newRelease, best release.

and in the down we add the categories section and each categories we have products so first category name and down products list with see All



const raw = "";

const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow"
};

fetch("localhost:4040/api/product?page=1&limit=25&isPopular&search=shoes&bestSeller&newRelease", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

{
    "statusCode": 200,
    "data": [
        {
            "_id": "690ccea9fd79b2f16e2a79a2",
            "title": "Puma Mens Dazzler Sneaker",
            "asin": "B09RFYKC8D",
            "category": [
                {
                    "_id": "690cc6c6fd79b2f16e2a795d",
                    "name": "Shoes"
                }
            ],
            "brand": "Puma",
            "price": {
                "current": 1549,
                "original": 3999,
                "discount": 61
            },
            "rating": {
                "average": 3.9,
                "count": 8431
            },
            "features": [
                "Designed for daily runs, gym sessions, and casual outings, offering versatile athletic performance.",
                "Breathable mesh upper ensures optimal airflow, keeping feet cool and comfortable during activities.​",
                "Durable rubber outsole offers excellent traction and stability on various surfaces",
                "Sleek low-top silhouette with subtle PUMA branding, suitable for both athletic and casual wear.",
                "Synthetic and mesh upper allows for easy cleaning; wipe with a clean, dry cloth to maintain appearance."
            ],
            "imageUrls": [
                "https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/61fq-MWtlQL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/51kds4MT7PL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/51+6bP+lPEL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/616ySt2pW8L._SY695_.jpg"
            ],
            "affiliateUrl": "https://amzn.to/4oQh628",
            "availability": true,
            "tags": [
                "shoes"
            ],
            "deletedAt": null,
            "createdAt": "2025-11-06T16:36:57.686Z",
            "updatedAt": "2025-11-07T15:30:33.153Z",
            "__v": 0,
            "isPopular": true
        },
        {
            "_id": "690cce0d7ef065b59722de73",
            "title": "Puma Mens Dazzler Sneaker",
            "asin": "B09RFYKC8D",
            "category": [
                {
                    "_id": "690cc6c6fd79b2f16e2a795d",
                    "name": "Shoes"
                }
            ],
            "brand": "Puma",
            "price": {
                "current": 1549,
                "original": 3999,
                "discount": 61
            },
            "rating": {
                "average": 3.9,
                "count": 8431
            },
            "features": [
                "Designed for daily runs, gym sessions, and casual outings, offering versatile athletic performance.",
                "Breathable mesh upper ensures optimal airflow, keeping feet cool and comfortable during activities.​",
                "Durable rubber outsole offers excellent traction and stability on various surfaces",
                "Sleek low-top silhouette with subtle PUMA branding, suitable for both athletic and casual wear.",
                "Synthetic and mesh upper allows for easy cleaning; wipe with a clean, dry cloth to maintain appearance."
            ],
            "imageUrls": [
                "https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/61fq-MWtlQL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/51kds4MT7PL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/51+6bP+lPEL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/616ySt2pW8L._SY695_.jpg"
            ],
            "affiliateUrl": "https://amzn.to/4oQh628",
            "availability": true,
            "tags": [
                "shoes"
            ],
            "deletedAt": null,
            "updatedAt": "2025-11-06T16:44:54.403Z",
            "createdAt": "2025-11-06T16:36:57.686Z"
        }
    ],
    "isNextPageAvailble": false,
    "message": "Products fetched successfully"
}


=== above API use for the get product popular and another two section and fetch 10 records.



const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("localhost:4040/api/category/products", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


{
    "statusCode": 200,
    "data": [
        {
            "_id": "690a268ff344aa7f853c1f69",
            "name": "Electornics",
            "deletedAt": null,
            "createdAt": "2025-11-04T16:15:11.959Z",
            "updatedAt": "2025-11-04T16:15:11.959Z",
            "__v": 0,
            "products": [
                {
                    "_id": "690a2c36f01f0d11f4394af3",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ],
                    "isPopular": true
                },
                {
                    "_id": "690a2c25f01f0d11f4394abd",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 4.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c2bf01f0d11f4394ad2",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c27f01f0d11f4394ac6",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c2df01f0d11f4394ad5",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c2af01f0d11f4394acf",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c26f01f0d11f4394ac3",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c28f01f0d11f4394ac9",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2bd7f01f0d11f4394aba",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                },
                {
                    "_id": "690a2c26f01f0d11f4394ac0",
                    "title": "GOBOULT K40 True Wireless in Ear Earbuds with 48H Playtime, Clear Calling 4 Mics, 45ms Low Latency Gaming, Premium Grip, 13mm Bass Drivers, Type-C Fast Charging, BTv 5.3 Ear Buds TWS (Ivory White)",
                    "brand": "GOBOULT",
                    "price": {
                        "current": 899,
                        "original": 2999,
                        "discount": 70
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8408
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/71+Tba1MeJL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41He0mQDPxL._AA50_.jpg",
                        "https://m.media-amazon.com/images/I/515E81bgASL._AA50_.jpg"
                    ],
                    "tags": [
                        "GOBOULT",
                        "Wireless in Ear Earbuds"
                    ]
                }
            ]
        },
        {
            "_id": "690cc6c6fd79b2f16e2a795d",
            "name": "Shoes",
            "deletedAt": null,
            "createdAt": "2025-11-06T16:03:18.543Z",
            "updatedAt": "2025-11-06T16:03:18.543Z",
            "__v": 0,
            "products": [
                {
                    "_id": "690ccea9fd79b2f16e2a79a2",
                    "title": "Puma Mens Dazzler Sneaker",
                    "brand": "Puma",
                    "price": {
                        "current": 1549,
                        "original": 3999,
                        "discount": 61
                    },
                    "rating": {
                        "average": 3.9,
                        "count": 8431
                    },
                    "imageUrls": [
                        "https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg",
                        "https://m.media-amazon.com/images/I/61fq-MWtlQL._SY695_.jpg",
                        "https://m.media-amazon.com/images/I/51kds4MT7PL._SY695_.jpg",
                        "https://m.media-amazon.com/images/I/51+6bP+lPEL._SY695_.jpg",
                        "https://m.media-amazon.com/images/I/616ySt2pW8L._SY695_.jpg"
                    ],
                    "tags": [
                        "shoes"
                    ],
                    "isPopular": true
                }
            ]
        }
    ],
    "message": "Category fetched successfully"
}

this will use for category