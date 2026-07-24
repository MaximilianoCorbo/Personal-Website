CREATE TABLE "playlists"(
    "id" SERIAL PRIMARY KEY,
    "usuario_id" INTEGER NOT NULL,
    "nombre" VARCHAR(255) NOT NULL
);
CREATE TABLE "albums"(
    "id" SERIAL PRIMARY KEY,
    "artista_id" INTEGER NOT NULL,
    "nombrealbum" VARCHAR(255) NOT NULL
);
CREATE TABLE "canciones"(
    "id" SERIAL PRIMARY KEY,
    "artista_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "genero_id" INTEGER,
    "nombre" VARCHAR(255),
    "estadodeanimo_id" INTEGER,
    "ocasion_id" INTEGER,
    "clima_id" INTEGER,
    "duracion" INTEGER
);
CREATE TABLE "playlists_canciones"(
    "id" SERIAL PRIMARY KEY,
    "cancion_id" INTEGER NOT NULL,
    "playlist_id" INTEGER NOT NULL,
);
CREATE TABLE "usuarios"(
    "id" SERIAL PRIMARY KEY,
    "mail" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "contrasenia" VARCHAR(255) NOT NULL,
    "fotousuarios" VARCHAR
);
CREATE TABLE "artistas"(
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL,
    "genero_id" INTEGER
);
CREATE TABLE "genero" (
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL
);
CREATE TABLE "estadodeanimo" (
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL
);
CREATE TABLE "ocasion" (
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL
);
CREATE TABLE "clima" (
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(255) NOT NULL
);
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_artista_id_foreign" FOREIGN KEY("artista_id") REFERENCES "artistas"("id");
ALTER TABLE "playlists"
ADD CONSTRAINT "playlists_usuario_id_foreign" FOREIGN KEY("usuario_id") REFERENCES "usuarios"("id");
ALTER TABLE "playlists_canciones"
ADD CONSTRAINT "playlistcanciones_cancion" FOREIGN KEY("cancion_id") REFERENCES "canciones"("id");
ALTER TABLE "playlists_canciones"
ADD CONSTRAINT "playlistcanciones_playlist" FOREIGN KEY("playlist_id") REFERENCES "playlists"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_album_id_foreign" FOREIGN KEY("album_id") REFERENCES "albums"("id");
ALTER TABLE "albums"
ADD CONSTRAINT "albums_artista_id_foreign" FOREIGN KEY("artista_id") REFERENCES "artistas"("id");
ALTER TABLE "playlists"
ADD CONSTRAINT "playlist_canciones_id" FOREIGN KEY("cancion_id") REFERENCES "canciones"("id");
ALTER TABLE "artistas"
ADD CONSTRAINT "artistas_genero_id" FOREIGN KEY("genero_id") REFERENCES "genero"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_genero_id" FOREIGN KEY("genero_id") REFERENCES "genero"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_estado_id" FOREIGN KEY("estadodeanimo_id") REFERENCES "estadodeanimo"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_ocasion_id" FOREIGN KEY("ocasion_id") REFERENCES "ocasion"("id");
ALTER TABLE "canciones"
ADD CONSTRAINT "canciones_clima_id" FOREIGN KEY("clima_id") REFERENCES "clima"("id");