CREATE TABLE r_user (
  email_address text PRIMARY KEY,
  first_name    text,
  last_name     text,
  password      text
);

CREATE TABLE blog (
  id      serial PRIMARY KEY,
  title   text,
  date    timestamp DEFAULT(current_timestamp AT TIME ZONE 'UTC'),
  author  text,
  body    text
);

CREATE TABLE blog_images (
  id          serial PRIMARY KEY,
  blog_id     serial REFERENCES blog (id),
  image_blob  bytea
);



