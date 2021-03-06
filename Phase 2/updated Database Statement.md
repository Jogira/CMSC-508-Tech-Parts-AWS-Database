                                               CMSC 508 Database Problem Proposal
## Problem Statement:
This database will be used to determine which tech websites are offering the best deals for
tech and tech peripherals. When considering what components a user is going to build their
computer with or what phone is worth buying, it is ideal to take into account many more
factors than just the piece itself. For instance, a user might want to buy a set of two 8GB
DDR4 RAM sticks at the lowest price possible without skipping out on quality. While there
may be many 8GB sticks in roughly the same price range, to assure the user that they will
still get the most cost efficient choice, they will have to consider if the brand they are
buying is trustworthy and decently well known, alongside which websites are selling at the
lowest price. It is risky to buy blindly, but utilizing the database would allow the user to
compare two different 8GB sets and determine which is more likely to be worth their
money by comparing which brand has better overall statistics, like RAM speed or voltage.
On the other end, this database could also be used to help vendors, as they would be able to
view the historical prices of individual components throughout the years. Tracking the price
history of pieces would allow the vendor to know what would be a decent price to set a
product to, as to not scare away customers with prices that are much higher than
competitors’ while also not selling at prices that are too low to profit off of. Additionally,
businesses that buy in bulk to stock their own shelves would be able to analyze trends in the
fluctuations of prices. For example, a business recognizing that GPUs tend to spike in price
right before the holidays would allow them to stock up on GPUs and sell them to turn over
a profit.
Being able to monitor the tech market and find most opportune time to make purchases or
sell supplies is invaluable in today’s highly competitive industry. A database that tracks the
price history of items across websites, filters products by specific attributes, compares
products using set qualities, and lists important data (such as release dates, stock, and
availability via location) would give users an extra edge on where to buy and sell from.
Therefore, the primary user groups for this database would consist of the following:

• Vendors: Sell products to both normal customers and businesses, while providing
the bulk of components. Vendors will update the database with their listings, stock,
release dates, compatibility data, and information such what their prices are for
selling in bulk. They will also use the current price trends to determine what a good
price is to sell their parts at. This benefits both the customer and vendor, as
customers get fair prices, while the vendor also gets more sales from having an a
fair price range.

• Businesses: Will mostly buy from vendors in bulk to replenish their own
storefronts. Businesses will also benefit from the historical prices by getting insight
on when it is an opportune time to buy pieces in bulk. Knowing the historical highs
and lows of a piece means they can accurately predict the best prices to turn profit
with. Businesses may also use the database to list assembled products and the 
various websites that they sell their products on. For example, Alienware may be
sold on their official website, but listing that Alienware can also be bought from
Amazon stores as well would give Alienware a farther reach and different shipping
locations.

• Users: Benefit from being able to use the database to efficiently search for specific
products and compare products to see what will yield the best value. The user will
be able to narrow down the search filter to multiple levels to compare the exact
specifications they want to. For example, they can search for RAM to list all RAM
sets, but then narrow it down to show RAM from a certain vendor’s website only. It
can be narrowed down even further by filtering the search to show RAM under a
certain price, and narrowed down once again by only showing website results for
vendors that have locations near the user to reduce shipping costs. Users in turn
regulate the prices of pieces indirectly by buying pieces only when they are in a
range they see fit. This forms an automated and self-maintained quality control
system over the database and lets businesses or vendors know what are the most
reasonable prices.

## In order for this to all function together, the database requires the following entity sets:
• Websites/Vendors

• Monitors

• Keyboards

• Phones

• Motherboards

• Storage (Hard drives)

• Memory

• CPUs

• Warehouses

• Item

• Stock

And to maintain database the database should be able to undergo changes such as:

• Grab new websites and their listings.

• Delete any links to websites that are no longer functional or too dated.

• Update data to already existing listings.

• Add new tags for filtering out certain websites or components.

• Update the dates when pieces go on sale and when they return to normal prices.

• Update information about what warehouses have what items, along with the stock for
each website and their respective websites/vendors.

## The database could be used to find solutions for plenty of queries, such as:
1. What is the current price for this item?
2. What is the lowest price for this product across all vendor websites?
3. List the names of keyboards and monitors that share the same color.
4. What is the highest price historically for this item, on a certain vendor website?
5. List all item IDs of a certain component that are currently priced above a price threshold
and have a certain number of stock left in a specific warehouse.
6. Does this vendor have this item in stock?
7. List all items available in a product line on a vendor site.
8. What items are currently sold by this manufacturer?
9. List all items under a certain price under a component category, across all vendor sites.
10. What motherboards are compatible with this CPU? (matching chipset)
11. List all the memory + corresponding prices on a site that are at least 8GB.
12. What is the location of the warehouse where this item is located?
13. What sites have free shipping available for this product?
14. Which SSDs on this site are currently on sale?
15. What devices are compatible with my carrier?
16. What devices run on Android 11?
17. List all products currently on sale by a specific company that have never had a
historical high that surpassed a price threshold and has never fallen below a certain price
threshold.
18. What phones were released so far this year?
19. What is the most-outdated hard-drive that is still in stock in this warehouse?
20. What are the 5 most expensive monitors from this brand? 
