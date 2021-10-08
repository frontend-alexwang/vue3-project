import { ref } from 'vue';
import { generateId } from '../utils/taskStorage';

export default function useNewTask(tasksListRef) {
  const newTaskRef = ref('');

  const addNewTask = () => {
    const value = newTaskRef?.value.trim();
    if (!value) {
      return;
    }
    const newTaskObj = {
      id: generateId(),
      title: value,
      completed: false,
    };
    tasksListRef.value.push(newTaskObj);
    newTaskRef.value = '';
  };
  return {
    newTaskRef,
    addNewTask,
  };
}
