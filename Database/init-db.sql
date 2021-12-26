CREATE TABLE IF NOT EXISTS books (
    id serial PRIMARY KEY,
    origin varchar,
    destination varchar,
    distance varchar,
    airline varchar,
    aircraft varchar,
    registration varchar,
    seat varchar,
    flightday varchar
);