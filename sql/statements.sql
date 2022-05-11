INSERT INTO profile(profileId, profileAboutMe, profileEmail, profileHash, profileName) VALUES (UUID_TO_BIN(UUID()),'I love double quotes', 'example@email.com', 'd7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d', 'my name is');

INSERT INTO profile(profileId, profileAboutMe, profileEmail, profileHash, profileName) VALUES (UUID_TO_BIN(UUID()),'I hate double quotes', 'superretro@myspace.com', 'd7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d7d', 'Tom');

INSERT INTO status(statusId, statusColor, statusValue) VALUES (UUID_TO_BIN(UUID()), '#980F5F', 'complete');

INSERT INTO status(statusId, statusColor, statusValue) VALUES (UUID_TO_BIN(UUID()), '#FF0000', 'blocked');

UPDATE status SET statusColor = '#0F9848', statusValue = 'Complete' WHERE statusId =UUID_TO_BIN('3748e790-d14d-11ec-a6dd-0242ac1b0002');

DELETE FROM profile WHERE profileId = UUID_TO_BIN('01d5b161-d14e-11ec-a6dd-0242ac1b0002');

INSERT INTO project(projectId, projectProfileId, projectDescription, projectDueDate, projectName) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN('025d8952-d14e-11ec-a6dd-0242ac1b0002'), 'super secret project that will change the world', '2022-06-30 08:00:00', 'hush hush');

INSERT INTO ticket(ticketId, ticketProfileId, ticketProjectId, ticketDueDate, ticketDescription, ticketName) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN('deb4eb40-d14e-11ec-a6dd-0242ac1b0002'), UUID_TO_BIN('cdafd34c-d14e-11ec-a6dd-0242ac1b0002'), NOW(), 'Shooting lazers out of Iphones', 'pew pew');


INSERT INTO ticket(ticketId, ticketProfileId, ticketProjectId, ticketDueDate, ticketDescription, ticketName) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN('deb4eb40-d14e-11ec-a6dd-0242ac1b0002'), UUID_TO_BIN('cdafd34c-d14e-11ec-a6dd-0242ac1b0002'), NOW(), 'Shooting lazers out of Google 1Plus', 'pew pew pew');

INSERT INTO ticketStatus(ticketStatusStatusId, ticketStatusTicketId, ticketStatusDate) VALUES (UUID_TO_BIN('3748e790-d14d-11ec-a6dd-0242ac1b0002'), UUID_TO_BIN('313bf7f9-d14f-11ec-a6dd-0242ac1b0002'), NOW());

INSERT INTO ticketStatus(ticketStatusStatusId, ticketStatusTicketId, ticketStatusDate) VALUES (UUID_TO_BIN('68758ac0-d14f-11ec-a6dd-0242ac1b0002'),UUID_TO_BIN('b56ec99a-d14f-11ec-a6dd-0242ac1b0002'), NOW());

SELECT BIN_TO_UUID(profileId) as profileId, profileAboutMe, profileEmail, profileHash, profileName FROM profile WHERE profileId =  UUID_TO_BIN('025d8952-d14e-11ec-a6dd-0242ac1b0002');

SELECT BIN_TO_UUID(ticketId) as ticketId, BIN_TO_UUID(ticketProfileId) as ticketProfileId, UUID_TO_BIN(ticketProjectId) as ticketProjectId, ticketDueDate, ticketDescription, ticketName FROM ticket WHERE ticketProjectId = UUID_TO_BIN('cdafd34c-d14e-11ec-a6dd-0242ac1b0002');

SELECT BIN_TO_UUID(ticketId) as ticketId, BIN_TO_UUID(ticketProfileId) as ticketProfileId, BIN_TO_UUID(ticketProjectId) as ticketProjectId, ticketDueDate, ticketDescription, ticketName FROM ticket INNER JOIN ticketStatus  on ticket.ticketId = ticketStatus.ticketStatusTicketId WHERE ticketStatus.ticketStatusStatusId = UUID_TO_BIN('3748e790-d14d-11ec-a6dd-0242ac1b0002');
