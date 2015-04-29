# Development

In order to view this site locally:

1. Install node.
2. Execute:

```
npm update
node run dev
```

Then, open your browser at [http://localhost:8080](http://localhost:8080). Script will watch the changes and rebuild site as necessary.



# Deployment

This site can be served by any server capable of handling static web sites. That includes Amazon S3.

To create deployable version execute `node run build`, then xcopy contents of the `build` folder to your S3 bucket.

Settings:

* Index Document is `index.html`
* Error Document is `404.html`
