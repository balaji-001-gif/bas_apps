import { BASApp } from "../types";

export const mockApps: BASApp[] = [
  {
    id: "app-1",
    name: "ERPNext HRMS",
    shortDescription: "Complete Human Resource Management system for your business.",
    description: "Manage employee lifecycles, payroll, leave management, and attendance natively within your BAS workspace. It integrates fully with the accounting module.",
    developer: "Frappe Technologies",
    version: "15.0.0",
    rating: 4.8,
    reviewsCount: 124,
    downloads: 15400,
    category: "HR",
    iconUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=150&h=150",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ],
    features: ["Payroll management", "Leave tracking", "Employee self-service portal", "Performance reviews"],
    githubUrl: "https://github.com/frappe/hrms",
    websiteUrl: "https://frappe.io/hrms",
    createdAt: "2023-01-15T00:00:00Z",
    updatedAt: "2024-02-20T00:00:00Z"
  },
  {
    id: "app-2",
    name: "Salesforce CRM Connector",
    shortDescription: "Two-way sync between BAS and Salesforce CRM.",
    description: "Bring your Salesforce data into BAS instantly. Keep accounts, contacts, and opportunities synced automatically in real-time.",
    developer: "DataSync Solutions",
    version: "2.1.4",
    rating: 4.5,
    reviewsCount: 56,
    downloads: 3200,
    category: "CRM",
    iconUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=150&h=150",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ],
    features: ["Real-time sync", "Field mapping", "Conflict resolution strategy"],
    createdAt: "2023-05-10T00:00:00Z",
    updatedAt: "2024-03-01T00:00:00Z"
  },
  {
    id: "app-3",
    name: "Manufacturing Pro",
    shortDescription: "Advanced planning and scheduling for manufacturers.",
    description: "Take control of your shop floor. Manage BOMs, production plans, and track workstations efficiently.",
    developer: "Industry4 Corp",
    version: "1.0.2",
    rating: 4.2,
    reviewsCount: 18,
    downloads: 850,
    category: "Manufacturing",
    iconUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150",
    screenshots: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    ],
    features: ["Bill of Materials", "Capacity Planning", "Subcontracting"],
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z"
  },
  {
    id: "app-4",
    name: "QuickBooks Integration",
    shortDescription: "Seamlessly push invoices and payments to QuickBooks.",
    description: "Eliminate double entry. Automatically push sales invoices, purchase receipts, and journal entries from BAS to your QuickBooks account.",
    developer: "FinTech Connect",
    version: "3.5.0",
    rating: 4.9,
    reviewsCount: 205,
    downloads: 25000,
    category: "Finance",
    iconUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=150&h=150",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    ],
    features: ["Invoice syncing", "Payment reconciliation", "Multi-currency support"],
    createdAt: "2022-11-20T00:00:00Z",
    updatedAt: "2024-04-10T00:00:00Z"
  },
  {
    id: "app-5",
    name: "Slack Notifications",
    shortDescription: "Get instant BAS updates straight to your Slack channels.",
    description: "Keep your team informed. Send alerts to specific Slack channels when a new lead is created, an invoice is paid, or a support ticket is opened.",
    developer: "BAS Core Team",
    version: "1.2.0",
    rating: 4.7,
    reviewsCount: 89,
    downloads: 12050,
    category: "Productivity",
    iconUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=150&h=150",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    ],
    features: ["Channel mapping", "Custom event triggers", "Rich message formatting"],
    createdAt: "2023-08-14T00:00:00Z",
    updatedAt: "2023-10-05T00:00:00Z"
  }
];
