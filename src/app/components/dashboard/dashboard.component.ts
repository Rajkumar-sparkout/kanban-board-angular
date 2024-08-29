import { Component, inject, OnInit } from '@angular/core';
import { Statuses, Task } from '../../interface/common';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteConfimationComponent } from './delete-confimation/delete-confimation.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, DragDropModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink,  MatFormFieldModule, MatInputModule, 
    MatSelectModule, FilterPipe, FormsModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  // public tasks: any[] = [];
  public tasks: { [key in Statuses]: Task[] } = {
    'Todo': [],
    'InProgress': [],
    'Done': [],
    'Testing': [],
    'Deploy': []
  };
  public statuses: Statuses[] = ['Todo', 'InProgress', 'Done', 'Testing', 'Deploy'];
  public selected = 'None';
  public searchKey: any;
  // public filteredTasks: { [key in Statuses]: Task[] } = { ...this.tasks };
  public selectedDate: Date | null = null;
  public selectedPriority: string = '';

  constructor(
    private taskService: TaskService,
    private route: Router,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.statuses.forEach(status=> {
      this.taskService.getTaskByStatus(status).subscribe({
        next: (tasks: any)=> {
          this.tasks[status] = tasks;
          this.filterTasks();
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err); 
        }
      })
    })
  }

  gotoCreatTask() {
    // this.route.navigate(['createTask']);
    this.dialog.open(CreateTaskComponent);
  }
  updateTask(id: string){
    this.dialog.open(CreateTaskComponent, {
      data: id,
    });
  }
  
  // onDrop(event: CdkDragDrop<any>) {
  //   const taskId = event.item.data.id;
  //   const newColumnId = event.container.data.id;

  //   this.taskService.updateTask(taskId, newColumnId).subscribe({
  //     next: (res: any)=> {
  //       this.getTasks();
  //     },
  //     error: (err: HttpErrorResponse)=> {
  //       console.log(err); 
  //     }
  //   })
  // }

  onDrop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.status = event.container.id as Statuses;
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.updateTasksDrop(task);
      // this.getTasks();
    }
  }
  
  updateTasksDrop(task: Task): void {
    this.taskService.updateTask(task.id, task).subscribe()
  }

  deleteTask(id: string): void {
    // this.taskService.deleteTask(id).subscribe({
    //   next: (res: any)=> {
    //     this.getTasks();
    //   },
    //   error: (err: HttpErrorResponse)=> {
    //     console.log(err);
    //   }
    // })
    this.dialog.open(DeleteConfimationComponent, {
      data: id,
    });
  }

  onDateChange(event: any): void {
    this.selectedDate = event.value;
    this.filterTasks();
    this.getTasks();
  }

  onPriorityChange(priority: string): void {
    this.selectedPriority = priority;
    this.filterTasks();
    this.getTasks();
  }

  private filterTasks(): void {
    this.tasks = {
      'Todo': this.filterByCriteria(this.tasks['Todo']),
      'InProgress': this.filterByCriteria(this.tasks['InProgress']),
      'Done': this.filterByCriteria(this.tasks['Done']),
      'Testing': this.filterByCriteria(this.tasks['Testing']),
      'Deploy': this.filterByCriteria(this.tasks['Deploy']),
    };
  }

  private filterByCriteria(tasks: Task[]): Task[] {
    return tasks.filter(task => {
      const matchesDate = !this.selectedDate || new Date(task.dueDate).toDateString() === this.selectedDate.toDateString();
      const matchesPriority = !this.selectedPriority || task.priority === this.selectedPriority;
      return matchesDate && matchesPriority;
    });
  }

}
