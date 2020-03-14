-- Create Database
DROP DATABASE IF EXISTS kicks_db;
CREATE DATABASE kicks_db;
\c kicks_db;

-- Create Tables
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS reactions;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS tags;

-- Create user Table
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    user_name VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    phone_number BIGINT NOT NULL DEFAULT 0,
    profile_pic VARCHAR NOT NULL DEFAULT ''
);

-- Create Post Table

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    image VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    release_date VARCHAR NOT NULL,
    colorway VARCHAR NOT NULL,
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP 
);

-- CREATE COMMENTS TABLE

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR NOT NULL,
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP
);

-- CREATE REACTIONS TABLE

CREATE TABLE reactions
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    reaction VARCHAR NOT NULL
);

-- CREATE TAGS TABLE

CREATE TABLE tags
(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    tag VARCHAR NOT NULL
);

-- CREATE DUMMY DATA

INSERT INTO users
    (full_name, user_name, email, password, phone_number, profile_pic)
VALUES
    ('Syn', 'exxxxtra_loooong', 'synperez@pursuit.org' , 'short_stick', 8182308004, 'https://i.imgur.com/cMy8V5j.png'),
    ('Dug', 'dougy_fresh', 'a@email.com', 'abcd1234', 8185550123, 'https://i.imgur.com/cMy8V5j.png'),
    ('Kelvin', 'big_socks', 'b@email.com', '1234abcd', 8181234567, 'https://image.shutterstock.com/image-photo/headshot-successful-smiling-cheerful-african-260nw-567772042.jpg'),
    ('Jay', 'fast_and_furious', 'c@email.com', 'awal123', 1183456789, 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg');

INSERT INTO posts
    (user_id, image, brand, description, release_date, colorway)
VALUES
    (1, 'https://blog.finishline.com/wp-content/uploads/2019/03/Candy-Cane-1.png', 'nike', 'I''m ready for santa', '2001', 'red'),
    (2, 'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Cloud-White-Product.jpg', 'adidas', 'Chick-fil-a, what she order', '1994', 'white'),
    (3, 'https://i.redd.it/esnnznuench21.jpg', 'tims', 'What you know about tim bits?', '1987', 'red'),
    (4, 'https://i.imgur.com/cOTe35I.jpg', 'crocs', 'you croc my world', '2018', 'black');

INSERT INTO comments
    (user_id, post_id, body)
VALUES
    (1, 4, 'nice'),
    (2, 1, 'cool'),
    (3, 2, 'great'),
    (4, 3, 'boo');

INSERT INTO reactions
    (user_id, post_id, reaction)
VALUES
    (1, 4, 'hot'),
    (2, 1, 'hot'),
    (3, 2, 'cold'),
    (4, 3, 'cold');

INSERT INTO tags
    (post_id, user_id, tag)
VALUES
    (1, 1, 'nike'),
    (2, 2, 'adidas'),
    (3, 3, 'tims'),
    (4, 4, 'crocs');
