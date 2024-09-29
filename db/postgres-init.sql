-- Create Items
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL
);

-- Items Values
INSERT INTO items (name, description, price) VALUES
  ('Item 1', 'Este é o primeiro item de teste', 10.99),
  ('Item 2', 'Este é o segundo item de teste', 19.99),
  ('Item 3', 'Este é o terceiro item de teste', 5.99);

-- Create Users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Users Values
INSERT INTO users (username, email, password) VALUES
  ('testuser1', 'testuser1@example.com', 'password123'),
  ('testuser2', 'testuser2@example.com', 'password123');
