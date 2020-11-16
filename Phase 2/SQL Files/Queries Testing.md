## 1) What is the current price for an item? (Using itemID 6008.)

All that's to be expected is just the price of an item.

$190



## 2) What is the lowest price for this product across all vendor websites? (Using itemID 6008.)

This will check the entire database to see which website is selling it for the least. In this case, the product with the itemID 6008 also
is being sold for the lowest at $190 as well.

$190

## 3) List the names of keyboards and monitors that share the same color.

This will return all monitors and keyboards that have the same color so you can pair them together. You'll notice all
the data shows just black peripherals because our database only contained black colored products, but if there was 
a monitor that was white and a keyboard that was white, they'd both appear in this list.

Acer SB220Q Ultra-Thin	Black	Dell KB216	Black

Acer SB220Q Ultra-Thin	Black	Anker Bluetooth Ultra Slim	Black

Acer SB220Q Ultra-Thin	Black	Logitech Wireless	Black

Acer SB220Q Ultra-Thin	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwa 21.5-Inch Full HD Monitor	Black	Dell KB216	Black

HP Pavilion 22cwa 21.5-Inch Full HD Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwa 21.5-Inch Full HD Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwa 21.5-Inch Full HD Monitor	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwb 21.5-Inch 720p Monitor	Black	Dell KB216	Black

HP Pavilion 22cwb 21.5-Inch 720p Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwb 21.5-Inch 720p Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwb 21.5-Inch 720p Monitor	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwc 21.5-Inch 4k Monitor	Black	Dell KB216	Black

HP Pavilion 22cwc 21.5-Inch 4k Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwc 21.5-Inch 4k Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwc 21.5-Inch 4k Monitor	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwd 23-Inch Full HD Monitor	Black	Dell KB216	Black

HP Pavilion 22cwd 23-Inch Full HD Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwd 23-Inch Full HD Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwd 23-Inch Full HD Monitor	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwe 21.5-Inch 1440p Monitor	Black	Dell KB216	Black

HP Pavilion 22cwe 21.5-Inch 1440p Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwe 21.5-Inch 1440p Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwe 21.5-Inch 1440p Monitor	Black	Microsoft Wired Keyboard 600	Black

HP Pavilion 22cwf 2 -Inch 144p Monitor	Black	Dell KB216	Black

HP Pavilion 22cwf 2 -Inch 144p Monitor	Black	Anker Bluetooth Ultra Slim	Black

HP Pavilion 22cwf 2 -Inch 144p Monitor	Black	Logitech Wireless	Black

HP Pavilion 22cwf 2 -Inch 144p Monitor	Black	Microsoft Wired Keyboard 600	Black

## 4)  What is the highest price historically for this item, on a certain vendor website? (When the vendor is Amazon and the itemID is 4010.)

This will not check the current price of an item, but instead refer to the highest price the item has ever had, which is logged in the item's history.

$1199

## 5) List all item IDs of a certain component that are currently priced above a price threshold and have a certain number of stock left in a specific warehouse. (When the price threshold is $35 and the stock count must be above 40 for checking CPUs.)

This will return any item IDs for items that have at least 40 in stock and are above $35 in price. It just so happens there's only one item that meets this criteria.

8004.

## 6) Does this vendor have this item in stock? (Where the vendor is BestBuy.)

This will return any items from a vendor where the stock is listed as above 0.

6002	Bestbuy	323

6003	Bestbuy	29

6004	Bestbuy	111

6004	Bestbuy	43

6006	Bestbuy	1

6007	Bestbuy	1

6008	Bestbuy	1

## 7) List all items available in a product line on a vendor site. (Where the vendor is Amazon and the product line is Pavilion.)

HP Pavilion 22cwa 21.5-Inch Full HD Monitor	5556	Pavilion	amazon.com

HP Pavilion 22cwb 21.5-Inch 720p Monitor	5557	Pavilion	amazon.com

HP Pavilion 22cwc 21.5-Inch 4k Monitor	5558	Pavilion	amazon.com

HP Pavilion 22cwd 23-Inch Full HD Monitor	5559	Pavilion	amazon.com

HP Pavilion 22cwe 21.5-Inch 1440p Monitor	5560	Pavilion	amazon.com

HP Pavilion 22cwf 2 -Inch 144p Monitor	5561	Pavilion	amazon.com

## 8) What items are currently sold by this manufacturer? (Where Samsung is the manufacturer.)

This just lists all products from a specific manufacturer. Not sure how else to show it being tested or explain it. Kind of simple.

2345	Samsung 860 QVO 1TB SSD	Storage	Samsung

4010	Samsung Galaxy S10	Phone	Samsung

6004	Samsung Galaxy Note 20 Ultra	Phone	Samsung
			
## 9) List all items under a certain price under a component category, across all vendor sites. (Where the component is "phone: and the price threshold is $800.)

This returns all items from any vendor where the price is under 800 and the item is a phone.

4010	Samsung Galaxy S10	Phone	747

4010	Samsung Galaxy S10	Phone	750

6003	LG G8X ThinQ	Phone	780

6004	Samsung Galaxy Note 20 Ultra	Phone	72.99

8088	Google Pixel 4	Phone	569

## 10) What motherboards are compatible with this CPU? (matching chipset) (Where the CPU itemID is 5001.)

This shows any matching CPUs and motherboards by cross referencing their chipsets and making sure they match.

2598	5001	Intel 300

## 11) List all the memory + corresponding prices on a site that are at least 8GB.

Return the memory and its cost if it has over 8GB.

2989	Corsair Vengeance LPX 16GB DDR4	70
5555	Corsair Vengeance RGB Pro 32GB	145
8003	Patriot Signature 8GB	40
8004	Patriot™ Signature 8GB	36

## 12) What is the location of the warehouse where this item is located? (Where the itemID is 2999.)

Gets the warehouse locations that will have a certain item. Although we didn't use actual addresses, so 12345 is a proper answer.

2999	12345

## 13) What sites have free shipping available for this product? (Where the itemID is 6004.)

Returns any sites where the shippingPrice for that item is listed as 0.

6004	bestbuy.com

## 14) Which SSDs on this site are currently on sale?

Checks the sale status of all SSDs and returns them if they are listed as being "on sale."

2345	SSD	Sale

## 15) What devices are compatible with my carrier? (Where carrier is Verizon.)

This returns all phones that have their carrrier listed as verizon, or unlocked if the carrier does not matter, so you can know if your phone is compatible before purchasing it.

4010	Samsung Galaxy S10	Unlocked

5000	Apple iPhone 11 Pro Max	Unlocked

6002	Google Pixel 2 XL	Verizon

8088	Google Pixel 4	Unlocked

## 16) What devices run on Android 11?

Returns all devices that uses Android 11 as its operating system.

8088	Google Pixel 4	Android 11

## 17) List all products currently on sale by a specific company that have never had a historical high that surpassed a price threshold and has never fallen below a certain price threshold. (Between $50 and $150, by Samsung)

Lists all products from Samsung that have NEVER costed over $150 and NEVER costed under $50.

2345	140	110	Samsung

6004	80	70	Samsung

## 18) What phones were released so far this year?

Returns all phones released in 2020.

6004	Samsung Galaxy Note 20 Ultra	Phone	2020-03-02 00:00:00

## 19) What is the most-outdated hard-drive that is still in stock in this warehouse?

Returns the oldest released HDD that is still in stock.

7004	209	Intel 665p Series M.2 2280 1TB	Storage	2019-10-29 00:00:00

## 20) What are the 5 most expensive monitors from this brand? (Brand being HP.)

Returns the top 5 most expensive monitors from HP.

5557	HP Pavilion 22cwb 21.5-Inch 720p Monitor	Monitor	2839

5559	HP Pavilion 22cwd 23-Inch Full HD Monitor	Monitor	939

5558	HP Pavilion 22cwc 21.5-Inch 4k Monitor	Monitor	222

5560	HP Pavilion 22cwe 21.5-Inch 1440p Monitor	Monitor	200

5556	HP Pavilion 22cwa 21.5-Inch Full HD Monitor	Monitor	100
