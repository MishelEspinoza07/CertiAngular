import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationsComponent } from '../notification/notification.component';
// import { socialNetworks } from '.../data';
import { socialNetworks } from '../../data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: any;
  showNotifications = false;

  toggleView() {
    this.showNotifications = !this.showNotifications;
  }
  // Mapa de colores para cada red social
  networkColor: { [key: string]: string } = {
    youtube: 'red',
    tiktok: 'purple',
    instagram: 'yellow',
    facebook: 'skyblue',
    whatsapp: 'green'
  };

  // Función para cambiar el tipo de suscripción
  changeSubscriptionType(newType: string) {
    this.user.subscriptionType = newType;
  }

  // Obtener las redes sociales a las que no está suscrito el usuario
  getUnsubscribedSocialNetworks() {
    return socialNetworks.filter(sn => !this.user.subscriptions.includes(sn.id));
  }

  // Obtener el nombre de la plataforma basado en el ID
  getPlatformById(id: number): string {
    const network = socialNetworks.find(network => network.id === id);
    return network ? network.platform : '';
  }

  // Función para añadir una suscripción
  addSubscription(id: number) {
    this.user.subscriptions.push(id);
  }

  // Función para eliminar una suscripción
  removeSubscription(id: number) {
    this.user.subscriptions = this.user.subscriptions.filter((subId: number) => subId !== id);
  }

  // Función para cerrar la cuenta (lógica para eliminar usuario)
  closeAccount() {
    // Aquí podrías manejar la eliminación del usuario
    console.log('Cuenta eliminada para:', this.user.name);
  }
}