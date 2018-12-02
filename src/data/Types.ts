
export interface User {
    firstName: string;
    lastName: string;
    hourlyRate: number;
}

export interface WorkLog {
    workLog: WorkLogRecord[];
}

export interface WorkLogRecord {
    date: string;
    workHours: number;
}
