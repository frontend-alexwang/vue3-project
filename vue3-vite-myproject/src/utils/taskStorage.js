const LOCAL_KEY = 'tasks';

/**
 * 返回获取到的任务列表
 * @returns 
 */
export function fetchTasks() {
  const tasks = localStorage.getItem(LOCAL_KEY);
  if (!tasks) {
    return [];
  }

  return JSON.parse(tasks);
}

/**
 * 更新为新的任务列表
 * @param {*} tasks 任务列表
 */
export function updata(tasks) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(tasks));
}

/**
 * 生成一个随机的唯一标识
 */
export function generateId(){
  return Date.now() + Math.random().toString(16).substr(2, 4);
}