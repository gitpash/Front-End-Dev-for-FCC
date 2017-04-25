import React from "react";
import api from "./api";
import renderer from "react-test-renderer";


test('if api has property typeOf function', () => {
  const articles = api.fetchArticles
  expect(articles).toBeInstanceOf(Function)
})

test('to return promise', () => {

  return expect(api.fetchArticles('cat')).toBeInstanceOf(Object)
})

test('to return response.data', async () => {
  await console.log(api.fetchArticles('cat'))
})