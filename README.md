## Requirements

-   You will need firebase-creds.json on the root directory
-   Docker
-   Correct the sendMessage token with the right token

## Running

-   Make sure you have Docker running

```
docker build -t firebase-issue .
docker run -dp 127.0.0.1:8080:8080 firebase-issue
```

```
curl --location 'http://127.0.0.1:8080/sample/'
```
