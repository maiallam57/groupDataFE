export interface GroupedByPonumber {
    totalBillingRate: number
    totalGrossSalary: number
    totalGrossSalaryUsd: number
    groups: GroupPonumber[]
}

interface GroupPonumber {
    poNumber: string
    subtotalBillingRate: number
    subtotalGrossSalary: number
    subtotalGrossSalaryUsd: number
}