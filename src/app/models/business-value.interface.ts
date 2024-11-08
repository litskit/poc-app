// business-value.interface.ts
export interface BusinessValue {
    id: string;
    initiativeName: string;
    description: string;
    applicationName: string;
    expectedValue: number;
    valueType: 'Revenue' | 'Cost Savings' | 'Customer Satisfaction' | 'Efficiency';
    startDate: Date;
    endDate: Date;
    status: 'Planned' | 'In Progress' | 'Completed' | 'On Hold';
    ownerTeam: string;
    quarterPlanned: string;
    risks: string[];
  }