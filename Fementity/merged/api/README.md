# Directory API

This is a generic Node API built using Express.

### Installing Dependencies

```
npm install
```

### Running API

```
# Compile API
npm run build
# Run the server
npm start
```

## Dev Workflow

### Setting up DB

To setup a local postgres instance for fementity run the following docker container command.

```
docker run --name fementity -e POSTGRES_PASSWORD=password -e POSTGRES_DB=fementity -p=5432:5432 -d postgres
```

### Install Dev Dependencies

```
npm install
```

### Setting ENV's

Copy the env values from the provided `.env.example` and make modifications to fit your specific system.

### Running the API with Hotloading

```
npm run dev
```

### Formatting Code with Prettier

```
npm run prettier
```
