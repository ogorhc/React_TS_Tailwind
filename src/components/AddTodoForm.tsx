import { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (input: string) => void;
}

export default function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onAddTodo(input);
  }
  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='What needs to be done?'
        className='rounded-s-md grow border border-gray-400 p-2'
      />
      <button type='submit' className='w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800'>
        Add
      </button>
    </form>
  );
}
