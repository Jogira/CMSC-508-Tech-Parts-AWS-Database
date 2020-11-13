-- 1) What is the current price for a item?
SELECT price FROM Item WHERE itemID = 6008 ;

-- 2) What is the lowest price for this product across all vendor websites?
SELECT MIN(currentPrice) FROM stock JOIN Item ON Item.itemID = stock.itemID  WHERE itemID = 6008 ;

-- 3) List the names of keyboards and monitors that share the same color.
SELECT itemName FROM keyboard JOIN monitor WHERE keyboard.color = monitor.color ;

-- 4)  What is the highest price historically for this item, on a certain vendor website?
SELECT historicalHigh FROM stock JOIN warehouses ON stock.warehouseID = warehouses.warehouseID WHERE warehouses.url = 'amazon.com' AND itemID = 4010 ;

-- 5) List all item IDs of a certain component that are currently priced above a price threshold and have a certain number of stock left in a specific warehouse.
SELECT itemID FROM memory JOIN Item, stock ON memory.itemID = Item.itemID WHERE stock.itemID = Item.itemID AND warehouseID = 209 ;

-- 6) Does this vendor have this item in stock?


-- 7) List all items available in a product line on a vendor site.

-- 8) What items are currently sold by this manufacturer?

-- 9) List all items under a certain price under a component category, across all vendor sites.

-- 10) What motherboards are compatible with this CPU? (matching chipset)


-- 11) List all the memory + corresponding prices on a site that are at least 8GB.


-- 12) What is the location of the warehouse where this item is located?


-- 13) What sites have free shipping available for this product?


-- 14) Which SSDs on this site are currently on sale?


-- 15) What devices are compatible with my carrier?


-- 16) What devices run on Android 11?


-- 17) List all products currently on sale by a specific company that have never had a historical high that surpassed a price threshold and has never fallen below a certain price threshold.


-- 18) What phones were released so far this year?


-- 19) What is the most-outdated hard-drive that is still in stock in this warehouse?
select itemID, warehouseID, itemName, releaseDate from warehouses natural join stock natural join storage natural join item where warehouseID = 209 order by releaseDate DESC limit 1;

-- 20) What are the 5 most expensive monitors from this brand?
select itemID, itemName, category, currentPrice from item natural join monitor natural join stock where manufacturer="HP" order by currentPrice DESC limit 5;
