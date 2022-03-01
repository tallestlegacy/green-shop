green shop

## Data Structure

```graphql
{
    user :  {
        _id
        first_name
        last_name
        email # this acts as a unique identifier for logins
        password
        tel

        favorites : [
            {
                product_id # this is the ID of a product : regardless of availability
            }
        ]
    }

    product : {
        _id
        name
        description
        image

        type # plant or animal
        category # grains, legumes, livestock, dairy ...
        seller_id

        quantity # quantity in units
        price

        date # date it was posted
    }

    transaction : {
        _id
        product_id
        buyer_id
        seller_id
        quantity
        date_purchaced
    }

}

```

## Business Logic

Every user can buy or sell without applying

A seller posts a product with a specified number of units (kilos for plant produce, number for plants)  
Sellers can update the units of any given product

When a buyer makes an order, they pay upfront; creating a transaction record with a date and other details. They can specify the quantity they want to purchace, thus updating the availale quantity in the product object

Buyers can view all their past purchaces  
Sellers can view all their past sales

## Views

### Buyer

1. **Shop** - Available Goods
2. **Product Details** - View and purchace a product
3. **Transactions** - View all purchaces

### Seller

1. **Stock** - Show available stock and add new stock
2. **Product Details** - Create or update product data
3. **Transactions** - View all sales
