import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FeedFeedRead} from "../../../swagger/models/feed-feed-read";

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss']
})
export class TrendCardComponent implements OnInit {

  @Input() feed: FeedFeedRead;
  @Output() goFeed: EventEmitter<FeedFeedRead> = new EventEmitter;

  constructor() {
  }

  ngOnInit(): void {
  }


  viewFeed(){
    this.goFeed.emit(this.feed);
  }
}
