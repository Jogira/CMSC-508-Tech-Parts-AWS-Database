CREATE TABLE `CMSC508_Project`.`vendor` (
  `URL` VARCHAR(200) NOT NULL,
  `companyName` VARCHAR(45) NULL,
  PRIMARY KEY (`URL`),
  UNIQUE INDEX `URL_UNIQUE` (`URL` ASC) VISIBLE);

CREATE TABLE `CMSC508_Project`.`warehouses` (
  `warehouseID` INT(4) NOT NULL,
  `URL` VARCHAR(200) NULL,
  `location` INT(5) NULL,
  PRIMARY KEY (`warehouseID`),
  UNIQUE INDEX `location_UNIQUE` (`location` ASC) VISIBLE,
  INDEX `URL_idx` (`URL` ASC) VISIBLE,
  CONSTRAINT `URL`
    FOREIGN KEY (`URL`)
    REFERENCES `CMSC508_Project`.`vendor` (`URL`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `CMSC508_Project`.`item` (
  `itemID` INT(6) NOT NULL,
  `itemName` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `manufacturer` VARCHAR(45) NULL,
  `series` VARCHAR(45) NULL,
  `releaseDate` DATETIME NULL,
  `modelNumber` VARCHAR(45) NULL,
  PRIMARY KEY (`itemID`),
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC) VISIBLE,
  UNIQUE INDEX `itemName_UNIQUE` (`itemName` ASC) VISIBLE,
  UNIQUE INDEX `modelNumber_UNIQUE` (`modelNumber` ASC) VISIBLE);

CREATE TABLE `CMSC508_Project`.`stock` (
  `itemID` INT(6) NOT NULL,
  `warehouseID` INT(4) NULL,
  `count` INT NULL,
  `currentPrice` DOUBLE NULL,
  `historicalLow` DOUBLE NULL,
  `historicalHigh` DOUBLE NULL,
  `saleStatus` VARCHAR(45) NULL,
  `shippingPrice` DOUBLE NULL,
  CONSTRAINT `countCheck`
	CHECK ((`count` > 0)),
  CONSTRAINT `itemID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `warehouseID`
    FOREIGN KEY (`warehouseID`)
    REFERENCES `CMSC508_Project`.`warehouses` (`warehouseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `CMSC508_Project`.`CPU` (
  `itemID` INT NOT NULL,
  `chipset` VARCHAR(45) NULL,
  `integratedGraphics` TINYINT NULL,
  `wattage` INT NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC) VISIBLE,
    CONSTRAINT `wattageCheck`
	CHECK ((`wattage` > 0)),
  CONSTRAINT `cpuID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE `CMSC508_Project`.`memory` (
  `itemID` INT(4) NULL,
  `memoryCapacity` INT NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `memCheck`
	CHECK ((`memoryCapacity` > 0)),
  CONSTRAINT `memoryID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE `CMSC508_Project`.`storage` (
  `itemID` INT NULL,
  `capacity` INT NULL,
  `storageType` VARCHAR(45) NULL,
  `storageStandard` VARCHAR(45) NULL,
  `formFactor` VARCHAR(45) NULL,
  `wattage` INT NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `wattCheck`
	CHECK ((`wattage` > 0)),
  CONSTRAINT `capacityCheck`
	CHECK ((`capacity` > 0)),
  CONSTRAINT `storageID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE `CMSC508_Project`.`motherboard` (
  `itemID` INT NULL,
  `chipset` VARCHAR(45) NULL,
  `numUSBports` INT NULL,
  `network` TINYINT NULL,
  `formFactor` VARCHAR(45) NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `USBportCheck`
	CHECK ((`numUSBports` > 0)),
  CONSTRAINT `motherboardID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE `CMSC508_Project`.`monitor` (
  `itemID` INT NULL,
  `screenSize` INT NULL,
  `resolution` VARCHAR(45) NULL,
  `refreshRate` INT NULL,
  `type` VARCHAR(45) NULL,
  `audio` TINYINT NULL,
  `hdmiPorts` INT NULL,
  `displayPorts` INT NULL,
  `DVIports` INT NULL,
  `color` VARCHAR(45) NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `hdmiPortsCheck`
	CHECK ((`hdmiPorts` >= 0)),
  CONSTRAINT `displayPortsCheck`
	CHECK ((`displayPorts` >= 0)),
  CONSTRAINT `refreshRateCheck`
	CHECK ((`refreshRate` > 0)),
  CONSTRAINT `dviPortsCheck`
	CHECK ((`DVIports` >= 0)),
  CONSTRAINT `monitorID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE `CMSC508_Project`.`keyboard` (
  `itemID` INT NULL,
  `color` VARCHAR(45) NULL,
  `backlightColor` VARCHAR(45) NULL,
  `numpad` TINYINT NULL,
  `wireless` TINYINT NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `keyboardID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `CMSC508_Project`.`phone` (
  `itemID` INT NULL,
  `resolution` VARCHAR(45) NULL,
  `screenType` VARCHAR(45) NULL,
  `ipRating` INT(2) NULL,
  `storage` INT NULL,
  `RAM` INT NULL,
  `CPU` VARCHAR(45) NULL,
  `OS` VARCHAR(45) NULL,
  `carrier` VARCHAR(45) NULL,
  `5G` TINYINT NULL,
  `battery` INT NULL,
  `size` INT NULL,
  UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC),
  CONSTRAINT `storageCheck`
	CHECK ((`storage` > 0)),
  CONSTRAINT `RAMCheck`
	CHECK ((`RAM` > 0)),
  CONSTRAINT `phoneID`
    FOREIGN KEY (`itemID`)
    REFERENCES `CMSC508_Project`.`item` (`itemID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
