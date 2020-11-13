create view itemListView as select itemID, warehouseID, itemName, currentPrice, category, manufacturer, url
from stock natural join item natural join warehouses;

CREATE VIEW computerPeripheralView AS SELECT itemID, warehouseID, itemName, currentPrice, category
FROM stock NATURAL JOIN item NATURAL JOIN warehouses WHERE category = "Monitor" OR category = "Keyboard";
