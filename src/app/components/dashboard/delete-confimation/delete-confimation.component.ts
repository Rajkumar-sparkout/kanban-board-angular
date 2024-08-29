import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskService } from '../../../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-confimation',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './delete-confimation.component.html',
  styleUrl: './delete-confimation.component.css'
})
export class DeleteConfimationComponent implements OnInit{

  constructor(
    private dialogRef: MatDialogRef<DeleteConfimationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService
  ){}

  public taskId: string = ''
  ngOnInit(): void {
    this.taskId = this.data
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.taskId).subscribe({
      next: (res: any)=> {
        // this.getTasks();
        window.location.href = window.location.href
      },
      error: (err: HttpErrorResponse)=> {
        console.log(err);
      }
    })
  }
}
