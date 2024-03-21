This is translation of article from [clsv.ru](https://clsv.ru/linux/lets_encrypt_eto_legko_i_prosto_60), which explains how to automate certbot's well-known, also known as HTTP challenge for wildcard certs renewal.

You'll need 4 scripts:

1. Authentication script, which will write authentication file:

```shell
#!/bin/bash
echo $CERTBOT_VALIDATION > /var/www/html/.well-known/$CERTBOT_TOKEN
```

2. Cleanup script, that will delete that

```shell
#!/bin/bash
rm -f /var/www/html/.well-known/$CERTBOT_TOKEN
```

3. Initial cert acquiring script:

```shell
certbot certonly \
  --preferred-challenges=http --manual \
  --manual-auth-hook /path/to/auth.sh \
  --manual-cleanup-hook /oath/to/clean.sh
  -d "yourhost.org,*.yourhost.org" \
  --manual-public-ip-logging-ok
```

4. Renewal script itself, to put it in crontab (or /etc/cron.weekly)

```shell
certbot renew --manual-public-ip-logging-ok \
  --manual-auth-hook /path/to/auth.sh \
  --manual-cleanup-hook /path/to/clean.sh

systemctl reload nginx
```

Don't forget to configure your http server to serve `.well-known`.
