import TaskService from "../../../src/services/task.service";
import TaskModel, { ITask, ITaskObj } from "../../../src/models/task.models"

describe("Task", () => {
  let res: any;
  let sendSpy: any;
  let taskService: TaskService;
  let iTask: ITask;
  let iTaskObj: ITaskObj;

  beforeEach(() => {
    jest.clearAllMocks();

    sendSpy = {
      send: jest.fn(),
    };

    res = {
      status: jest.fn().mockReturnValue(sendSpy),
    };
  });

  it("Test method find All", async () => {
    const taskService = new TaskService();
    const req: any = {
      body: {},
      header: {},
    };
    // const list: Array<ITaskObj>;// = await TaskModel.find({});

    // const taskModel: any = {

    // }

    // const result = await taskService.findAll(req, res);

    // console.log("result", result);
  });
});
