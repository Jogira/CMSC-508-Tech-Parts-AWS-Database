-- 1) What is the current price for an item?
SELECT currentPrice FROM stock WHERE itemID = 6008;

-- 2) What is the lowest price for this product across all vendor websites?
SELECT MIN(currentPrice) FROM stock JOIN item ON item.itemID = stock.itemID  WHERE item.itemID = 6008;

-- 3) List the names of keyboards and monitors that share the same color.
SELECT m.itemName, m.color, k.itemName, k.color FROM (SELECT * FROM monitor natural JOIN item) AS m, (SELECT * FROM keyboard  natural JOIN item) AS k WHERE m.color = k.color;

-- 4)  What is the highest price historically for this item, on a certain vendor website?
SELECT historicalHigh FROM stock JOIN warehouses ON stock.warehouseID = warehouses.warehouseID WHERE warehouses.url = 'amazon.com' AND itemID = 4010 ;

-- 5) List all item IDs of a certain component that are currently priced above a price threshold and have a certain number of stock left in a specific warehouse.
SELECT item.itemID FROM item JOIN stock ON item.itemID = stock.itemID WHERE category = "memory" AND count > 40 AND currentPrice > 35;

-- 6) Does this vendor have this item in stock?
select itemID, companyName, count from stock natural join warehouses natural join vendor where URL="bestbuy.com" and count > 0;

-- 7) List all items available in a product line on a vendor site.
select itemName, item.itemID, series from stock join item on item.itemID = stock.itemID WHERE series LIKE "%Pavilion%";

-- 8) What items are currently sold by this manufacturer?
select itemID, itemName, category, manufacturer from item where manufacturer = "Samsung";

-- 9) List all items under a certain price under a component category, across all vendor sites.
select itemID, itemName, category, currentPrice from item natural join stock where category = "Phone" and currentPrice < 800;

-- 10) What motherboards are compatible with this CPU? (matching chipset)
select motherboard.itemID as motherboard_ID, CPU.itemID as CPU_ID, motherboard.chipset from motherboard inner join CPU on motherboard.chipset = CPU.chipset where CPU.itemID = 5001;

-- 11) List all the memory + corresponding prices on a site that are at least 8GB.
select itemID, memoryCapacity from stock natural join memory where memoryCapacity >= 8;

-- 12) What is the location of the warehouse where this item is located?
select itemID, location from stock natural join warehouses where itemID = 2999;

-- 13) What sites have free shipping available for this product?
select distinct itemID, URL from stock natural join warehouses where shippingPrice = 0 and itemID = 6004;

-- 14) Which SSDs on this site are currently on sale?
select itemID, storageType, saleStatus from stock natural join storage where saleStatus = "Sale" and storageType = "SSD";

-- 15) What devices are compatible with my carrier?
select itemID, itemName, carrier from phone natural join item where carrier = "Verizon" or carrier = "Unlocked";

-- 16) What devices run on Android 11?
select itemID, itemName, OS from item natural join phone where OS = "Android 11";

-- 17) List all products currently on sale by a specific company that have never had a historical high that surpassed a price threshold and has never fallen below a certain price threshold.
select itemID, historicalHigh, historicalLow, manufacturer from stock natural join item where manufacturer = "Samsung" and historicalHigh < 150 and historicalLow > 50;

-- 18) What phones were released so far this year?
select itemID, itemName, category, releaseDate from item natural join phone where releaseDate like "%2020%";

-- 19) What is the most-outdated hard-drive that is still in stock in this warehouse?
select itemID, warehouseID, itemName, category, releaseDate from warehouses natural join stock natural join storage natural join item where warehouseID = 209 order by releaseDate DESC limit 1;

-- 20) What are the 5 most expensive monitors from this brand?
select itemID, itemName, category, currentPrice from item natural join monitor natural join stock where manufacturer="HP" order by currentPrice DESC limit 5;
