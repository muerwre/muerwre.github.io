## 1. docker-mailserver SSL alert number 42

 I was getting following error after setting up TLS certificates in docker-mailserver after setting it up with `letsencrypt`:

```
TLS handshaking: SSL_accept() failed: error:14094412:SSL routines:ssl3_read_bytes:sslv3 alert bad certificate: SSL alert number 42
```

The problem was caused by two reasons
### 1.1. Letsencrypt and wildcard domains

My `MX` domain was `example.com`, bu `letsencrypt` have been set up with wildcard certificate on `*.example.com`.

So, specifying `SSL_MODE=letsencrypt` made it searching for `/etc/letsencrypt/mail.example.com`, when it was just `/etc/letsencrypt/example.com`

**SOLUTION**: 

Change .env file to:

- `SSL_MODE=manual`
- `SSL_KEY_PATH=/etc/letsencrypt/example.com/fullchain.pem`
- `SSL_KEY_PATH=/etc/letsencrypt/example.com/privkey.pem`

Don't forget to modify `docker-compose` volumes and pass certs from host filesystem. Note: they're not `mail.example.com`, they're just `example.com`.

This [ticket](https://github.com/docker-mailserver/docker-mailserver/issues/1607) describes it well.

### 1.2. Docker was using internal hostname of docker-mailserver

Internal hostname for `docker-mailserver` was just `mail`, and other container tried to send emails to `mail:25`.

**SOLUTION:** change internal hostname in your app settings to actual, specified in your certificates and MX record.

### 2. docker-mailserver not listening on 25 port (SMTP)

Solution was to add quotes in your docker compose, just like that:

```yaml
  ports:
    - "25:25"
```

This [ticket](https://github.com/docker-mailserver/docker-mailserver/issues/684#issuecomment-322029794) solved it

### 3. Connect to docker-mailserver from other docker-compose

I've had `mailserver/compose.yaml` and `application/compose.yaml` and needed to connect `application` to `mailserver`.

```yaml
// application/compose.yaml
app:
  networks:
    - shared
networks:
  shared:
	driver: bridge
```

```yaml
/// mailserver/compose.yaml
mail:
  networks:
     - "application_shared"
networks:
  application_shared:
    external: true
```

### 4. How to convert DKIM mail.txt to DNS record

My `mail.txt` was like:

```
mail._domainkey IN      TXT     ( "v=DKIM1; h=sha256; k=rsa; "
          "p=sOmEJuNkLiKeRaNdOmOrLikeThat"
          "eVeNmOrERANdOmStuFf" )  ; ----- DKIM key mail for example.com
```

**SOLUTION**: concatenate all strings inside round brackets:

```
v=DKIM1; h=sha256; k=rsa; p=sOmEJuNkLiKeRaNdOmOrLikeThateVeNmOrERANdOmStuFf
```

And add them as a `TXT` record on my DNS provider control panel under `mail._domainkey` record.

Solution was right in [official documentation](https://docker-mailserver.github.io/docker-mailserver/edge/config/best-practices/dkim_dmarc_spf/#dkim-dns), just hidden a little bit.