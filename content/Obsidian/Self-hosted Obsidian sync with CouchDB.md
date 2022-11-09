- [Main documentation](https://github.com/vrtmrz/obsidian-livesync)
- [Setting up couchdb](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/setup_own_server.md)

## Setting up environment 

First, you should create `docker-compose.yml` with the following contents:

```yaml
version: '3'
services:
  couchserver:
    container_name: obsidian__database
    image: couchdb
    restart: always
    ports:
      - "5984:5984"
    environment:
      - COUCHDB_USER=user
      - COUCHDB_PASSWORD=somepassword
    volumes:
      - ./couchdb/dbdata:/opt/couchdb/data
      - ./couchdb/local.ini:/opt/couchdb/etc/local.ini
```

Then create initial config at `./couchdb/local.ini`:

```ini
[couchdb]
single_node=true
max_document_size=50000000
max_http_request_size=4294967296

[chttpd]
require_valid_user = true

[chttpd_auth]
require_valid_user = true
authentication_redirect = /_utils/session.html

[httpd]
WWW-Authenticate = Basic realm="couchdb"
enable_cors = true

[cors]
origins = app://obsidian.md,capacitor://localhost,http://localhost
credentials = true
headers = accept, authorization, content-type, origin, referer
methods = GET, PUT, POST, HEAD, DELETE
max_age = 3600
```

Then, in order to have sync on mobile devices, we will need a reverse proxy with nginx at `/etc/nginx/sites-enabled/obsidian-couchdb`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name couchdb.yourhost.com;
    return 301 https://$host$request_uri;
}

server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;

        ssl_certificate /etc/letsencrypt/live/yourhost.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/yourhost.com/privkey.pem; # managed by Certbot
        ssl_trusted_certificate /etc/letsencrypt/live/yourhost.com/chain.pem;

        server_name couchdb.yourhost.com;
        client_max_body_size 200M;

        location / {
                proxy_redirect off;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

                proxy_pass http://127.0.0.1:5984;
        }
}
```

## Setting up Obsidian

1. Install `Self-hosted LiveSync` plugin
2. Change host to `https://yourhost.com`
3. Specify username and password
4. Press `test`, then `fetch database`