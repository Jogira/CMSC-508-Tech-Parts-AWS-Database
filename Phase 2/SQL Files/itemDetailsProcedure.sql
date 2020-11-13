delimiter |
create procedure itemDetails (num varchar(64)) begin
select category into @cat from item where num=item.itemID limit 1;
if @cat like 'CPU' then
select * from item natural join CPU where item.itemID = num;
end if;
if @cat like 'Storage' then
select * from item natural join storage where item.itemID = num;
end if;
if @cat like 'keyboard' then
select * from item natural join keyboard where item.itemID = num;
end if;
if @cat like 'memory' then
select * from item natural join memory where item.itemID = num;
end if;
if @cat like 'monitor' then
select * from item natural join monitor where item.itemID = num;
end if;
if @cat like 'motherboard' then
select * from item natural join motherboard where item.itemID = num;
end if;
if @cat like 'phone' then
select * from item natural join phone where item.itemID = num;
end if;
end;
|
