// Q: 13
// L1 - Simulating Sequential Async Tasks (Callback Hell)
// Problem Statement:
// Write a sequence of four asynchronous tasks (task1, task2, task3, task4) that simulate network requests. Each task should take 1 second and log "Task <number> complete". Use nested callbacks (callback hell) to execute them in order. After all tasks are complete, log "All tasks completed".

// Steps:

// Define functions for each task (task1, task2, etc.), each taking a callback to start the next task.
// Use nested callbacks to call each task sequentially.
// After task4, log "All tasks completed".

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks completed");
      });
    });
  });
});
