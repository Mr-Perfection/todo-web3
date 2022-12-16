import { expect } from "chai";
import { ethers } from "hardhat";
import { beforeEach, describe, it } from 'mocha';

describe("TaskContract", function () {
  let TaskContract;
  let taskContract;
  let owner;

  const NUM_TOTAL_TASKS = 5;

  let totalTasks;

  beforeEach(async () => {
    TaskContract = await ethers.getContractFactory("TaskContract");
    [owner] = await ethers.getSigners();
    taskContract = await TaskContract.deploy();

    totalTasks = [];

    for (let i = 0; i < NUM_TOTAL_TASKS; i++) {
      let task = {
        'taskText': `task #: ${i}`,
        'isDeleted': false,
      }

      await taskContract.addTask(task.taskText);
      totalTasks.push(task);
    }
  });

  describe("Add a task", function () {
    it("Should emit AddTask event", async () => {
      let newTask = {
        'taskText': "new task",
        'isDeleted': false,
      };
      await expect(await taskContract.addTask(newTask.taskText)
      ).to.emit(taskContract, 'AddTask').withArgs(owner.address, NUM_TOTAL_TASKS);
    })
  })

  describe("Get all tasks", function () {
    it("Should return the correct number of total tasks", async () => {
      const tasks = await taskContract.getMyTasks();
      await expect(tasks.length).to.equal(NUM_TOTAL_TASKS);
    })
  })

  describe("Delete a task", function () {
    it("Should emit DeleteTask event", async () => {
      const taskId = 0;
      await expect(await taskContract.deleteTask(taskId)
      ).to.emit(taskContract, 'DeleteTask').withArgs(taskId);
    })
  })
});