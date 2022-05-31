# openresty-sse-proxy
openresty-sse-proxy


## testing 

* local with dynamic proxy

```code
curl -i -H "token:demoapp" http://localhost/ssev2\?myhost\=sse\&port\=3000

curl -i -H "token:demoapp" http://localhost/ssev2\?myhost\=sse2\&port\=3000

```


* with sse client

```code
curl -i -H "token:demoapp" http://localhost
```