import { Todo } from '../types';

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      {todos.length === 0 ? (
        ''
      ) : (
        <div className='text-center space-y-2'>
          <p className='text-sm font-medium'>
            {completedTodos.length} / {todos.length} todos completed
          </p>
          {completedTodos.length > 0 && (
            <button className='text-red-500 hover:underline text-sm font-medium' onClick={deleteAllCompleted}>
              Delete all completed
            </button>
          )}
        </div>
      )}
    </>
  );
}
