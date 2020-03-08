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
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR
);


INSERT INTO users
    (username, password, full_name, email_address, profile_pic_url, bio)
VALUES
    ('kwong', 'imag123', 'Kevin Wong', 'kevinwong@pursuit.org', '‎⁨https://pbs.twimg.com/profile_images/1150745933262577664/qOjN2JFT_400x400.jpg', 'I''m kevin and this is my short bio'),
    ('bbrown', 'secret', 'Brandon Brown', 'brandonbrown@pursuit.org', '/uploads/IMG_9504.jpg', 'This is brandons bio'),
    ('cannedBread', 'gang123', 'Marvin Thompson', 'marvinthompson@pursuit.org', '/uploads/83265522_3243496319013151_2072753519152070656_o.jpg', 'This is canned breads bio');


INSERT INTO posts
    (owner_id, post_image_url, body)
VALUES

    (1, '/uploads/graduation.jpg', 'Blood, sweat, and tears. Graduation'),
    (3, '/uploads/83265522_3243496319013151_2072753519152070656_o.jpg', 'Posted up on the stage'),
    (1, 'https://lh3.googleusercontent.com/ARUbGX-c4bZTnkKqJzb-GcYa7e-8NwCh5lD6B8voUtaBi8KyaPGBB-7BTFpRwEcflvZAY4rcutls08_D5IGBAmRNRT4K_RBFkl4emd2upAyN9sseJ_tzl_N8keFAPSy6AUYMkYQz_ZgsknTfHaqsJUvlR8ebruFFTGRbF9uJQfkQQvNJozFFuRtNsuLz1tdP_vvzbB2JsYROsg32hsguyOdJTD7c__5qUJhONrcZVdUP0wqK5KUi5-ARtBNUZGIzCRW1Tta4CYOrDat8T3CcwkOt_eDPr5FQr5Y6qEOMhXgRTNW0lib_g8Stgpt3Jf6263jzKMlkYB4cByInEtx6QQxbPRZ5YsvL_8D1t6mRqsmmhSStFa9RvKK80P1VdShrHDsc_U7i_0k_1uzixzP9cJ0gIlbyxKq15MGGzdL3NyrucL2wKCt5nnuw6jEmvODsLualnH4C5ZpdEmOQ670ES3BifLzeh7h8sHKSE361miH_yL0eZmtirzPDwRCgFOdwQ1dG3OcQfFD-DTGVGEr6i7gWwQ2hopmA7u--ouLWVNaDAWxORk6JdS37Cn1lXPyyS1_CzBHcjVWxuL7EM2zgoU9s0DnEWwt5ARVBdMp1hF6qntxGQiRbMGZ0jJwgr56221sWUzw61DdpsmtjEpvzI0h3WMx5BTyBmBv1Bg6Ye-W3dGMY1ANyznA=s1434-no', 'Adventure in the canyons'),
    (3, '/uploads/62490637_2734115156617939_6992105001522823168_o.jpg', 'Posted up on this stool'),
    (1, 'https://lh3.googleusercontent.com/XdSWUBNsp402t2Dadx2baxh1XgUOAg2Xu14cmtHCMGcaFcoawccYkztY0PtIZUbgy8BuHVWi7tlwg-QQodXj1vggTsgdzu54iKI-oBe3n2lAVItGiKcq1FD6iE63ZltOLsHNFtV5u2Y180asVwPTfS-SJfpmDP2za9OvfGtTOteywNwoCcbGztaaK9volwTkSM6XZLzUgjbhX6RMJ50nl1ZANTbFLH-nf20GW-9rmpEPSvVr9m31reZxQFwqAfNh932Y_SWrgsov8M7ny9o67whRqpwpJxlsuSSs_jlteCCJq-iILVX1elbZ6tFtoFqvEpL2SUZSVE9IRW049An7TgKFzszeKjyfoCx-e3wSChFmSXbQ_AeRaTtiIY0fFIvAotpZxsirZ6A7-tmcSAm-NJzpooeB6Mdj0Pw2Nc6oBIjALu25SQ-FuKCajK0KtvUwwEK63OzTvxNZaUoZdI3kNUHUp1O09Iqq0OHStWayhjlggY-MsNsiLhQS5c5wLqPQqVAAlRuw_aBL1VDww18PfqpJVn2luQM-qs6IzBxbNH7KKACBdrQai0ksHGG4LzDDP81elIwT4KB1Wgba81OgIiOxikMxdkL-P1v-7nhPpvhqz5UUXe-hROV3vdf3eAxHhJCJJxd4_2qtM-Xih45Yoc-xP6tzSRxRci_tn_rS6PSqoT1zy3lDxuM=w720-h1280-no', 'Cingular, raising the bar.'),
    (1, 'https://lh3.googleusercontent.com/FbAWcBwCt6E0oFqqWU8aRUyeJm0mQTjmxf2qctKmfiQ1nNxRKHYK3KXE3n00ms8N7Hj893-p3XBEr7CmBlf68e91lWK3VFxR00laO5aJ_m8Ga2bF9LdmIl71b_rcHchIZeijyqttc0kqEksfxzvrkbB2qcTg0TPxyQIzCodBgNpErlsFbtGDGMV1WouF73dS2013V-NUi_cx22aq6RgggiL-cztxHwgxjnwYWaiuZM3KfHD2xyK4CoVrEMuYHpUO-QEDiWJlKT9vCdmiMhkVk9_45KlLTmXPfcKWpI1QLOpcqulX-WITG_n42zwhRcEK8tvu7UlPIV0jeIqJH0fxiIhE1ui_Lk8foRonr7sTAJc96VIMLHclXZYGImLzY3Iowp3WJXx1OZFbBRdnZ4FKaeuVW97D6jydvWhMU9am1nzkoR61J1LxwenW5GFk6ff9O7CYd8BmeWTqL5PmM0-15tWKBNrolLqThLtPLC_3nKw3pzmGjwCvavy57O4MV9ZGzDHRKCDwwhyHq_lNpLCihkgMlR_C5kPTTNBkG9xsDe36vRE8SV7BKjgMgqWe0tNt2CycQ3BhWd0qF9sJA59znLZBmYrhkp8spi8Vh3KL5WEeHCnwg9tLl0DIzb3TOvq_vVYnX8gPMVxKGRbrNPCrCgckvXC4ISrC_kSZPXlkeDo6ARwQ7JH9S78=w808-h1436-no', 'This is my doge');

INSERT INTO comments
    (author_id, post_id, content)
VALUES
    (1, 1, 'Damn bro had to comment on my own picture..sad face'),
    (3, 2, 'Hey, nice post');

INSERT INTO likes
    (liker_id, post_id)
VALUES
    (1, 1),
    (1, 2),
    (3, 1),
    (3, 2);

INSERT INTO hashtags
    (owner_id, post_id, body)
VALUES

    (1, 1, 'graduation'),
    (1, 1, 'ye'),
    (1, 1, 'album'),
    (1, 3, 'adventures'),
    (1, 3, 'desert'),
    (1, 3, 'canyons'),
    (1, 5, 'cabin'),
    (1, 5, 'mountains'),
    (1, 6, 'shibainu'),
    (1, 6, 'memedog'),
    (1, 6, 'doge'),
    (3, 2, 'posted'),
    (3, 2, 'up'),
    (3, 2, 'on'),
    (3, 2, 'the'),
    (3, 2, 'block'),
    (3, 4, 'still'),
    (3, 4, 'posted'),
    (3, 4, 'on'),
    (3, 4, 'the'),
    (3, 4, 'block');



