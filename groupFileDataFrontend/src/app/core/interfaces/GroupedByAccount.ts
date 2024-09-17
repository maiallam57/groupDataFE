
export interface GroupedByAccount {
    totalBillingRate: number
    totalGrossSalary: number
    totalGrossSalaryUsd: number
    groups: GroupAccount[]
}

interface GroupAccount {
    account: string
    subtotalBillingRate: number
    subtotalGrossSalary: number
    subtotalGrossSalaryUsd: number
}
