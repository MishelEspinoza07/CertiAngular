import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { socialNetworks, data } from '../../data';

@Component({
  selector: 'app-social-networks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.scss'
})
export class SocialNetworksComponent {
  socialNetworks = socialNetworks; 
  users = data;
  getButtonText(platform: string): string {
    switch (platform) {
      case 'youtube':
      case 'tiktok':
        return 'Add new video';
      case 'instagram':
      case 'facebook':
        return 'Add new story';
      case 'whatsapp':
        return 'Add new message';
      default:
        return '';
    }
  }
  sendNotification(network: any) {
    const platformId = network.id;
    for (let userId in this.users) {
      const user = this.users[userId];
      if (user.subscriptions.includes(platformId)) {
        if (network.platform == 'tiktok' || network.platform == 'whatsapp') {
          if (user.subscriptionType == 'premium') {
            if (user.amountAvailable >= 5) {
              user.amountAvailable -= 5;
              user.notifications.push(`${network.platform} sent a new ${network.type}`);
            } else {
              console.log(`${user.name} does not have enough balance to receive a notification from ${network.platform}`);
            }
          } else {
            console.log(`${user.name} cannot receive notifications from ${network.platform}`);
          }
        } else {
          user.notifications.push(`${network.platform} added a new ${network.type}`);
        }
      }
    }
  }
}