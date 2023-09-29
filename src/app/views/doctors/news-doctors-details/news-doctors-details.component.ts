import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-news-doctors-details',
  templateUrl: './news-doctors-details.component.html',
  styleUrls: ['./news-doctors-details.component.css']
})
export class NewsDoctorsDetailsComponent implements OnInit{
  @Input() imageNews!:string;
  @Input() title!:string;
  @Input() description!:string;
  @Input() info!:string;
  @Input() view!:string;

  @Input() newsList: any;

//CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  news: Array<any> = [];
  new: any;
  id="" ;
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.newsSource.getSources('news').subscribe((data: any): void => {
      this.news = data;
      this.new = this.news.find(x => x.id == this.id);

      console.log("Sources: ", this.new);
      console.log("Sources: ", this.id);

    });


  }


}
