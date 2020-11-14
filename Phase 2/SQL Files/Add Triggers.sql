delimiter |
CREATE TRIGGER storageTypeRestrict
Before INSERT on storage
FOR EACH ROW Begin
if new.storageType not like 'HDD' and new.storageType not like 'SSD' then
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'ERROR: StorageType value is invalid.';
end if;
end;

CREATE TRIGGER storageStandardRestrict
Before INSERT on storage
FOR EACH ROW Begin
if new.storageStandard not like 'SATA' and new.storageStandard not like 'NVME' then
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'ERROR: StorageStandard value is invalid.';
end if;
end;


|
