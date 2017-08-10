BEGIN;

DROP TABLE IF EXISTS cooking, people, participants cascade;
CREATE TABLE cooking (
  id SERIAL PRIMARY KEY,
  day VARCHAR(10) NOT NULL,
  day_of_week INTEGER DEFAULT NULL,
  chef_id INTEGER DEFAULT NULL,
  sous_chef_id INTEGER DEFAULT NULL,
  meal VARCHAR(110) DEFAULT NULL,
  budget INTEGER DEFAULT 100
);

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  day_id INTEGER,
  participant_id INTEGER
);

INSERT INTO cooking (day, day_of_week, chef_id, sous_chef_id) VALUES
('Sunday', 1, 1, 1),
('Monday', 2, 1, 1),
('Tuesday', 3, 1, 1),
('Wednesday', 4, 1, 1),
('Thursday', 5, 1, 1),
('Friday', 6, 1, 1),
('Saturday', 7, 1, 1);

INSERT INTO people (name) VALUES
('<Empty>'),
('Amy'),
('Sajeda'),
('Stefano'),
('Vered'),
('King'),
('Leo'),
('Harry'),
('Mario'),
('Lubes'),
('Paul'),
('Katia'),
('Suha'),
('Reem'),
('Jack'),
('Shireen'),
('Zooey'),
('Mohammed'),
('Judy'),
('Lee'),
('Heather'),
('Mavis');

INSERT INTO participants (day_id, participant_id) VALUES
(1, 3),
(1, 2),
(1, 4),
(2, 4),
(3, 3),
(4, 1);

COMMIT;
