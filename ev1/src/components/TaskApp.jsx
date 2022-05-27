import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Task from "./Task/Task"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      {/* Header */}
      {/* Add Task */}
      <Task/>
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
