DROP TABLE IF EXISTS ticketStatus;
DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS status;




CREATE TABLE status(
    statusId BINARY(16) NOT NULL,
    statusColor CHAR(7) NOT NULL,
    statusValue VARCHAR(32) NOT NULL,
    UNIQUE(statusValue),
    primary key(statusId)
);

CREATE TABLE profile(
                        profileId BINARY(16) NOT NULL,
                        profileAboutMe VARCHAR(255),
                        profileEmail VARCHAR(320) NOT NULL,
                        profileHash char(97) NOT NULL ,
                        profileName VARCHAR(64) NOT NULL ,
                        UNIQUE(profileEmail),
                        PRIMARY KEY(profileId)
);

CREATE TABLE project(
    projectId BINARY(16) NOT NULL,
    projectProfileId BINARY(16) NOT NULL,
    projectDescription VARCHAR(1024),
    projectDueDate DATETIME,
    projectName VARCHAR(64) NOT NULL,
    index(projectProfileId),
    FOREIGN KEY(projectProfileId) REFERENCES profile(profileId),
    PRIMARY KEY(projectId)
);


CREATE TABLE ticket(
    ticketId BINARY(16) NOT NULL,
    ticketProfileId BINARY(16) NOT NULL,
    ticketProjectId BINARY(16) NOT NULL,
    ticketDueDate DATETIME,
    ticketDescription VARCHAR(2048),
    ticketName VARCHAR(64) NOT NULL,
    INDEX (ticketProfileId),
    INDEX (ticketProjectId),
    FOREIGN KEY (ticketProfileId) REFERENCES profile(profileId),
    FOREIGN KEY(ticketProjectId) references project(projectId),
    PRIMARY KEY(ticketId)
);

CREATE TABLE ticketStatus(
    ticketStatusStatusId BINARY(16) NOT NULL,
    ticketStatusTicketId BINARY(16) NOT NULL,
    ticketStatusDate TIMESTAMP NOT NULL,
   INDEX(ticketStatusStatusId),
   INDEX(ticketStatusTicketId),
   FOREIGN KEY(ticketStatusStatusId) REFERENCES status(statusId),
   FOREIGN KEY(ticketStatusTicketId) REFERENCES ticket(ticketId),
   PRIMARY KEY(ticketStatusStatusId, ticketStatusTicketId)
);

