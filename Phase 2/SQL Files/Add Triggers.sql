#Returns an error if an item being added to the storage does NOT have "HDD" or "SSD" as the storage type.
delimiter |
CREATE TRIGGER storageTypeRestrict
Before INSERT on storage
FOR EACH ROW Begin
if new.storageType not like 'HDD' and new.storageType not like 'SSD' then
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'ERROR: StorageType value is invalid.';
end if;
end;

#Returns an error if an item being added to the storage does NOT have "SATA" or "NVME" as the storage standard.
CREATE TRIGGER storageStandardRestrict
Before INSERT on storage
FOR EACH ROW Begin
if new.storageStandard not like 'SATA' and new.storageStandard not like 'NVME' then
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'ERROR: StorageStandard value is invalid.';
end if;
end;


|

#These triggers make sure only reasonable values are added for CPU wattage. Most modern CPUs don't use wattages over 200. 
delimiter ~~
CREATE TRIGGER wattageInsert
BEFORE INSERT on CPU
FOR EACH ROW
begin
    if new.wattage > 200 then
    set new.wattage = 200;
end if;
end

delimiter  ~~
CREATE TRIGGER wattageUpdate
AFTER UPDATE on CPU
FOR EACH ROW
begin
    if new.wattage > 200 then
    update CPU set wattage = old.wattage;
end if;
end 


#These triggers update the historical lows and highs if data updated to the tables, so when a new historically high/low price is entered, 
#it automatically updates the other attributes.
delimiter  ~~
CREATE TRIGGER historicalLowUpdate
AFTER UPDATE on stock
FOR EACH ROW
begin
    if new.historicalLow < historicalLow then
    update stock set historicalLow = new.historicalLow;
end if;
end

delimiter  ~~
CREATE TRIGGER historicalHighUpdate
AFTER UPDATE on stock
FOR EACH ROW
begin
    if new.historicalHigh > historicalHigh then
    update stock set historicalHigh = new.historicalHigh;
end if;
end
