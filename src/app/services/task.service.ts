import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interface/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  getTaskById(id: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}/tasks?id=${id}`);
  }

  getTaskByStatus(status: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}/tasks?status=${status}`);
  }

  getPriority(priority: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}/tasks?priority=${priority}`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks`, task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }
}
