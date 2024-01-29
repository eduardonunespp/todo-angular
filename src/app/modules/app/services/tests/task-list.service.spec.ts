import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../../environments/environment';
import { TaskListService } from '../task-list.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ITaskList } from '../../types';
import { HttpParams, HttpResponse } from '@angular/common/http';

describe('TaskListTService', () => {
  let service: TaskListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TaskListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getTaskList()', () => {
    it('should to request that response task-list', () => {
      const fakeTaskList: ITaskList[] = [
        {
          id: 'djsdbyduidf',
          name: 'kakakjs',
        },
        {
          id: 'djsdbyduidf',
          name: 'Lista01',
        },
        {
          id: 'djsdbyduidf',
          name: 'Lista01',
        },
      ];

      service.getTaskList().subscribe((taskList) => {
        expect(taskList).toEqual<ITaskList[]>(fakeTaskList);
      });

      const request = httpTestingController.expectOne(
        `${environment.apiUrl}/assignment-list?PerPage=1000`
      );

      request.flush(fakeTaskList);
    });

    it('should to a request that response with a 401 http status', () => {
      service.getTaskList().subscribe({
        error: (res: HttpResponse<ITaskList>) => {
          expect(res.status).toEqual(401);
        },
      });

      const request = httpTestingController.expectOne(
        `${environment.apiUrl}/assignment-list?PerPage=1000`
      );

      request.flush('Inauthorized', {
        status: 401,
        statusText: 'Inauthorized',
      });
    });
  });

  describe('addTaskList()', () => {
    it('should add a new task list', () => {
      const fakeNewTaskList: ITaskList = {
        id: 'sjdishdyudjffi73821duew98nd29ire3hu9',
        name: 'Nova Lista de Test',
      };

      const createFakeNewTaskList = {
        ...fakeNewTaskList,
        id: 'dqwidbdc9238293',
      };

      service.addTaskList(fakeNewTaskList).subscribe({
        next: (res: any) => {
          expect(res).toEqual(createFakeNewTaskList);
        },
      });

      const requests = httpTestingController.match(
        (req) =>
          req.method === 'POST' &&
          req.url === `${environment.apiUrl}/assignment-list` &&
          req.body === fakeNewTaskList
      );

      expect(requests.length).toEqual(1);

      const [request] = requests;

      request.flush(createFakeNewTaskList);
    });
  });
});
