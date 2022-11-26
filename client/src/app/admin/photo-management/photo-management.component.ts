import { Component, OnDestroy, OnInit } from '@angular/core';
import { Photo } from '@models';
import { AdminService } from '@services/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  private photoSub: Subscription;

  constructor(private adminService: AdminService) { }

  ngOnDestroy(): void {
    this.photoSub.unsubscribe();
  }

  ngOnInit(): void {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.photoSub = this.adminService.getPhotosForApproval().subscribe({
      next: photos => this.photos = photos
    });
  }

  approvePhoto(photoId) {
    this.adminService.approvePhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    })
  }

  rejectPhoto(photoId) {
    this.adminService.rejectPhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    })
  }
}
