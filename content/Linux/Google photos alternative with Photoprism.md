[Photo Prism](https://photoprism.app/) is a free alternative to Google photos, can be set up with #docker.

## Docker compose file to run it

Check out current [example](https://dl.photoprism.app/docker/docker-compose.yml) at photoprism's [documentation](https://docs.photoprism.app/getting-started/docker-compose/).

```yaml
version: '3.5'

services:
  photoprism:
    container_name: photoprism__app
    image: photoprism/photoprism:latest
    depends_on:
      - mariadb
    restart: unless-stopped
    security_opt:
      - seccomp:unconfined
      - apparmor:unconfined
    ports:
      - 2342:2342 # HTTP port (host:container)
    environment:
      PHOTOPRISM_ADMIN_PASSWORD: "password"
      PHOTOPRISM_SITE_URL: "https://service.url/"
      PHOTOPRISM_ORIGINALS_LIMIT: 5000
      PHOTOPRISM_HTTP_COMPRESSION: "gzip"
      PHOTOPRISM_DEBUG: "false"          
      PHOTOPRISM_PUBLIC: "false"      
      PHOTOPRISM_READONLY: "false"    
      PHOTOPRISM_EXPERIMENTAL: "false"
      PHOTOPRISM_DISABLE_CHOWN: "false"
      PHOTOPRISM_DISABLE_WEBDAV: "false" 
      PHOTOPRISM_DISABLE_SETTINGS: "false"
      PHOTOPRISM_DISABLE_TENSORFLOW: "false"
      PHOTOPRISM_DISABLE_FACES: "false"     
      PHOTOPRISM_DISABLE_CLASSIFICATION: "false"
      PHOTOPRISM_DARKTABLE_PRESETS: "false"     
      PHOTOPRISM_DETECT_NSFW: "false"           
      PHOTOPRISM_UPLOAD_NSFW: "true"            
      PHOTOPRISM_DATABASE_DRIVER: "mysql"       
      PHOTOPRISM_DATABASE_SERVER: "mariadb:3306"
      PHOTOPRISM_DATABASE_NAME: "photoprism"    
      PHOTOPRISM_DATABASE_USER: "root"         
      PHOTOPRISM_DATABASE_PASSWORD: "insecure" 
      PHOTOPRISM_SITE_TITLE: "PhotoPrism"
      PHOTOPRISM_SITE_CAPTION: "Browse Your Life"
      PHOTOPRISM_SITE_DESCRIPTION: ""
      PHOTOPRISM_SITE_AUTHOR: ""
      HOME: "/photoprism"
    working_dir: "/photoprism"
    volumes:
      - "./data/originals:/photoprism/originals"    
      - "./data/imports:/photoprism/import"
      - "./data/storage:/photoprism/storage"
  mariadb:
    container_name: photoprism__db
    restart: unless-stopped
    image: mariadb:10.6
    security_opt:
      - seccomp:unconfined
      - apparmor:unconfined
    command: mysqld --innodb-buffer-pool-size=128M --transaction-isolation=READ-COMMITTED --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --max-connections=512 --innodb-rollback-on-timeout=OFF --innodb-lock-wait-timeout=120
    volumes:
      - "./database:/var/lib/mysql" # Important, don't remove
    environment:
      MYSQL_ROOT_PASSWORD: insecure
      MYSQL_DATABASE: photoprism
      MYSQL_USER: photoprism
      MYSQL_PASSWORD: insecure
```