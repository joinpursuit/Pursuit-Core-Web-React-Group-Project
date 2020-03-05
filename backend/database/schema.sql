DROP DATABASE IF EXISTS our_canvas_db;
CREATE DATABASE our_canvas_db;

\c our_canvas_db;

DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  username TEXT UNIQUE NOT NULL,
  bio TEXT NOT NULL,
  website TEXT,
  profile_pic VARCHAR,
  favorite_artist TEXT,
  art_type TEXT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  poster_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  picture TEXT NOT NULL
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag TEXT NOT NULL
);

INSERT INTO users (full_name, email, username, bio, website, profile_pic, favorite_artist, art_type)
VALUES ('Isaiah Collazo', 'isaiahcollazo@pursuit.org', 'theycallme_zay', 'Aspiring game designer and cinematopgrapher',
        null, null, 'Damien Chazelle', 'Cinematography'),
        ('Danny L', 'danny@L.com', 'dannyL', 'musician', null, null, 'Sade', 'music'),
        ('Marializa Martinez', 'mariamartinez@pursuit.org', 'marializa0414', 'Animator turned chocolatier', null, null, 'Andy Warhol', 'Modern'),
        ('Sihame Bazi', 'sihamebazi@pursuit.org', 'bsihame', 'Painter', null, null, 'Leonardo Da Vinci', 'Painting, oils and acrylic');
