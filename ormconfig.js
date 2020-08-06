module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": [
        "dist/Core/**/entities/*.entity{.ts,.js}"
        //"src/Core/**/entities/*.entity.ts"
    ],
    "migrations": [
        // "src/Migrations/*.ts"
        "dist/Migrations/*.js"
    ],
    "cli": {
        "migrationsDir": "src/Migrations"
    },
    "synchronize": false
}