import {Database, SqlJsStatic} from 'sql.js';
const initSqlJs = require('sql.js'); // eslint-disable-line

class Singleton {
  private static instance: Singleton;
  public db: Database | undefined;
  _state = false;

  private constructor() {
    this._state = false;
  }

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  getState() {
    return this._state;
  }
}

export default {
  // connect(url: string) {
  //   console.log('connect: ', url);
  // },
  // options(options: object) {
  //   console.log('set config');
  // },
  initDB(): Promise<void> {
    return initSqlJs({
      locateFile: (file: string) => `/wasm/${file}`
    }).then((SqlJs: SqlJsStatic) => {
      const db = new SqlJs.Database();
      Singleton.getInstance().db = db;
    }).catch((err: any) => {
      console.error(err);
    });
  },
  test(): void {
    const s1 = Singleton.getInstance();
    console.log('test', s1.db);
  },
  initial(): void {
    const db = Singleton.getInstance().db as Database;
    // NOTE: You can also use new SQL.Database(data) where
    // data is an Uint8Array representing an SQLite database file

    // Execute some sql
    let sqlstr = 'CREATE TABLE hello (a int, b char);';
    sqlstr += 'INSERT INTO hello VALUES (0, "hello");';
    sqlstr += 'INSERT INTO hello VALUES (1, "world");';
    db.run(sqlstr); // Run the query without returning anything

    const res = db.exec('SELECT * FROM hello');
    console.log('hello table: ', res);
    /*
      [
        {columns:['a','b'], values:[[0,'hello'],[1,'world']]}
      ]
    */

    // Prepare an sql statement
    const stmt = db.prepare('SELECT * FROM hello WHERE a=:aval AND b=:bval');

    // Bind values to the parameters and fetch the results of the query
    const result = stmt.getAsObject({':aval': 1, ':bval': 'world'});
    console.log('result: ', result); // Will print {a:1, b:'world'}

    // Bind other values
    stmt.bind([0, 'hello']);
    while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']
    // free the memory used by the statement
    stmt.free();
    // You can not use your statement anymore once it has been freed.
    // But not freeing your statements causes memory leaks. You don't want that.

    // You can also use JavaScript functions inside your SQL code
    // Create the js function you need
    function add(a: any, b: any) {
      return a + b; // eslint-disable-line
    }
    // Specifies the SQL function's name, the number of it's arguments, and the js function to use
    db.create_function("add_js", add);
    // Run a query in which the function is used
    db.run("INSERT INTO hello VALUES (add_js(7, 3), add_js('Hello ', 'world'));"); // Inserts 10 and 'Hello world'

    // Export the database to an Uint8Array containing the SQLite database file
    // const binaryArray = db.export();
    
    const res2 = db.exec('SELECT * FROM hello');
    console.log('hello table: ', res2);

    db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 0, 222]);

    // Prepare a statement
    const stmt1 = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
    stmt1.getAsObject({
      $start: 1,
      $end: 1
    }); // {col1:1, col2:111}

    // Bind new values
    stmt1.bind({$start: 1, $end: 2});
    while (stmt1.step()) {
      const row = stmt1.getAsObject();
      console.log('Here is a row: ' + JSON.stringify(row));
    }
  },
  createTable(): void {
    // 建表
    // 点击按钮后，再首次执行建表操作
    // 查询取值
    // 插入数据
  }
};
