CREATE ROLE 'developer';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, 
 SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, 
 ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO 'developer' WITH GRANT OPTION;
 
GRANT 'developer' TO 'amd';
GRANT 'developer' TO 'BrandonM';
GRANT 'developer' TO 'Zweitonegoismus';

#Amazon does not allow anyone, not even the RDS creator, to give roles. Permissions were still able to be ggranted to others, but had to be granted 
#instead of via roles. However, only people with the admin password and username are able to access the update page on our website, so nomral
#users of the websites will only be able to search for results while logging in gives access to an admin page that allows items to be added,
#delete, and updated via the website. 
