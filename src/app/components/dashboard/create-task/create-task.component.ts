import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from '../../popup/popup.component';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../interface/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, 
    PopupComponent, MatSelectModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDatepickerModule, MatNativeDateModule,
    MatDialogTitle, MatDialogModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{

  public message: string = '';
  public messageType: 'success' | 'error' = 'success';
  public tasks: any;
  public priorities: string[] = ["High", "Medium", "Low"]
  public statuses: string[] = ["Todo", "InProgress", "Done", "Testing", "Deploy"]

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params)=> {
    //   if(params['id']){
    //     this.getTaskById(params['id'])
    //   }
    // })
    this.getTaskById(this.data)
  }

  taskForm = new FormGroup({
    title : new FormControl("", Validators.required),
    description : new FormControl("", Validators.required),
    dueDate : new FormControl("", Validators.required),
    priority : new FormControl("", Validators.required),
    status : new FormControl("", Validators.required),
  });

  get taskFormControl() {
    return this.taskForm.controls;
  }

  onSubmit(){
    if(this.tasks.length > 0){
      this.taskService.updateTask(this.tasks[0].id, this.taskForm.value).subscribe({
        next: (res: any)=> {
          this.message = 'Task updated successfully';
          this.messageType = 'success';
          setTimeout(()=> {
            // this.router.navigate(['/dashboard']);
            window.location.href = window.location.href;
          },1000)
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
          this.message = 'Task update failed';
          this.messageType = 'error';
        }
      })
    }else{
      if(this.taskForm.valid){
        const task = this.taskForm.value;
  
        this.taskService.addTask(task as Task).subscribe({
          next: (res: any)=> {
            this.message = 'Task created successfully';
            this.messageType = 'success';
            setTimeout(()=> {
              // this.router.navigate(['/dashboard']);
              window.location.href = window.location.href;
            }, 1000);
          },
          error: (err: HttpErrorResponse)=> {
            this.message = 'Task created failed';
            this.messageType = 'error';
            console.log(err); 
          }
        })
      }
    }
  }

  getTaskById(id: string){
    this.taskService.getTaskById(id as string).subscribe({
      next: (res: any)=> {
        this.tasks = res;
        this.taskForm.patchValue({
          title: res[0].title,
          description: res[0].description,
          dueDate: res[0].dueDate,
          priority: res[0].priority
        })
      },
      error: (err: HttpErrorResponse)=> {
        console.log(err); 
      }
    })
  }

}
