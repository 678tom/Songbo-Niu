# LMS API (how to setup backend)

### Potsgres

Download: https://www.postgresql.org/download/

Tutorial: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/

Make sure you create a Fem Entity db on your local computer, manually make tables representing the things you're working with. In order to make the tables for your database (which you will need when connecting Prisma), run:

```
psql -d fementity 
```

Then here, create new tables. PSQL syntax for creating tables and inserting data are the same as mySQL.

Additional help : https://www.postgresql.org/docs/

### Docker

Download: https://docs.docker.com/get-docker/ 

Run this command to set up local Docker container for your postgres DB:

```
docker run --name fementity -e POSTGRES_PASSWORD=password -e POSTGRES_DB=fementity -p=5432:5432 -d postgres
```

### Prisma

Tutorial: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres

Make sure that the DB link in you .env file is postgresql://USERNAME:PASSWORD@localhost:5432/DBNAME?schema=public 

### Troubleshooting

If you are unable to introspect with prisma you may need to change the permissions a user has to access you local DB / tables. Here's a thread that was helpful for me: https://github.com/prisma/prisma/issues/3041

Any other issues? Feel free to ask!