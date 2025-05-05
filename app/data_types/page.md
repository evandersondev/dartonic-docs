# Data Types

## `interger`

```dart
final table = pgTable('table', {
	'int': integer(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"int" integer
);
*/
```

```dart
final table = pgTable('table', {
	'int1': integer().$default(10),
	'int2': integer(mode: 'boolean').$default(0),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"int1" integer DEFAULT 10,
	"int2" integer DEFAULT 0,
);
*/
```

> Add mode to `integer` to set default value to `0` or `1` (boolean) for sqlite database.

## `smallint`

```dart
final table = pgTable('table', {
	'smallint': smallint(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"smallint" smallint
);
*/
```

## `bigint`

```dart
final table = pgTable('table', {
    'bigint': bigint(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
    "bigint" bigint
);
*/
```

## `serial`

```dart

final table = pgTable('table', {
  'serial': serial(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"serial" serial NOT NULL
);
*/
```

## `smallserial`

```dart
final table = pgTable('table', {
  'smallserial': smallserial(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"smallserial" smallserial NOT NULL
);
*/
```

## `bigserial`

```dart
final table = pgTable('table', {
  'bigserial': bigserial(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"bigserial" bigserial NOT NULL
);
*/
```

## `boolean`

```dart
final table = pgTable('table', {
	'boolean': boolean(),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"boolean" boolean
);
*/
```

## `text`

```dart
final table = pgTable('table', {
  'text': text(),
});

// will be inferred as text: "value1" | "value2" | null
'text': text(enumerate: ["value1", "value2"])

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"text" text
);
*/
```

> For TEXT, mode defaults to 'string', but 'json' is also supported.

## `varchar`

```dart
final table = pgTable('table', {
  'varchar1': varchar(),
  'varchar2': varchar(length: 256),
});

// will be inferred as text: "value1" | "value2" | null
'varchar': varchar(enumerate: ["value1", "value2"]),

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"varchar1" varchar,
	"varchar2" varchar(256)
);
*/
```

## `char`

```dart
final table = pgTable('table', {
  'char1': char(),
  'char2': char(length: 256),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"char1" char,
	"char2" char(256)
);
*/
```

## `numeric`

```dart
final table = pgTable('table', {
  'numeric1': numeric(),
  'numeric2': numeric(precision: 100),
  'numeric3': numeric(precision: 100, scale: 20),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"numeric1" numeric,
	"numeric2" numeric(100),
	"numeric3" numeric(100, 20),
);
*/
```

## `decimal`

```dart
final table = pgTable('table', {
  'decimal1': decimal(),
  'decimal2': decimal(precision: 100),
  'decimal3': decimal(precision: 100, scale: 20),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"decimal1" decimal,
	"decimal2" decimal(100),
	"decimal3" decimal(100, 20),
);
*/
```

## `real`

```dart
final table = pgTable('table', {
	'real1': real(),
	'real2': real(precision: 10),
	'real3': real(precision: 10, scale: 10),
});

/* - SQL -
CREATE TABLE IF NOT EXISTS "table" (
	"real1" real,
	"real2" real default 10,
	"real3" real default 10.10
);
*/
```
