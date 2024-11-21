Run astro app with workerd 

Attempting to recreate the bug in the workerd/ cloudlfare runtime that shows far too many network packets


```
npm run build
```

```
npm run preview
```

then open wireshark, inspect at the lo0 (loopback interface), start recording and refresh the page running on port 8788. 

type: `tcp.port == 8788` in the loopback interface
