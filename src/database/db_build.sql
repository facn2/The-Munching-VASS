BEGIN;

DROP TABLE IF EXISTS cooking, people, participants cascade;
CREATE TABLE cooking (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  chef_id INTEGER,
  sous_chef_id INTEGER,
  meal TEXT
);

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  date_id INTEGER,
  participant_id INTEGER
);

INSERT INTO cooking (date, chef_id, sous_chef_id, mael) VALUES
('2017-08-10', 3, 2, "Maqluba"),
('2017-08-11', 4, 3, "Rice and Tofu"),
('2017-08-12', 2, 1, "Lasagna")

INSERT INTO people (name) VALUES
('Amy'),
('Sajeda'),
('Stefano'),
('Vered')

INSERT INTO participants (date_id, participant_id) VALUES
(1, 3),
(1, 2),
(1, 4),
(2, 4),
(3, 3),
(4, 1)

COMMIT;
