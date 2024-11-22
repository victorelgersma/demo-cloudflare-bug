Recreate the bug in the workerd/ cloudlfare runtime that shows 147 network packets being used to encode /blogs, described in https://github.com/cloudflare/workerd/issues/1235

```
npm run build
```

```
npm run preview
```

then open wireshark, inspect at the lo0 (loopback interface), start recording and refresh the page running on port 8788. 

to filter tcp packets:


tcp.port == 8788

filter:




click on the GET to /blogs, then "Follow TCP Stream" - then you can notice that each line corresponds to its own packet


https://excalidraw.com/#json=Xfid5LGgTzuvaaLC8ohIn,n5LBEFlWs0mTtcExCsfSIQ


