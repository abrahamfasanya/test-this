import {products} from './first.js';

console.log(products)



function showAvailableProd () {
  [
       {
       name: "Rice",
       description: "This is a description on rice",
       stock: 560,
       price: 1200,
       sku: "1425i2234tjm423",
       image: "https://www.royacshop.com/wp-content/uploads/2017/12/Ghana-rice.jpeg",
       id: 1233520801,
       showIfSoldOut: false,
       isSoldOut: false,
       owner: {
         firstname: "Femi",
         lastname: "Seun",
         email: "gt@ht.com",
         isEmailVerified: false,
         companyName: "gateway",
         isAdmin: false,
         id: 1454512345010,
         toothpaste : 57,
         gala : 56,
         biscuit : crackers,
         class : 2020,
       }
     },
   ]

   return [toothpaste,gala,biscuit ]

  }


 showAvailableProd = () => {
   [
        {
        name: "Rice",
        description: "This is a description on rice",
        stock: 560,
        price: 1200,
        sku: "1425i2234tjm423",
        image: "https://www.royacshop.com/wp-content/uploads/2017/12/Ghana-rice.jpeg",
        id: 1233520801,
        showIfSoldOut: false,
        isSoldOut: false,
        owner: {
          firstname: "Femi",
          lastname: "Seun",
          email: "gt@ht.com",
          isEmailVerified: false,
          companyName: "gateway",
          isAdmin: false,
          id: 1454512345010,
          toothpaste : 57,
          gala : 56,
          biscuit : crackers,
          class : 2020,
        }
      },
    ]

    return [toothpaste,gala,biscuit ];

}
   
 increaseStockCount = ( productId, OwnerId, [{ toothpaste, gala, biscuit }]) => {

  return [{ toothpaste, gala, biscuit}];
 }

 owner = (admin) => {

  if (admin) {
    return "You are an admin";
  } else {
    return "Sorry you are not an admin. You cannot edit this product";
  }
   
 }