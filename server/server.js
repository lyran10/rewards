import React from "react"
import express from "express"
import fs from "fs"
import path from "path"
import { Provider } from 'react-redux';
import {StaticRouter} from "react-router-dom/server"
import App from "../src/App.tsx"
import { renderToString } from "react-dom/server"
import { store } from "../src/store/store.tsx";

// const PORT = process.env.REACT_APP_PORT; 
// console.log(PORT)
const app = express()

app.use("^/$", (req,res) => {

  fs.readFile(path.resolve("./build/index.html"),"utf-8",(err, data) => {
    if(err) return res.status(500).send("server error")
      console.log(req.url)
    let context = {}
    let app = renderToString(
      <StaticRouter location={`${req.url}`} context={context}>
      <Provider store={store}>
        <App/>
      </Provider>
      </StaticRouter>
    )

      if (context.url) {
        return res.redirect(301, context.url);
      }

      if (context.status === 404) {
        res.status(404);
      }

    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${app}</div>`
      )
    )

  })

})

app.use(express.static(path.resolve(__dirname,"..","build")))

app.get("*", (req,res) => {
console.log(req.url)
  fs.readFile(path.resolve("./build/index.html"),"utf-8",(err, data) => {
    if(err) return res.status(500).send("server error")

    let context = {}
    let app = renderToString(
      <StaticRouter location={`${req.url}`} context={context}>
        <Provider store={store}>
          <App/>
        </Provider>
      </StaticRouter>
    )

      if (context.url) {
       return res.redirect(301, context.url);
      }

      if (context.status === 404) {
       res.status(404);
      }

    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${app}</div>`
      )
    )

  })

})

app.listen(5000,() => {
  console.log(`running ${5000}`)
})