Bolded indicates primary key/foreign key.

vendor(**URL**, companyName)

warehouses(**warehouseID**, **URL**, location)

stock(**itemID**, **warehouseID**, count, currentPrice, historicalLow, historicalHigh, saleStatus, shippingPrice)

item(**itemID**, itemName, category, manufacturer, series, releaseDate, modelNumber)

CPU(**itemID**, chipset, integratedGraphics, wattage)

memory(**itemID**, memoryCapacity)

storage(**itemID**, capacity, storageType, storageStandard, formFactor, wattage)

motherboard(**itemID**, chipset, numUSBports, network, formFactor)

monitor(**itemID**, screenSize, resolution, refreshRate, type, audio, hdmiPorts, displayPorts, DVIports, color)

keyboard(**itemID**, color, blacklightColor, numpad, wireless)

phone(**itemID**, resolution, screenType, ipRating, storage, RAM, CPU, OS, carrier, 5G, battery, size)
