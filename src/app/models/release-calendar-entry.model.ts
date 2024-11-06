export interface ReleaseCalendarEntry {
    serialNumber: number;           // S. No.
    releaseDate: Date;              // Release Date
    functionalities: string;        // Functionalities
    releaseTechLead: string;        // Release Tech Lead
    releaseOwner: string;           // Release Owner
    releaseChapterLeader: string;   // Release Chapter Leader
    batCoordinator: string;         // BAT Coordinator
    releaseMethod: string;          // Release Method
    comments?: string;              // Comments (optional)
  }
  