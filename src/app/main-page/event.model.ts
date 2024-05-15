export interface Event {
    id: number;
    name: string;
    creationDateTime: Date;
    affectedBrand: string;
    description: string;
    maliciousURL: string;
    maliciousDomainRegistrationDate: Date;
    maliciousDomainDNSRecords: string[];
    matchingKeywords: string[];
    status: string;
    analystComments: Comment[];
  }
  
  export interface Comment {
    id: number;
    timestamp: Date;
    content: string;
  }
  