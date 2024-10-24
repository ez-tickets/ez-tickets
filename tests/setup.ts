import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, expect } from "vitest";

const handlers = [
  // Categories
  http.get("http://localhost:8080/categories", () => {
    return HttpResponse.json(
      [
        { id: "1", name: "card1" },
        { id: "2", name: "card2" },
        { id: "3", name: "card3" },
        { id: "4", name: "card4" },
        { id: "5", name: "card5" },
        { id: "6", name: "card6" },
        { id: "7", name: "card7" },
        { id: "8", name: "card8" },
        { id: "9", name: "card9" },
        { id: "10", name: "card10" },
      ],
      { status: 200 },
    );
  }),
  // Categorized Products
  http.get("http://localhost:8080/products", ({ request }) => {
    const url = new URL(request.url);
    const _category_id = url.searchParams.get("category")!;
    return HttpResponse.json(
      [
        { id: "1", name: "Menu1", price: 600 },
        { id: "2", name: "Menu2", price: 700 },
        { id: "3", name: "Menu3", price: 800 },
        { id: "4", name: "Menu4", price: 1000 },
        { id: "5", name: "Menu5", price: 1500 },
        { id: "6", name: "Menu6", price: 1200 },
        { id: "7", name: "Menu7", price: 900 },
      ],
      { status: 200 },
    )
  }),
  // Product Details
  http.get("http://localhost:8080/products", ({ request }) => {
    const url = new URL(request.url);
    const _product_id = url.searchParams.get("id")!;
    return HttpResponse.json(
      {
        id: "1",
        name: "sampleMenu",
        description:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        options: [
          { id: "1", name: "キャラメルソース", price: 50 },
          { id: "2", name: "ねぎ", price: 100 },
          { id: "3", name: "もやし", price: 150 },
          { id: "4", name: "チョコレート", price: 20 },
          { id: "5", name: "バニラ", price: 80 },
        ],
        price: 850,
      },
      { status: 200 },
    )
  }),
  // Order
  http.post("http://localhost:8080/order", ({ request }) => {
    const url = new URL(request.url);
    const _table_id = url.searchParams.get("table")!;
    return HttpResponse.json({}, { status: 201 })
  })
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
