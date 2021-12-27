CREATE TABLE IF NOT EXISTS flights (
    id serial PRIMARY KEY,
    origin varchar,
    destination varchar,
    airline varchar,
    aircraft varchar,
    registration varchar,
    seat varchar,
    flightday varchar
);