--Make a view for grabbing all of the data you'd need for listing every item.
create view itemListView as select itemID, warehouseID, itemName, currentPrice, category, manufacturer, url
from stock natural join item natural join warehouses;

--Make a view explicitly for viewing items that you'd connect to a computer as peripherals. 
CREATE VIEW computerPeripheralView AS SELECT itemID, warehouseID, itemName, currentPrice, category
FROM stock NATURAL JOIN item NATURAL JOIN warehouses WHERE category = "Monitor" OR category = "Keyboard";
