
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

    // Dependency Injection context - https://www.youtube.com/watch?v=fmANvUCOASo

    // IMPORTANT: letter `s` must be lowercase for signal
    public usersList = signal<User[]>([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Doe' },
        { id: 4, name: 'Smith' },
        { id: 5, name: 'Emily' },
    ]);

    public getUsers() {
        this.usersList.update((v) => ([...v, { id: 6, name: 'New User' }]));
    }
}

export interface User {
    id: number;
    name: string;
}