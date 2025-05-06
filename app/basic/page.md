# Basic Usage

For use Dartonic, you need to define your database schema and initialize Dartonic with the schema and database URL. Here's an example:

```dart
// Define your users table schema
final usersTable = sqliteTable('users', {
  'id': integer().primaryKey(autoIncrement: true),
  'name': text().notNull(),
  'age': integer(),
});

// Initialize Dartonic with the schema and database URL
final dartonic = Dartonic("sqlite::memory:", schemas: [usersTable]);

// Sync the database and get the database instance
final db = await dartonic.sync();

// Select all users from the users table
final users = await db.select().from('users');
print(users); // []
```
