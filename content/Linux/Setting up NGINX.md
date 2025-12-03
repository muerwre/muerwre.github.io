## Fallback url for SPA-s

```nginx
server {
  # ...
  location / {
    # First attempt to serve request as file, then
    # as directory, then fall back to displaying a 404.
    try_files $uri $uri/ =404;
  }
  # ...
}
```

## Set up for uploads

```nginx
server {
  # ...
  client_max_body_size 200M;
  # ...
}
```

## Reverse proxy for https 

Given config forwards `https` traffic to `http` on port `8080` for https://next.vault48.org
 with http2 support if possible.
 
```nginx
server {
  listen 80;
  server_name next.vault48.org;
  return 301 https://next.vault48.org$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  
  # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/vault48.org/fullchain.pem; 
  ssl_certificate_key /etc/letsencrypt/live/vault48.org/privkey.pem; 
  ssl_trusted_certificate /etc/letsencrypt/live/vault48.org/chain.pem;
  
  server_name next.vault48.org;
  
  location / {
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    proxy_pass http://127.0.0.1:8080;
  }
}
```
