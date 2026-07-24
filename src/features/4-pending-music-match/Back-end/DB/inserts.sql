--@block
-- Cargar datos en la tabla "artistas"
INSERT INTO "artistas" ("id", "nombre", "genero_id", "fotoartista")
VALUES (1, 'Beyoncé', 8, 123456),
    (2, 'Ed Sheeran', 5, 789012),
    (3, 'Rihanna', 8, 345678),
    (4, 'Michael Jackson', 5, 901234),
    (5, 'Taylor Swift', 4, 567890),
    (6, 'Bruno Mars', 8, 234567),
    (7, 'Adele', 2, 678901),
    (8, 'Drake', 3, 345678),
    (9, 'Ariana Grande', 8, 901234),
    (10, 'Coldplay', 6, 456789);
--@block
-- Cargar datos en la tabla "albums"
INSERT INTO "albums" (
        "id",
        "artista_id",
        "nombrealbum",
        "fotoalbum"
    )
VALUES (1, 1, 'Dangerously In Love', 123456),
    (2, 1, 'I Am... Sasha Fierce', 789012),
    (3, 1, 'Lemonade', 345678),
    (4, 2, '÷', 901234),
    (5, 2, 'x', 567890),
    (6, 3, 'Good Girl Gone Bad', 234567),
    (7, 3, 'Unapologetic', 678901),
    (8, 3, 'Talk That Talk', 345678),
    (9, 4, 'Thriller', 901234),
    (10, 5, 'Fearless', 456789),
    (11, 5, '1989', 123456),
    (12, 6, 'Doo-Wops & Hooligans', 789012),
    (13, 6, 'Uptown Special', 345678),
    (14, 6, '24K Magic', 901234),
    (15, 7, '21', 567890),
    (16, 7, '25', 234567),
    (17, 8, 'Views', 678901),
    (18, 8, 'Scorpion', 345678),
    (19, 9, 'My Everything', 901234),
    (20, 9, 'Thank U, Next', 456789),
    (21, 9, 'Positions', 123456),
    (
        22,
        10,
        'Viva la Vida or Death and All His Friends',
        789012
    ),
    (23, 10, 'X&Y', 345678),
    (24, 10, 'Parachutes', 901234);
--@block
-- Cargar datos en la tabla "canciones"
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES -- Beyoncé
    (1, 1, 1, 8, 'Crazy in Love'),
    (
        2,
        1,
        2,
        8,
        'Single Ladies (Put a Ring on It)'
    ),
    (3, 1, 3, 8, 'Formation'),
    -- Ed Sheeran
    (4, 2, 4, 5, 'Shape of You'),
    (5, 2, 5, 5, 'Thinking Out Loud'),
    (6, 2, 4, 6, 'Castle on the Hill'),
    -- Rihanna
    (7, 3, 6, 8, 'Umbrella'),
    (8, 3, 7, 8, 'Diamonds'),
    (9, 3, 8, 7, 'We Found Love'),
    -- Michael Jackson
    (10, 4, 9, 8, 'Billie Jean'),
    (11, 4, 9, 6, 'Beat It'),
    (12, 4, 9, 6, 'Thriller'),
    -- Taylor Swift
    (13, 5, 10, 'Country', 'Love Story'),
    (14, 5, 11, 5, 'Shake It Off'),
    (15, 5, 11, 5, 'Blank Space'),
    -- Bruno Mars
    (16, 6, 12, 8, 'Just the Way You Are'),
    (17, 6, 13, 1, 'Uptown Funk'),
    (18, 6, 14, 4, '24K Magic'),
    -- Adele
    (19, 7, 15, 4, 'Rolling in the Deep'),
    (20, 7, 15, 2, 'Someone Like You'),
    (21, 7, 16, 2, 'Hello'),
    -- Drake
    (22, 8, 17, 3, 'Hotline Bling'),
    (23, 8, 18, 3, 'God´s Plan'),
    (24, 8, 18, 3, 'In My Feelings'),
    -- Ariana Grande
    (25, 9, 19, 8, 'Problem'),
    (26, 9, 20, 8, 'Thank U, Next'),
    (27, 9, 21, 8, 'Positions'),
    -- Coldplay
    (28, 10, 22, 6, 'Viva la Vida'),
    (29, 10, 23, 6, 'Fix You'),
    (30, 10, 24, 6, 'Yellow');
-- Canciones adicionales para Beyoncé
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (31, 1, 2, 8, 'Halo'),
    (32, 1, 3, 8, 'Sorry'),
    (33, 1, 3, 8, 'Hold Up'),
    (34, 1, 3, 8, 'Freedom'),
    (35, 1, 2, 8, 'If I Were a Boy'),
    (36, 1, 2, 8, 'Sweet Dreams'),
    (37, 1, 3, 8, 'All Night');
-- Canciones adicionales para Ed Sheeran
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (38, 2, 5, 5, 'Photograph'),
    (39, 2, 4, 5, 'Galway Girl'),
    (40, 2, 5, 5, 'Perfect'),
    (44, 2, 5, 5, 'I See Fire');
-- Canciones adicionales para Rihanna
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (45, 3, 6, 8, 'Rude Boy'),
    (46, 3, 7, 8, 'Stay'),
    (47, 3, 6, 8, 'Don´t Stop the Music'),
    (48, 3, 8, 8, 'Where Have You Been'),
    (49, 3, 6, 8, 'Take a Bow'),
    (50, 3, 6, 8, 'Only Girl (In the World)'),
    (
        51,
        3,
        8,
        7,
        'Cheers (Drink to That)'
    );
-- Canciones adicionales para Michael Jackson
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (52, 4, 9, 8, 'Smooth Criminal'),
    (53, 4, 9, 8, 'Black or White'),
    (
        54,
        4,
        10,
        8,
        'Wanna Be Startin´ Somethin´'
    ),
    (55, 4, 10, 8, 'Human Nature'),
    (
        56,
        4,
        9,
        8,
        'Don´t Stop ´Til You Get Enough'
    ),
    (57, 4, 10, 8, 'The Girl Is Mine'),
    (58, 4, 9, 8, 'Remember the Time');
-- Canciones adicionales para Taylor Swift
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (59, 5, 11, 5, 'Wildest Dreams'),
    (60, 5, 11, 5, 'Bad Blood'),
    (61, 5, 10, 'Country', 'You Belong with Me'),
    (62, 5, 11, 5, 'Style'),
    (63, 5, 10, 'Country', 'Fifteen'),
    (64, 5, 11, 5, 'Out of the Woods'),
    (65, 5, 11, 5, 'New Romantics');
-- Canciones adicionales para Bruno Mars
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (66, 6, 12, 8, 'Grenade'),
    (67, 6, 14, 1, 'That´s What I Like'),
    (68, 6, 13, 1, 'Treasure'),
    (69, 6, 14, 1, 'Chunky'),
    (70, 6, 14, 1, 'Perm'),
    (
        71,
        6,
        14,
        1,
        'Versace on the Floor'
    ),
    -- Canciones adicionales para Adele
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (73, 7, 16, 2, 'Set Fire to the Rain'),
    (74, 7, 15, 2, 'Turning Tables'),
    (75, 7, 15, 2, 'Rumour Has It'),
    (79, 7, 16, 2, 'When We Were Young');
-- Canciones adicionales para Drake
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (
        80,
        8,
        17,
        3,
        'Started From the Bottom'
    ),
    (81, 8, 18, 3, 'Nice for What'),
    (82, 8, 18, 3, 'Nonstop'),
    (83, 8, 18, 3, 'Money In The Grave'),
    (84, 8, 17, 3, 'One Dance'),
    (85, 8, 17, 3, 'Controlla'),
    (86, 8, 18, 3, 'Chicago Freestyle');
-- Canciones adicionales para Ariana Grande
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (87, 9, 21, 8, '34+35'),
    (88, 9, 20, 8, 'Imagine'),
    (89, 9, 20, 8, 'Needy'),
    (90, 9, 21, 8, 'POV'),
    (91, 9, 19, 8, 'Break Free'),
    (92, 9, 19, 8, 'No Tears Left to Cry'),
    (93, 9, 21, 8, 'My Hair');
-- Canciones adicionales para Coldplay
INSERT INTO "canciones" (
        "id",
        "artista_id",
        "album_id",
        "genero_id",
        "nombre"
    )
VALUES (95, 10, 23, 6, 'Clocks'),
    (96, 10, 23, 6, 'The Scientist'),
    (
        98,
        10,
        24,
        6,
        'Adventure of a Lifetime'
    ),
    (100, 10, 23, 6, 'In My Place');
--@block
UPDATE "canciones"
SET "estadodeanimo_id" = 6,
    "clima_id" = 2,
    "ocasion_id" = 7
WHERE "id" IN (1, 6, 11, 16, 21, 26, 31, 36, 41, 46);
UPDATE "canciones"
SET "ocasion_id" = 8,
    "clima_id" = 4,
    "estadodeanimo_id" = 8
WHERE "id" IN (2, 7, 12, 17, 22, 27, 32, 37, 42, 47);
UPDATE "canciones"
SET "ocasion_id" = 3,
    "clima_id" = 1,
    "estadodeanimo_id" = 3
WHERE "id" IN (3, 8, 13, 18, 23, 28, 33, 38, 43, 48);
UPDATE "canciones"
SET "ocasion_id" = 5,
    "clima_id" = 3,
    "estadodeanimo_id" = 5
WHERE "id" IN (4, 9, 14, 19, 24, 29, 34, 39, 44, 49);
UPDATE "canciones"
SET "ocasion_id" = 2,
    "clima_id" = 2,
    "estadodeanimo_id" = 2
WHERE "id" IN (5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
UPDATE "canciones"
SET "ocasion_id" = 1,
    "clima_id" = 1,
    "estadodeanimo_id" = 1
WHERE "id" IN (51, 56, 61, 66, 71, 76, 81, 86, 91, 96);
UPDATE "canciones"
SET "ocasion_id" = 9,
    "clima_id" = 4,
    "estadodeanimo_id" = 9
WHERE "id" IN (52, 57, 62, 67, 72, 77, 82, 87, 92, 97);
UPDATE "canciones"
SET "ocasion_id" = 10,
    "clima_id" = 1,
    "estadodeanimo_id" = 9
WHERE "id" IN (53, 58, 63, 68, 73, 78, 83, 88, 93, 98);
UPDATE "canciones"
SET "ocasion_id" = 8,
    "clima_id" = 2,
    "estadodeanimo_id" = 7
WHERE "id" IN (54, 59, 64, 69, 74, 79, 84, 89, 94, 99);
UPDATE "canciones"
SET "ocasion_id" = 4,
    "clima_id" = 1,
    "estadodeanimo_id" = 4
WHERE "id" IN (55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
--@block
UPDATE "canciones"
SET "duracion" = 130
WHERE "id" IN (1, 6, 11, 16, 21, 26, 31, 36, 41, 46);
UPDATE "canciones"
SET "duracion" = 160
WHERE "id" IN (2, 7, 12, 17, 22, 27, 32, 37, 42, 47);
UPDATE "canciones"
SET "duracion" = 200
WHERE "id" IN (3, 8, 13, 18, 23, 28, 33, 38, 43, 48);
UPDATE "canciones"
SET "duracion" = 110
WHERE "id" IN (4, 9, 14, 19, 24, 29, 34, 39, 44, 49);
UPDATE "canciones"
SET "duracion" = 166
WHERE "id" IN (5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
UPDATE "canciones"
SET "duracion" = 210
WHERE "id" IN (51, 56, 61, 66, 71, 76, 81, 86, 91, 96);
UPDATE "canciones"
SET "duracion" = 260
WHERE "id" IN (52, 57, 62, 67, 72, 77, 82, 87, 92, 97);
UPDATE "canciones"
SET "duracion" = 119
WHERE "id" IN (53, 58, 63, 68, 73, 78, 83, 88, 93, 98);
UPDATE "canciones"
SET "duracion" = 140
WHERE "id" IN (54, 59, 64, 69, 74, 79, 84, 89, 94, 99);
UPDATE "canciones"
SET "duracion" = 179
WHERE "id" IN (55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
--@block
INSERT INTO "genero" ("nombre")
VALUES ('Funk'),
    (2),
    ('Hip-Hop'),
    ('Country'),
    (5),
    (6),
    ('Electrónica'),
    ('R&B');
INSERT INTO "estadodeanimo" ("nombre")
VALUES ('Animado'),
    ('Sereno'),
    ('Feliz'),
    ('Divertido'),
    ('Tranquilo'),
    ('Motivado'),
    ('Aventurero'),
    ('Relajado'),
    ('Concentrado');
INSERT INTO "ocasion" ("nombre")
VALUES ('Social'),
    ('Meditar'),
    ('Celebracion'),
    ('Jugando'),
    ('Dormir'),
    ('Ejercicio fisico'),
    ('Viajando'),
    ('Limpieza'),
    ('Estudiar'),
    ('Relajacion');
INSERT INTO "clima" ("nombre")
VALUES ('Despejado'),
    ('Soleado'),
    ('Lluvioso'),
    ('Nublado');