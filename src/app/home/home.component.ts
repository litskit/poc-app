import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

interface VelocityData {
  team: string;
  velocity: number;
}

interface TeamProgress {
  team: string;
  progress: number;
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isDarkMode = false;
  velocityData: VelocityData[] = [
    { team: 'Team 1', velocity: 24 },
    { team: 'Team 2', velocity: 18 },
    { team: 'Team 3', velocity: 22 },
    { team: 'Team 4', velocity: 20 }
  ];

  teamProgress: TeamProgress[] = [
    { team: 'Team Alpha', progress: 75 },
    { team: 'Team Beta', progress: 65 },
    { team: 'Team Gamma', progress: 80 }
  ];

  // Chart options for PrimeNG
  velocityChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };

  velocityChartData = {
    labels: this.velocityData.map(d => d.team),
    datasets: [
      {
        label: 'Velocity',
        data: this.velocityData.map(d => d.velocity),
        backgroundColor: '#2563eb'
      }
    ]
  };

  quickActions = [
    { label: 'View Reports', icon: 'pi pi-file' },
    { label: 'Team Updates', icon: 'pi pi-users' },
    { label: 'Deliverables', icon: 'pi pi-box' },
    { label: 'Settings', icon: 'pi pi-cog' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(
      isDark => {
        this.isDarkMode = isDark;
        this.updateChartTheme(isDark);
      }
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private updateChartTheme(isDark: boolean) {
    const textColor = isDark ? '#ffffff' : '#495057';
    const gridColor = isDark ? '#4b5563' : '#ebedef';

    this.velocityChartOptions = {
      ...this.velocityChartOptions,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor
          },
          grid: {
            color: gridColor
          }
        },
        y: {
          ticks: {
            color: textColor
          },
          grid: {
            color: gridColor
          }
        }
      }
    };
  }
}
