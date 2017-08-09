BEGIN;

DROP TABLE IF EXISTS cooking, people, participants cascade;
CREATE TABLE cooking (
  id SERIAL PRIMARY KEY,
  day TEXT NOT NULL,
  chef_id INTEGER,
  sous_chef_id INTEGER,
  meal TEXT
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

INSERT INTO cooking (day, chef_id, sous_chef_id, meal budget) VALUES
('Monday', 3, 2, 'Maqluba', 45),
('Tuesday', 4, 3, 'Rice and Tofu', 70),
('Wednesday', 2, 1, 'Lasagna', 60);

INSERT INTO people (name) VALUES
('Amy'),
('Sajeda'),
('Stefano'),
('Vered');

INSERT INTO participants (day_id, participant_id) VALUES
(1, 3),
(1, 2),
(1, 4),
(2, 4),
(3, 3),
(4, 1);

COMMIT;
