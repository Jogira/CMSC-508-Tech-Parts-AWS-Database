Design decisions 

Using React for the frontend, in order to implement sorting the table of results in different ways without requiring refresh of the page, as well as dynamically loading the corresponding category specific dropdowns according to the currently selected category. 

We also created a view in our database that was used to only display certain columns for each item in our results page. 

Access to the admin page was also locked behind a login page. If the wrong information was added, the user would be stuck on the login page and not be given access to the admin console. Once logged in, the admin is able to logout via a button at the top of the page. Additionally, leaving and coming back to the page after a successful login will automatically boot you out as an extra measure.


Successes
Despite none of us having prior experience with React, we were able to figure out how to build a react project that could connect, query, and obtain results from an AWS server, as well as insert/update/delete items from the database.

Additionally, being able to successfully create code that would accept all the different types of selections and generate the corresponding SQL queries in a generalized way. 

One of us learned JavaScript, and can now put that on his resume.

Updating and deleting from the website directly was also an issue, as we would need a way to identify which item exactly to be deleted, and ensuring that item was deleted from all tables. Including the item category for what item the admin wants to delete fixed this issue, and instead of working on only the stock and item tables, the website will update or add to all three tables at once: stock (for the warehouse information, such as stock, price, historical highs and lows),
Item (for storing product information, such as the name, series, and release date),
And the item category, such as CPU having wattage details or keyboards having color specifics. 
All of these tables were tied together by an itemID given to the items so they were able to be matched across tables and updated simultaneously.

Difficulties
We ran into many issues regarding our inexperience with developing in react / a server-side rendering app. 

The login system took way longer than expected and ended up being watered down from what we wanted, due to us not being able to get it working through React. 

We had difficulties working with each other's code, as we also lacked experience in full stack development and didn’t always understand how each other’s program worked.

The scope of the project database was also a huge hurdle. We did get the functionality implemented, (update/delete/add/view) but not very every single component. It felt more important to get the ability to operate on the database working over showing that every single type of item can be added to the database. As is, items can be added to/deleted/updated from the CPU and memory categories. However, the rest of the categories did not, as setting up buttons for the other 50ish total attributes from the other categories would have been too time consuming, as the functionality ability to work on the database has already been proven.

Writing triggers also was an issue, as for some reason the trigger placed on the stock table to update the historicalLow and historicalHigh prices if the currentPrice was updated to be above or below attributes would always give errors when updating any categories in stock, not just if the currentPrice was changed.

	
Future Advice

Try making a simple frontend (even if it’s just a textbox to directly query the db) before the frontend step of the semester project, to get a little familiar with the application structure needed.  

Try building things separate from the main project (like a login system), and then integrating it after you get it working and understand most of it. Brandon ran into hours of errors when building the login, but had no way of figuring out if it was me writing bad code or me breaking my team's code.

Set-aside more time for working with the TA and professor. Our schedule at the end of the semester filled up and we didn’t make the time to visit the TA for advice that may have been helpful. 

Restart the server right before the presentation, to minimize the chance of it crashing midway though. We lost a lot of time in the presentation due to us needing to restart the server.

Have a presentation contingency plan. Even after running through the presentation an hour before we had to present, we ran into an error on the server that never occurred in our practice presentation. It may have been best to plan ahead in the event we had an unexpected issue.
