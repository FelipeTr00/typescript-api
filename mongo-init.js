db = db.getSiblingDB('typescript_api');

db.createUser({
  user: 'api_user',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'typescript_api' }],
});

db.items.insertMany([
  {
    name: 'Item 1',
    description: 'Este é o primeiro item de teste',
    price: 10.99,
  },
  {
    name: 'Item 2',
    description: 'Este é o segundo item de teste',
    price: 19.99,
  },
  {
    name: 'Item 3',
    description: 'Este é o terceiro item de teste',
    price: 5.99,
  },
]);

db.users.insertMany([
  {
    username: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password123',
  },
  {
    username: 'testuser2',
    email: 'testuser2@example.com',
    password: 'password123',
  },
]);
