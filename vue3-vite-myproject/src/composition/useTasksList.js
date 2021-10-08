import { ref, watchEffect } from 'vue';
import * as taskStoage from '../utils/taskStorage';

export default function useTasksList() {
  const tasksRef = ref(taskStoage.fetchTasks());
  window.tasksRef = tasksRef;// 测试的

  watchEffect(() => {
    taskStoage.updata(tasksRef.value);
  })
  return {
    tasksRef,
  };
}
