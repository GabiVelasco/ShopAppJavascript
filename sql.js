// Initialize an empty in-memory database
const db = new SQL.Database();

// Load an SQLite database file
fetch('sql.js')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // Create a new database instance from the buffer
    const db = new SQL.Database(new Uint8Array(buffer));
    // Now you can execute SQL queries against the database
  });


  // Execute SQL statements
db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT,
      price REAL
    )
  `);
  
  db.run(`
    INSERT INTO products (name, price)
    VALUES ('Product 1', 10.99)
  `);
  
  db.run(`
    INSERT INTO products (name, price)
    VALUES ('Product 2', 19.99)
  `);
  

const results = db.exec('SELECT * FROM products');
const products = results[0].values;
console.log(products);
