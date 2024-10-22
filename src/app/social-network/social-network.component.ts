import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { socialNetworks } from '../../data';

@Component({
  selector: 'app-social-networks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.scss'
})
export class SocialNetworksComponent {
  socialNetworks = socialNetworks
}