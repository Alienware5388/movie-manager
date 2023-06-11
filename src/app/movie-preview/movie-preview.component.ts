import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
  @Input() movie: any;
  @Output() onChange: EventEmitter<any>=new EventEmitter<any>();

  public onDelete(): void {
    // alert("S-a apasat butonul de delete!");
    this.onChange.emit();

  }

}
