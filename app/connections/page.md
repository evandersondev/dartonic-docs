# Connections

Dartonic supports multiple databases through connection URIs:

- **SQLite (in memory):**

  ```dart
  final dartonic = Dartonic("sqlite::memory:");
  ```

<br/>

- **SQLite (from file):**

  ```dart
  final dartonic = Dartonic("sqlite:database/database.db");
  ```

<br/>

- **PostgreSQL:**

  ```dart
  final dartonic = Dartonic("postgres://username:password@localhost:5432/database");
  ```

<br/>

- **MySQL:**

  ```dart
  final dartonic = Dartonic("mysql://user:userpassword@localhost:3306/mydb");
  ```

<br/>
