DROP DATABASE IF EXISTS bpersonal_db;

CREATE DATABASE bpersonal_db;

\c bpersonal_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS hashtags;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    full_name VARCHAR,
    email_address VARCHAR,
    profile_pic_url varchar,
    bio VARCHAR
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_image_url VARCHAR,
    body VARCHAR,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    author_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    content VARCHAR,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT UC_like UNIQUE (liker_id,post_id)
);

CREATE TABLE hashtags
(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR
);


INSERT INTO users
    (username, password, full_name, email_address, profile_pic_url, bio)
VALUES
    ('kwong', 'imag123', 'Kevin Wong', 'kevinwong@pursuit.org', '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/flats1.jpg⁩', 'I''m kevin and this is my short bio'),
    ('bbrown', 'secret', 'Brandon Brown', 'brandonbrown@pursuit.org', '/Users/pursuit/Desktop/unit4/Pursuit-Core-Web-React-Group-Project/bpersonal_app/backend/images(uploads)/bbrown_images/IMG_9504.jpg', 'This is brandons bio')


INSERT INTO posts
    (owner_id, post_image_url, body)
VALUES
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/flats2.jpg⁩', 'Saltflats... made me feel tiny'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/graduation.jpg⁩', 'Blood, sweat, and tears. Graduation'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/yuki_scratch.jpg⁩', 'Yuki enjoying her walk'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/oculus.jpg⁩', 'Oculus NYC'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/snowboarding.jpg⁩', 'Shredddin'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/wild_west.jpg⁩', 'Take me back to the wild west'),
    (1, '‎⁨iCloud Drive⁩/⁨Desktop⁩/⁨Pursuit⁩/⁨Projects⁩/⁨Pursuit-Core-Web-React-Group-Project⁩/⁨bpersonal_app⁩/⁨backend⁩/⁨images(uploads)/kwongs_images/yuki_waterfall.jpg⁩', 'Hiking with my Yuki');
INSERT INTO comments
    (author_id, post_id, content)
VALUES
    (1, 1, 'Damn bro had to comment on my own picture..sad face');

INSERT INTO likes
    (liker_id, post_id)
VALUES
    (1, 1),
    (1, 2);

INSERT INTO hashtags
    (post_id, body)
VALUES
    (1, 'saltflats'),
    (1, 'utah'),
    (1, 'adventure'),
    (2, 'graduation'),
    (2, 'album'),
    (3, 'doge'),
    (3, 'shiba'),
    (3, 'shibacam'),
    (4, 'oculus'),
    (5, 'snowboarding'),
    (5, 'shredding'),
    (6, 'desert'),
    (6, 'canyons'),
    (6, 'adventure'),
    (7, 'waterfall'),
    (7, 'shiba'),
    (7, 'doge'),
    (7, 'shibacam'),
    (7, 'adventure');

