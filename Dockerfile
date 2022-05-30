FROM openresty/openresty:1.21.4.1-0-alpine-fat
RUN apk add --no-cache git &&  /usr/local/openresty/luajit/bin/luarocks install lua-resty-sse
