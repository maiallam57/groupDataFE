

export interface GroupedByServiceDate {
    totalBillingRate: number
    totalGrossSalary: number
    totalGrossSalaryUsd: number
    groups: GroupServiceDate[]
}

interface GroupServiceDate {
    serviceDate: string
    subtotalBillingRate: number
    subtotalGrossSalary: number
    subtotalGrossSalaryUsd: number
}