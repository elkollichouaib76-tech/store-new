let products = JSON.parse(localStorage.getItem("products")) || [
{
id:"watch",
name:"ساعة فاخرة",
price:6000,
desc:"ساعة أنيقة وعصرية",
img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
id:"shoe",
name:"حذاء رياضي",
price:4500,
desc:"مريح للجري",
img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
}
];

function saveProducts(){
localStorage.setItem("products", JSON.stringify(products));
}
