Recreate the bug in the workerd/ cloudlfare runtime that shows 147 network packets being used to encode /blogs, described in https://github.com/cloudflare/workerd/issues/1235

```
npm run build
```

```
npm run preview
```

then open wireshark, inspect at the lo0 (loopback interface), start recording and refresh the page running on port 8788. 

type: `tcp.port == 8788` to filter TCP packets


click on the GET to /blogs, then "Follow TCP Stream" - then you can notice that each line corresponds to its own packet

[Excalidraw with screenhots](https://excalidraw.com/#json=SyLFWCID1R1aHdUB39aeu,ClW3hq0zDn9TJND90FRmsw)


