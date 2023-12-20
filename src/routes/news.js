const express = require("express");
const news_router = express.Router();
const axios = require("axios"); // help to fetch data

news_router.get("", async (req, res) => {
  try {
    const nwes_api = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts`);
    res.render("news", { articles: nwes_api.data });

    //   nwes_api.data
  } catch (error) {
    if (error.response) {
      res.render("news", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("news", { articles: null });
      console.log(error.request);
    } else {
      res.render("news", { articles: null });
      console.log("error:", error.message);
    }
  }
});

news_router.get("/:id", async (req, res) => {
  let article_id = req.params.id;
  try {
    const nwes_api = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts/${article_id}`
    );
    res.render("single_news", { article: nwes_api.data });
  } catch (error) {
    if (error.response) {
      res.render("single_news", { article: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("single_news", { article: null });
      console.log(error.request);
    } else {
      res.render("single_news", { article: null });
      console.log("error:", error.message);
    }
  }
});

news_router.post("", async (req, res) => {
  let search = req.body.search;
  try {
    const nwes_api = await axios.get(
      `https://raddy.dev/wp-json/wp/v2/posts?search=${search}`
    );
    res.render("search_news", { articles: nwes_api.data });
  } catch (error) {
    if (error.response) {
      res.render("search_news", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("search_news", { articles: null });
      console.log(error.request);
    } else {
      res.render("search_news", { articles: null });
      console.log("error:", error.message);
    }
  }
});

module.exports = news_router;
