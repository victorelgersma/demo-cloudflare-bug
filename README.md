Recreate the bug in the workerd/ cloudlfare runtime that shows far too many network packets, mentioned in https://github.com/cloudflare/workerd/issues/1235

```
npm run build
```

```
npm run preview
```

then open wireshark, inspect at the lo0 (loopback interface), start recording and refresh the page running on port 8788. 

type: `tcp.port == 8788` to filter TCP packets


click on the GET to /blogs, then "Follow TCP Stream" - then you can notice that each line corresponds to its own packet

diagram: https://excalidraw.com/#json=VfjrweZK0-stdrXv3h_43,TN4QM9cUJbcRkOYCm_8zhA




