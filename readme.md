# David Nicholas Express / React Starter

This is a quick start pack to help me get started with react / express projects.

This project uses yarn over npm.

## .env

```
API_PORT=8080
VITE_PORT=3000
PG_USER=''
PG_HOST=''
PG_DATABASE=''
PG_PASSWORD=''
PG_PORT=5432
```

## Scripts

Here is a run down of the scripts and what they are doing.

| Script Name    | Description                                        |
| :------------- | :------------------------------------------------- |
| build          | Builds our React App                               |
| dev-api        | Starts our api using Nodemon to provide hot reload |
| dev-client     | Starts our React App                               |
| dev            | Runs both dev-api and dev-client concurrently.     |
| start-api      | Starts our api.                                    |
| start-client   | starts our React app.                              |
| start          | Runs both start-api and start-client concurrently. |
| install-api    | installs the packages for the api.                 |
| install-client | installs the packages for the React app.           |
| postinstall    | runs both install-api install-client               |

## Api

Use Postgres over all else.

Connectors is where our connection details go.

Model is where our queries go.

Routes. Make sure to add new routes to index.js

## Client

REACT.

I added Chakra by default but feel free to use whatever.

Vite rules.
