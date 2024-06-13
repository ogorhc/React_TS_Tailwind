import { Trash2 } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
  return (
    <div className='flex'>
      <label className='flex items-center grow gap-2 border rounded-s-md p-2 border-gray-400 bg-white hover:bg-slate-50'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className='scale-125 cursor-pointer'
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.title}</span>
      </label>
      <button className='p-2' onClick={() => onDelete(todo.id)}>
        <Trash2 className='text-red-500'>Delete</Trash2>
      </button>
    </div>
  );
}
