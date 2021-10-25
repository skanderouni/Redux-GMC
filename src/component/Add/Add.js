import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/action/task';

const Add = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Math.random(), description, isDone: false }));
    setDescription('');
  };

  return (
    <form>
      <input
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={handleAdd}>add</button>
    </form>
  );
};

export default Add;
