DROP DATABASE IF EXISTS eventfinder;
CREATE DATABASE eventfinder;
USE eventfinder;
CREATE TABLE events (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    hour varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    description TEXT NOT NULL,
    organisator varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);

