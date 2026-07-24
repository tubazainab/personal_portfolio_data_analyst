const projectsData = [
  {
    id: "hr-analytics-dashboard-v1",
    title: "HR Analytics Dashboard",
    category: "Power BI Dashboard",
    thumbnail: "Images/1st/HR_Analytics_Dashboard.png.png",
    shortDescription: "An interactive HR Analytics Dashboard built using Power BI to analyze employee attrition and identify patterns across departments, job roles, overtime, job satisfaction, and marital status.",
    tools: ["Power BI", "Power Query", "DAX", "Microsoft Excel"],
    
    overview: "This interactive HR Analytics Dashboard provides an overview of employee attrition across different departments, job roles, overtime status, job satisfaction levels, and marital status. The dashboard uses KPI cards and interactive visualizations to help understand employee turnover patterns.",
    businessProblem: "Employee attrition can increase recruitment and training costs for organizations. The goal of this project was to analyze employee attrition patterns and identify areas where employee retention strategies may be required.",
    datasetDesc: "The dataset contains 50 employee records and 14 columns, including employee details, department, job role, monthly income, job satisfaction, overtime, marital status, joining date, and attrition status.",
    dataCleaning: "Data cleaning and preparation were performed using Power Query:<br><br>• Checked for null values<br>• Checked for duplicate Employee IDs<br>• Removed unnecessary columns<br>• Verified and corrected data types<br>• Ensured Monthly Income was in numeric format<br>• Ensured Age was in whole number format<br>• Converted Joining Date to date format<br>• Verified Attrition values as Yes/No",
    
    daxMeasures: [
      `1. Total Employees\nTotal Employees = COUNTROWS(HR_Analytics)`,
      
      `2. Attrition Count\nAttrition Count =\nCALCULATE(\n    COUNTROWS(HR_Analytics),\n    HR_Analytics[Attrition] = "Yes"\n)`,
      
      `3. Attrition Rate\nAttrition Rate =\nDIVIDE(\n    [Attrition Count],\n    [Total Employees],\n    0\n)`,
      
      `4. Average Job Satisfaction\nAverage Job Satisfaction =\nAVERAGE(HR_Analytics[Job Satisfaction])`,
      
      `5. Average Monthly Income\nAverage Monthly Income =\nAVERAGE(HR_Analytics[Monthly Income])`
    ],
    
    insights: [
      "The overall attrition rate in the dataset is 30%.",
      "15 out of 50 employees have left the company.",
      "Employees working overtime show higher attrition compared to employees who do not work overtime.",
      "The HR department has the highest attrition count among the departments.",
      "HR Manager has the highest attrition count among the job roles.",
      "Single employees have higher attrition compared to married employees.",
      "The dashboard helps analyze the relationship between job satisfaction and employee attrition."
    ],
    recommendations: [
      "Review overtime policies and monitor excessive workloads.",
      "Focus on employee retention in departments with higher attrition.",
      "Investigate the reasons behind higher attrition in specific job roles.",
      "Conduct regular employee satisfaction surveys.",
      "Provide better career growth and development opportunities.",
      "Monitor employee workload and work-life balance."
    ],
    links: {
      github: "https://github.com/tubazainab/HR-Analytics-Dashboard",
      liveDemo: "", 
      downloadFile: "Images/1st/HR_Analytics.pbix" 
    },
    galleryImages: [
      "Images/1st/HR_Analytics_Dashboard.png.png"
    ]
  }
];
