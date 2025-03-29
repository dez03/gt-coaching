const Database = require('better-sqlite3');
const db = new Database('store.db');

// Create table for purchases if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    product_id INTEGER NOT NULL,
    payment_intent_id TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

module.exports = db;