# Schemas

### SQLite

> **Note:** Some modifiers or functions may differ on SQLite. Check the SQLite documentation for supported default functions.

```dart
import 'package:dartonic/dartonic.dart';
import 'package:dartonic/columns.dart';

final usersTable = sqliteTable('users', {
  'id': integer().primaryKey(autoIncrement: true),
  'name': text().notNull(),
  'age': integer(),
});
```

<br/>

### PostgreSQL

> **Note:** Some modifiers or functions may differ on PostgreSQL. Check the PostgreSQL documentation for supported default functions.

```dart
final usersTable = pgTable('users', {
  'id': serial().generatedAlwaysAsIdentity(),
  'name': varchar(length: 100).notNull(),
  'age': integer(),
});
```

<br/>

### MySQL

> **Note:** Auto increment is defined differently on MySQL. Ensure your `primaryKey()` method is correctly implemented for MySQL.

```dart
final usersTable = mysqlTable('users', {
  'id': integer().primaryKey(autoIncrement: true),
  'name': varchar(length: 100).notNull(),
  'age': integer(),
});
```

<br/>
