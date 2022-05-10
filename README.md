# Backend Challenge
## Part1 

### Getting Started

In order to complete this part of the assignment, you must use Docker to run a mysql8 database container. The necessary configuration files are provided for you in this repository. and below are instructions for getting started.

1. Create a new file called `/mysql.env` based on `/example.env` and update the placeholders with your information.
2. Create a deployment on the digital ocean droplet provided for you and perform a mass upload.
3. Gain access to your droplet using putty(windows) or the ssh command(MacOS)
4. cd into the project then run `docker-compose up -d`

For instructions on how to run MySQL files, see the lecture notes for the MySQL Commands lecture

### Marching Orders

#### Part 1.1
Using the conceptual model below create a DDL file named `asana.sql` and execute it. Pay close attention to the data types for attributes. 

##### Conceptual Model
**Profile** \
profileId (PK) \
profileAboutMe \
profileEmail \
profileHash \
profileName 
    
 **Project** \
projectId (PK) \
projectProfileId (FK) \
projectDueDate \
projectDescription \
projectName 
    
 **Ticket** \
 ticketId (PK) \
 ticketProfileId (FK) \
 ticketProjectId (FK) \
 ticketDescription \
 ticketDueDate \
 ticketName

 **Status** \
statusId (PK) \
statusValue \
statusColor 

 **TicketStatus** \
ticketStatusStatusId \
ticketStatusTicketId 
ticketStatusDate 
    
**Relationships** \
One profile can own many projects \
One profile be assigned to many tickets \
many tickets can have many statuses 
    
#### Part 1.2
Write all of these in a second file called statements.sql and run them. You should be able to see the data show up in the database browse.

1. Write and execute three insert statements on a strong entity table based on the DDL from question 1. Reminder: Strong Entities have no foreign keys.

2. Write and execute an update statement on a row created in question 2

3. Write and execute a delete statement on a row created in question 2

4. Write and execute an insert statement on a table with a foreign key that references the original table in question 2.

5. Write and execute a select statement for a row using its primary key as the selector.

6. Write and execute a select statement that incorporates both a where clause and an inner-join.
 
## Part 2

Create two REST endpoints in Express. One endpoint for getting status By statusId and one for creating a status. Both endpoints must  match the paths below. Each endpoint must have validation, a controller, and a mysqlEnabledFunction

**Required Rest Endpoint paths**
* post /apis/status
* get /apis/status/:statusId

**Tips**
- It will be required to find a uuid for a status inserted into the database to test the get status by statusId endpoint. There are multiple ways of doing this, including manual select statements in MySQL, get creative!


## Turning in the assignment
When you have this complete, turn in the following in your assignments channel
* The full insomnia URL of your post endpoint
* The full insomnia URL of your get endpoint
* Your Github URL
