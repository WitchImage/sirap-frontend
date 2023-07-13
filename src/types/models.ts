export interface TimeStamps {
    createdAt: string;
    updatedAt: string;
}

export interface Token extends Omit<TimeStamps, "updatedAt"> {
    ip?: string;
    token: string;
    expirationDate: string;
}

export interface User {
    email?: string;
    token?: Token;
}

export interface BasePerson extends TimeStamps {
    name: string;
    documentType: string;
    document: string;
}

export interface Admin extends BasePerson {
    user: User;
}

export interface Operator extends BasePerson {
    user: User;
    shift: string;
    token: Token;
}

export interface StopAndGo {
    location: string;
    alerts: any[];
    vehicles: any[];
}

export interface Company extends BasePerson {
    operators: Operator[];
    stopAndGos: StopAndGo[];
}
