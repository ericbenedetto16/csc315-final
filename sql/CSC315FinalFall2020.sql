CREATE DATABASE csc315_final;
USE csc315_final;


CREATE TABLE Genre (
	gid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	gname CHAR(20) NOT NULL
);

INSERT INTO Genre (gname) VALUES ('Rock'), ('Jazz'), ('Country'), ('Classical'), ('Throat Singing');

CREATE TABLE Sub_Genre (
	sgid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	gname CHAR(20) NOT NULL,
	sgname CHAR(20) NOT NULL
);

INSERT INTO Sub_Genre (gname, sgname) VALUES ('Rock', 'Blues'), ('Rock', 'Classic Rock'), ('Rock', 'Power Metal'), ('Rock', 'Thrash Metal'), ('Rock', 'Death Metal'), ('Rock', 'Folk Metal');
INSERT INTO Sub_Genre (gname, sgname) VALUES ('Jazz', 'Swing'), ('Jazz', 'Smooth Jazz'), ('Jazz', 'Bossa Nova'), ('Jazz', 'Ragtime');
INSERT INTO Sub_Genre (gname, sgname) VALUES ('Country', 'Bluegrass'), ('Country', 'Country and Western'), ('Country', 'Jug Band');
INSERT INTO Sub_Genre (gname, sgname) VALUES ('Classical', 'Chamber Music'), ('Classical', 'Opera'), ('Classical', 'Orchestral');
INSERT INTO Sub_Genre (gname, sgname) VALUES ('Throat Singing', 'Khoomii'), ('Throat Singing', 'Kargyraa'), ('Throat Singing', 'Khamryn');

CREATE TABLE Region (
	rid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	rname CHAR(20) NOT NULL
);

INSERT INTO Region (rname) VALUES ('Central Asia'), ('Europe'), ('North Americ'), ('South America');

CREATE TABLE Country (
	rid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	rname CHAR(20) NOT NULL,
	cname CHAR(20) NOT NULL
);

INSERT INTO Country (rname, cname) VALUES ('Central Asia', 'Mongolia'), ('Central Asia', 'Tibet'), ('Central Asia', 'Tuva');
INSERT INTO Country (rname, cname) VALUES ('North Americ', 'Canada'), ('North Americ', 'United States'), ('North Americ', 'Mexico');
INSERT INTO Country (rname, cname) VALUES ('South Americ', 'Brazil');
INSERT INTO Country (rname, cname) VALUES ('Europe', 'Norway'), ('Europe', 'Austria'), ('Europe', 'England'), ('Europe', 'Russia');

CREATE TABLE Bands (
	bid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	bname CHAR(20) NOT NULL
);

INSERT INTO Bands (bname) VALUES ('Seputura'), ('Death'), ('Muddy Waters'), ('Led Zeppelin'), ('The Guess Who');
INSERT INTO Bands (bname) VALUES ('The Hu'), ('Huun-Huur-Tu'), ('Paul Pena'), ('Battuvshin'), ('Sade');
INSERT INTO Bands (bname) VALUES ('Mozart'), ('Tchaikovsky'), ('Twisted Sister'), ('Testament'), ('Tengger Cavalry');


CREATE TABLE Band_Origins (
	boid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	bname CHAR(20) NOT NULL,
	cname CHAR(20) NOT NULL
);

INSERT INTO Band_Origins (bname, cname) VALUES ('Seputura', 'Brazil');
INSERT INTO Band_Origins (bname, cname) VALUES ('Death', 'United States');
INSERT INTO Band_Origins (bname, cname) VALUES ('Muddy Waters', 'United States');
INSERT INTO Band_Origins (bname, cname) VALUES ('Led Zeppelin', 'England');
INSERT INTO Band_Origins (bname, cname) VALUES ('The Guess Who', 'Canada');
INSERT INTO Band_Origins (bname, cname) VALUES ('The Hu', 'Mongolia');
INSERT INTO Band_Origins (bname, cname) VALUES ('Huun-Huur-Tu', 'Tuva');
INSERT INTO Band_Origins (bname, cname) VALUES ('Paul Pena', 'United States');
INSERT INTO Band_Origins (bname, cname) VALUES ('Battuvshin', 'Mongolia');
INSERT INTO Band_Origins (bname, cname) VALUES ('Sade', 'England');
INSERT INTO Band_Origins (bname, cname) VALUES ('Mozart', 'Austria');
INSERT INTO Band_Origins (bname, cname) VALUES ('Tchaikovsky', 'Russia');
INSERT INTO Band_Origins (bname, cname) VALUES ('Twisted Sister', 'United States');
INSERT INTO Band_Origins (bname, cname) VALUES ('Testament', 'United States');
INSERT INTO Band_Origins (bname, cname) VALUES ('Tengger Cavalry', 'United States');


CREATE TABLE Band_Styles (
	boid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	bname CHAR(20) NOT NULL,
	sgname CHAR(20) NOT NULL
);

INSERT INTO Band_Styles (bname, sgname) VALUES ('Seputura', 'Death Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Seputura', 'Thrash Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Death', 'Death Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Muddy Waters', 'Blues');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Led Zeppelin', 'Classic Rock');
INSERT INTO Band_Styles (bname, sgname) VALUES ('The Guess Who', 'Classic Rock');
INSERT INTO Band_Styles (bname, sgname) VALUES ('The Hu', 'Folk Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('The Hu', 'Khoomii');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Huun-Huur-Tu', 'Khoomii');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Huun-Huur-Tu', 'Kargyraa');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Paul Pena', 'Blues');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Paul Pena', 'Kargyraa');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Battuvshin', 'Khoomii');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Battuvshin', 'Smooth Jazz');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Sade', 'Smooth Jazz');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Mozart', 'Opera');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Tchaikovsky', 'Opera');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Tchaikovsky', 'Orchestral');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Twisted Sister', 'Thrash Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Testament', 'Thrash Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Tengger Cavalry', 'Folk Metal');
INSERT INTO Band_Styles (bname, sgname) VALUES ('Tengger Cavalry', 'Khoomii');


-- New Relations
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    home_country CHAR(20) NOT NULL,
    FOREIGN KEY(home_country) REFERENCES country(cname)
);

INSERT INTO users (id, email, password, fname, lname, home_country) VALUES (1, "fakeuser@real.site", "", "Totally", "Real", "United States");

CREATE TABLE Favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uid INT NOT NULL,
    bname CHAR(20) NOT NULL,
    FOREIGN KEY(uid) REFERENCES users(id)
);

INSERT INTO favorites (uid, bname) VALUES (1,"Mozart");
INSERT INTO favorites (uid, bname) VALUES (1,"Twisted Sister");

-- Create Indexes
CREATE INDEX band_og_asc ON band_origins(bname ASC);
CREATE INDEX band_style_asc ON band_styles(bname ASC);

-- cleanup
DROP TABLE Band_Styles;
DROP TABLE Band_Origins;
DROP TABLE Bands;
DROP TABLE Country;
DROP TABLE Region;
DROP TABLE Sub_Genre;
DROP TABLE Genre;
DROP TABLE Users;
DROP TABLE Favorites;
DROP DATABASE CSC315FinalFall2020;
