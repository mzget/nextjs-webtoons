"use strict";
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express();
    // server.get("/p/:id", (req, res) => {
    //     const actualPage = "/post";
    //     const queryParams = { title: req.params.id };
    //     app.render(req, res, actualPage, queryParams);
    // });
    server.get("/", (req, res, next) => {
        res.send('Hello from App Engine!');
        // return handle(req, res);
    });
    server.get("*", (req, res) => {
        console.log("server.js", req.url);
        return handle(req, res);
    });
    server.listen(process.env.PORT, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on PORT ${process.env.PORT}`);
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
