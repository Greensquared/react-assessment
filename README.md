# Getting started

1. Fork the repo and install the packages in the project
2. Import the quotes.json
3. Create an overview page for the customer to bqe able to see the different quotes from DEB that they can have installed in their house:

- Must show the quotes separately with
- Must show the relevant information for an overview (not necessarily every piece of data)
- Must be clear and concise
- Must have a control at the top to sort the quotes by:
  - Date created (`created`)
  - Expiration date (`expirationDate`)
  - Total price (`items.retailPrice`)
- Should call for people to accept one or more quotes
- Can use placeholder images for product photos (e.g. https://placem.at/)

4. Use version control as you would in a normal project. Push your changes to a new branch (name it how you like).
5. When you are finished we will pull, install and run the project - so make sure that it can run when you push your final version!

## Notes

- Feel free to use any libraries that you wish when building the page
- Keep it simple - this isn’t meant to take you all night. Spend max 3 hours and focus on a clean overview instead of lots of complex features.
- The design can be anything you like. You can use the DEB style and colour scheme if you like, but feel free to use whichever design patterns that you feel appropriate.

## Data structure

There is an array of quotes which have relevant data, and each has an array of items, which represents the products on the quote.
In the `energyDelta` object on the quote, you can find the savings to be made by installing the offered products.

```
[
  {
    ...quoteData,
    items: [
      product: { ...productData }
    ]
    energyDelta: { ...savingsCalculationsData }
  },
]
```
