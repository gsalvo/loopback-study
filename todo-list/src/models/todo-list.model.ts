import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Todo, TodoWithRelations} from './todo.model';
import {TodoListImage, TodoListImageWithRelations} from './todo-list-image.model';

@model()
export class TodoList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;

  @hasMany(() => Todo, {keyTo: 'TodoListId'})
  todos: Todo[];

  @hasOne(() => TodoListImage)
  todoListImage: TodoListImage;

  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}

export interface TodoListRelations {
  // describe navigational properties here
  todos?: TodoWithRelations;
  todoListImage?: TodoListImageWithRelations
}

export type TodoListWithRelations = TodoList & TodoListRelations;
