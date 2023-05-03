import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-whishlist-button',
  templateUrl: './whishlist-button.component.html',
  styleUrls: ['./whishlist-button.component.scss']
})
export class WhishlistButtonComponent {

  @Input('liked')
  like = false

  regularHeartIcon = farHeart
  solidHeartIcon = fasHeart

  toggleLike() {
    this.like = !this.like
  }

}
