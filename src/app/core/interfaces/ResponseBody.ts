import { GroupedByAccount } from "./GroupedByAccount"
import { GroupedByPonumber } from "./GroupedByPonumber"
import { GroupedByServiceDate } from "./GroupedByServiceDate"

export interface ResponseBody {
    excelData: ExcelData[]
    groupedData: GroupedData
}

export interface ExcelData {
    data: Data
}

interface Data {
    "Resource Name": string
    "Resource Organization Email": string
    "Resource Title": string
    "Billing Rate": number
    "($) Billing Rate": number
    "Working Days": string
    "Billing Rate Amount": number
    "Currency Exchange Rate": number
    Currency: string
    "($) Billing Rate Amount": number
    "Service Date": string
    "Approval Date": string
    "Approved By": string
    "Billing Date": string
    "Issued By": string
    "Billing Status": string
    "PO Manager Name": string
    "PO Manager Organization Email": string
    "Manager Name": string
    "Manager Organization Email": string
    "PO Number": string
    Account: string
    Portfolio: string
    Platform: string
    Department: string
    "Resource Billing Start Date": string
    "Resource Billing End Date": string
    "Total Gross": number
    "($) Total Gross": number
    "Settlement Action Needed": string
    "Settlement Percentage": number
    "Settlement Gross Amount": number
    "Settlement Currency": string
    "($) Settlement Gross Amount": number
    "Service Name": string
    "Service Description": string
    "Association Notes": any
    "PO Notes": any
    "Discount Percentage": any
    "Discount Amount": any
    "Discount Currency": string
    "($) Discount Amount": number
    "Hiring Date": string
    "Last Working Day": any
    Status: string
    "Contract Type": string
}

export interface GroupedData {
    groupedByServiceDate: GroupedByServiceDate
    groupedByPONumber: GroupedByPonumber
    groupedByAccount: GroupedByAccount
    overallTotalGrossSalary: number
    overallTotalGrossSalaryUsd: number
}
