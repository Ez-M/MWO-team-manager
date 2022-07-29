




-- @BLOCK
CREATE TABLE Users(
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    team_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(team_id) REFERENCES Teams(id),
    unitName VARCHAR(255),
    country VARCHAR(2)
);

-- @BLOCK
SELECT * FROM Users;





-- @BLOCK
CREATE TABLE Teams(
    id INT PRIMARY KEY AUTO_INCREMENT,
    teamName VARCHAR(255) NOT NULL,
    admin_id INT
);

-- @BLOCK
SELECT * FROM Teams;






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







-- @BLOCK
INSERT INTO Users(email, username, bio, team_id, unitName, country)
VALUES (
    'test@testmail1.com',
    'TestUser1',
    "testBio",
    "1",
    "TestUnit",
    "US"
    );


-- @BLOCK
INSERT INTO Users(email, username, password)
VALUES (
    'test@testmail1.com',
    'TestUser1',
    "testpass"
    );



     -- @BLOCK
INSERT INTO Users(email, username, bio, team_id, unitName, country)
VALUES (
    'test@testmail2.com',
    'TestUser2',
    "testBio2",
    "2",
    "TestUnit2",
    "Uk"
    );

         -- @BLOCK
INSERT INTO Users(email, username, bio, unitName, country)
VALUES (
    'test@testmail3.com',
    'TestUser3',
    "testBio3",
    
    "TestUnit3",
    "Uk"
    );

    -- @BLOCK
INSERT INTO Teams(teamName)
VALUES (
    'testTeam1');


    -- @BLOCK
    drop table users ;

        -- @BLOCK
    drop table teams;