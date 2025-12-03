This article describes parsing different proxy links into xray outbound configs. Using tools like [hopsayer's vless link parser](https://github.com/hopsayer/vless-link2xray-config) , we can create tool to parse free proxy lists and run xray with resulting config.
## 1. VLESS

**Link Format:** `vless://UUID@HOST:PORT?params#NAME`

**Parsing Steps:**
1. Extract UUID (user ID) from before `@`
2. Extract host and port from between `@` and `?`
3. Parse query parameters (encryption, flow, type, security, sni, host, path, etc.)
4. Extract fragment as display name

**Xray Outbound Mapping:**
```python
{
  "protocol": "vless",
  "settings": {
    "vnext": [{
      "address": host,
      "port": port,
      "users": [{
        "id": UUID,
        "encryption": params.get("encryption", "none"),
        "flow": params.get("flow"),  # For XTLS
        "security": "auto"
      }]
    }]
  },
  "streamSettings": create_stream_settings(params),
  "tag": unique_tag
}
```

---
## 2. VMESS

**Link Format:** `vmess://BASE64_ENCODED_JSON`

**Parsing Steps:**
1. Base64 decode the entire payload
2. Parse as JSON containing: `{add, port, id, net, type, host, path, tls, sni, alpn, fp, ps}`
3. Map field names (supports both short and long names)

**Xray Outbound Mapping:**
```python
{
  "protocol": "vmess",
  "settings": {
    "vnext": [{
      "address": vmess_config["add"],
      "port": vmess_config["port"],
      "users": [{
        "id": vmess_config["id"],
        "alterId": vmess_config.get("aid", 0),
        "security": vmess_config.get("scy", "auto")
      }]
    }]
  },
  "streamSettings": create_stream_settings(params),
  "tag": unique_tag
}
```

---
## 3. Trojan

**Link Format:** `trojan://PASSWORD@HOST:PORT?params#NAME`

**Parsing Steps:**
1. Extract password from before `@`
2. Extract host and port from between `@` and `?`
3. Parse query parameters (type, security, sni, etc.)
4. Defaults: `type=tcp`, `security=tls`

**Xray Outbound Mapping:**
```python
{
  "protocol": "trojan",
  "settings": {
    "servers": [{
      "address": host,
      "port": port,
      "password": password,
      "level": 0
    }]
  },
  "streamSettings": create_stream_settings(params),
  "tag": unique_tag
}
```

**Key Difference:** Uses `servers` array instead of `vnext` (like VLESS/VMESS).

---
## 4. Shadowsocks

**Link Format:** `ss://BASE64(METHOD:PASSWORD)@HOST:PORT#NAME`

**Parsing Steps:**
1. Detect encoding type (fully encoded vs partially encoded)
2. Base64 decode to get `METHOD:PASSWORD@HOST:PORT`
3. Extract method (encryption), password, host, and port
4. Extract fragment as name

**Xray Outbound Mapping:**
```python
{
  "protocol": "shadowsocks",
  "settings": {
    "servers": [{
      "address": host,
      "port": port,
      "method": encryption_method,
      "password": password,
      "uot": False,
      "level": 0
    }]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "none"
  },
  "tag": unique_tag
}
```

**Key Difference:** Shadowsocks uses simple TCP/no security for streamSettings (doesn't use `create_stream_settings()`).