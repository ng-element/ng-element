import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent {
  iconList = [
    { type: 'platform-eleme' },
    { type: 'eleme' },
    { type: 'delete-solid' },
    { type: 'delete' },
    { type: 's-tools' },
    { type: 'setting' },
    { type: 'user-solid' },
    { type: 'user' },
    { type: 'phone' },
    { type: 'phone-outline' },
    { type: 'more' },
    { type: 'more-outline' },
    { type: 'star-on' },
    { type: 'star-off' },
    { type: 's-goods' },
    { type: 'goods' },
    { type: 'warning' },
    { type: 'warning-outline' },
    { type: 'question' },
    { type: 'info' },
    { type: 'remove' },
    { type: 'circle-plus' },
    { type: 'success' },
    { type: 'error' },
    { type: 'zoom-in' },
    { type: 'zoom-out' },
    { type: 'remove-outline' },
    { type: 'circle-plus-outline' },
    { type: 'circle-check' },
    { type: 'circle-close' },
    { type: 's-help' },
    { type: 'help' },
    { type: 'minus' },
    { type: 'plus' },
    { type: 'check' },
    { type: 'close' },
    { type: 'picture' },
    { type: 'picture-outline' },
    { type: 'picture-outline-round' },
    { type: 'upload' },
    { type: 'upload2' },
    { type: 'download' },
    { type: 'camera-solid' },
    { type: 'camera' },
    { type: 'video-camera-solid' },
    { type: 'video-camera' },
    { type: 'message-solid' },
    { type: 'bell' },
    { type: 's-cooperation' },
    { type: 's-order' },
    { type: 's-platform' },
    { type: 's-fold' },
    { type: 's-unfold' },
    { type: 's-operation' },
    { type: 's-promotion' },
    { type: 's-home' },
    { type: 's-release' },
    { type: 's-ticket' },
    { type: 's-management' },
    { type: 's-open' },
    { type: 's-shop' },
    { type: 's-marketing' },
    { type: 's-flag' },
    { type: 's-comment' },
    { type: 's-finance' },
    { type: 's-claim' },
    { type: 's-custom' },
    { type: 's-opportunity' },
    { type: 's-data' },
    { type: 's-check' },
    { type: 's-grid' },
    { type: 'menu' },
    { type: 'share' },
    { type: 'd-caret' },
    { type: 'caret-left' },
    { type: 'caret-right' },
    { type: 'caret-bottom' },
    { type: 'caret-top' },
    { type: 'bottom-left' },
    { type: 'bottom-right' },
    { type: 'back' },
    { type: 'right' },
    { type: 'bottom' },
    { type: 'top' },
    { type: 'top-left' },
    { type: 'top-right' },
    { type: 'arrow-left' },
    { type: 'arrow-right' },
    { type: 'arrow-down' },
    { type: 'arrow-up' },
    { type: 'd-arrow-left' },
    { type: 'd-arrow-right' },
    { type: 'video-pause' },
    { type: 'video-play' },
    { type: 'refresh' },
    { type: 'refresh-right' },
    { type: 'refresh-left' },
    { type: 'finished' },
    { type: 'sort' },
    { type: 'sort-up' },
    { type: 'sort-down' },
    { type: 'rank' },
    { type: 'loading' },
    { type: 'view' },
    { type: 'c-scale-to-original' },
    { type: 'date' },
    { type: 'edit' },
    { type: 'edit-outline' },
    { type: 'folder' },
    { type: 'folder-opened' },
    { type: 'folder-add' },
    { type: 'folder-remove' },
    { type: 'folder-delete' },
    { type: 'folder-checked' },
    { type: 'tickets' },
    { type: 'document-remove' },
    { type: 'document-delete' },
    { type: 'document-copy' },
    { type: 'document-checked' },
    { type: 'document' },
    { type: 'document-add' },
    { type: 'printer' },
    { type: 'paperclip' },
    { type: 'takeaway-box' },
    { type: 'search' },
    { type: 'monitor' },
    { type: 'attract' },
    { type: 'mobile' },
    { type: 'scissors' },
    { type: 'umbrella' },
    { type: 'headset' },
    { type: 'brush' },
    { type: 'mouse' },
    { type: 'coordinate' },
    { type: 'magic-stick' },
    { type: 'reading' },
    { type: 'data-line' },
    { type: 'data-board' },
    { type: 'pie-chart' },
    { type: 'data-analysis' },
    { type: 'collection-tag' },
    { type: 'film' },
    { type: 'suitcase' },
    { type: 'suitcase-1' },
    { type: 'receiving' },
    { type: 'collection' },
    { type: 'files' },
    { type: 'notebook-1' },
    { type: 'notebook-2' },
    { type: 'toilet-paper' },
    { type: 'office-building' },
    { type: 'school' },
    { type: 'table-lamp' },
    { type: 'house' },
    { type: 'no-smoking' },
    { type: 'smoking' },
    { type: 'shopping-cart-full' },
    { type: 'shopping-cart-1' },
    { type: 'shopping-cart-2' },
    { type: 'shopping-bag-1' },
    { type: 'shopping-bag-2' },
    { type: 'sold-out' },
    { type: 'sell' },
    { type: 'present' },
    { type: 'box' },
    { type: 'bank-card' },
    { type: 'money' },
    { type: 'coin' },
    { type: 'wallet' },
    { type: 'discount' },
    { type: 'price-tag' },
    { type: 'news' },
    { type: 'guide' },
    { type: 'male' },
    { type: 'female' },
    { type: 'thumb' },
    { type: 'cpu' },
    { type: 'link' },
    { type: 'connection' },
    { type: 'open' },
    { type: 'turn-off' },
    { type: 'set-up' },
    { type: 'chat-round' },
    { type: 'chat-line-round' },
    { type: 'chat-square' },
    { type: 'chat-dot-round' },
    { type: 'chat-dot-square' },
    { type: 'chat-line-square' },
    { type: 'message' },
    { type: 'postcard' },
    { type: 'position' },
    { type: 'turn-off-microphone' },
    { type: 'microphone' },
    { type: 'close-notification' },
    { type: 'bangzhu' },
    { type: 'time' },
    { type: 'odometer' },
    { type: 'crop' },
    { type: 'aim' },
    { type: 'switch-button' },
    { type: 'full-screen' },
    { type: 'copy-document' },
    { type: 'mic' },
    { type: 'stopwatch' },
    { type: 'medal-1' },
    { type: 'medal' },
    { type: 'trophy' },
    { type: 'trophy-1' },
    { type: 'first-aid-kit' },
    { type: 'discover' },
    { type: 'place' },
    { type: 'location' },
    { type: 'location-outline' },
    { type: 'location-information' },
    { type: 'add-location' },
    { type: 'delete-location' },
    { type: 'map-location' },
    { type: 'alarm-clock' },
    { type: 'timer' },
    { type: 'watch-1' },
    { type: 'watch' },
    { type: 'lock' },
    { type: 'unlock' },
    { type: 'key' },
    { type: 'service' },
    { type: 'mobile-phone' },
    { type: 'bicycle' },
    { type: 'truck' },
    { type: 'ship' },
    { type: 'basketball' },
    { type: 'football' },
    { type: 'soccer' },
    { type: 'baseball' },
    { type: 'wind-power' },
    { type: 'light-rain' },
    { type: 'lightning' },
    { type: 'heavy-rain' },
    { type: 'sunrise' },
    { type: 'sunrise-1' },
    { type: 'sunset' },
    { type: 'sunny' },
    { type: 'cloudy' },
    { type: 'partly-cloudy' },
    { type: 'cloudy-and-sunny' },
    { type: 'moon' },
    { type: 'moon-night' },
    { type: 'dish' },
    { type: 'dish-1' },
    { type: 'food' },
    { type: 'chicken' },
    { type: 'fork-spoon' },
    { type: 'knife-fork' },
    { type: 'burger' },
    { type: 'tableware' },
    { type: 'sugar' },
    { type: 'dessert' },
    { type: 'ice-cream' },
    { type: 'hot-water' },
    { type: 'water-cup' },
    { type: 'coffee-cup' },
    { type: 'cold-drink' },
    { type: 'goblet' },
    { type: 'goblet-full' },
    { type: 'goblet-square' },
    { type: 'goblet-square-full' },
    { type: 'refrigerator' },
    { type: 'grape' },
    { type: 'watermelon' },
    { type: 'cherry' },
    { type: 'apple' },
    { type: 'pear' },
    { type: 'orange' },
    { type: 'coffee' },
    { type: 'ice-tea' },
    { type: 'ice-drink' },
    { type: 'milk-tea' },
    { type: 'potato-strips' },
    { type: 'lollipop' },
    { type: 'ice-cream-square' },
    { type: 'ice-cream-round' },
  ];
}
