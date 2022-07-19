


-- USER STUFF

-- @BLOCK
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    bio TEXT,
    teamName VARCHAR(255),
    team_id INT,
    FOREIGN KEY(team_id) REFERENCES Teams(id),
    unitName VARCHAR(255),
    country VARCHAR(2)
);

-- @BLOCK
SELECT * FROM Users;



-- TEAMS STUFF

-- @BLOCK
CREATE TABLE Teams(
    id INT PRIMARY KEY AUTO_INCREMENT,
    teamName VARCHAR(255) NOT NULL,
    admin_id INT,


);

-- @BLOCK
SELECT * FROM Teams;


-- PILOTS STUFF

-- @BLOCK
CREATE TABLE Pilots(
    id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    team VARCHAR(255), 
    team_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(team_id) REFERENCES Teams(id),
    unit VARCHAR(255),
    inventory VARCHAR(255),
    bio TEXT,
    country VARCHAR(2),
    timezone DATETIMEOFFSET
);




-- DATA INSERT SCRIPTS


-- @BLOCK
INSERT INTO Users(email, username, country)
VALUES (
    'test@testmail1.com',
    'TestUser1',
    "US"
    );

    -- @BLOCK
INSERT INTO Users(email, username, country)
VALUES (
    'test@testmail2.com',
    'TestUser2',
    "UK"
    );

    -- @BLOCK
INSERT INTO Teams(teamName, admin_id)
VALUES (
    'testTeam1',
    '',
    INSERT INTO Teams(teamName, admin_id)
VALUES (
    'testTeam2',
    '',
    INSERT INTO Teams(teamName, admin_id)
VALUES (
    'testTeam3',
    ''
    );







    -- @BLOCK
   -- drop table pilots;