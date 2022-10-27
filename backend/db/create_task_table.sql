CREATE TABLE "task_table"."public".rows (
  ID SERIAL PRIMARY KEY,
  row_date DATE NOT NULL DEFAULT CURRENT_DATE,
  row_name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  distance INTEGER NOT NULL
)
