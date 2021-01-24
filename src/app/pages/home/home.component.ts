import {Component, OnInit} from '@angular/core';
import {FeedFeedRead} from "../../../swagger/models/feed-feed-read";
import {FeedService} from "../../../swagger/services/feed.service";
import GetFeedCollectionParams = FeedService.GetFeedCollectionParams;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public feedList: FeedFeedRead[] = [];
  protected feedParam: GetFeedCollectionParams;

  constructor(
    private feedService: FeedService
  ) {
  }

  ngOnInit(): void {
    this.getFeedData();
  }

  protected getFeedData() {
    this.feedParam = <GetFeedCollectionParams>{};
    this.feedParam.page = 1;
    this.feedParam.itemsPerPage = 10;
    this.feedService.getFeedCollection(this.feedParam).subscribe((response) => {
        this.feedList = response;
    }, error => {
      console.error(error);
    })
  }

  public openWindow(event: FeedFeedRead){
    console.log(event);
    window.open(event.source);
  }

}
