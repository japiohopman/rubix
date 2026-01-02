import { readFileSync } from "fs";
import mysql from "mysql2/promise";

const articles = JSON.parse(
  readFileSync("/home/ubuntu/academyinc_articles.json", "utf-8")
);

async function loadArticles() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_URL?.split("@")[1]?.split("/")[0] || "localhost",
    user: process.env.DATABASE_URL?.split("://")[1]?.split(":")[0] || "root",
    password: process.env.DATABASE_URL?.split(":")[2]?.split("@")[0] || "",
    database: process.env.DATABASE_URL?.split("/").pop() || "academyinc",
  });

  try {
    for (const article of articles) {
      await connection.execute(
        "INSERT INTO articles (title, slug, excerpt, content, category, author, publishedAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          article.title,
          article.slug,
          article.excerpt,
          article.content,
          article.category,
          article.author,
          new Date(article.publishedAt),
        ]
      );
      console.log(`✓ Loaded: ${article.title}`);
    }
    console.log(`\n✓ All ${articles.length} articles loaded successfully!`);
  } catch (error) {
    console.error("Error loading articles:", error.message);
  } finally {
    await connection.end();
  }
}

loadArticles();
