export default function () {
  console.log('utility types.');

  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
      ...todo,
      ...fieldsToUpdate
    };
  }

  const todo1: Todo = {
    title: 'organize desk',
    description: 'clear clutter'
  };

  const todo2: Todo = updateTodo(todo1, {
    description: 'throw out trash'
  });

  console.log({...todo1}, {...todo2});

  // Readonly<Type>
  interface ReadonlyTodo {
    title: string;
  }
  const readTodo: Readonly<ReadonlyTodo> = {
    title: 'readonly...'
  };
  console.log('readonly', {...readTodo});

  // Record
  interface PageInfo {
    title: string;
  }
  type Page = 'home' | 'about' | 'contact';
  const nav: Record<Page, PageInfo> = {
    about: { title: 'abhout' },
    contact: { title: 'contat' },
    home: { title: 'your home'}
  };
  console.log('Record: ', {...nav});
  // Pick
  interface PickTodo {
    title: string;
    description: string;
    completed: boolean;
  }
  type TodoPreview = Pick<PickTodo, 'title' | 'completed'>;
  const pick: TodoPreview = {
    title: 'jock',
    completed: false
  };
  console.log('Pick: ', {...pick});
  // Exclude
  type T0 = Exclude<'a' | 'b' | 'c', 'a'>
  type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
  type T2 = Exclude<string | number | (() => void), Function>;
  const t2: T2 = 'string or number';
  const t0: T0 = 'b';
  console.log('Exclude: ', t0, t2);

  // Extract
  type E0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
  type E1 = Extract<string | number | (() => void), Function>;
  const e0: E0 = 'a';
  const e1: E1 = () => {
    console.log('Extract');
    return 1;
  };
  console.log('Extract: ', e0, e1());

  // Omit
  interface OmitTodo {
    title: string;
    description: string;
    completed: boolean;
  }
  type OmitPreview = Omit<OmitTodo, 'description'>;
  const omit: OmitPreview = {
    title: 'josrck',
    completed: true
  };
  console.log('Omit: ', {...omit});

  // NonNullable
  type N0 = NonNullable<string | number | undefined>;
  type N1 = NonNullable<string[] | null | undefined>;
  const n0: N0 = 'null';
  const n1: N1 = ['1', '2'];
  console.log('NonNullable: ', n0, n1);

  // Parameters
  // declare function f1(arg: {
  //   a: number;
  //   b: number;
  // }): void;
};
