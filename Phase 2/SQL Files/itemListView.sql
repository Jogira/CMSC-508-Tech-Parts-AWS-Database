create view itemListView as select itemID, warehouseID, itemName, currentPrice, category, manufacturer, url
from stock natural join item natural join warehouses;
