import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    console.log("Including run-time dependency.");

    var o = document.createElement("script");
    o.async = true;
    o.src = 'assets/test.js';
    o.onload = function(event)
    {
      // Should only be fired once.
      console.log("OnloadEvent Fired", event);
    };
    document.querySelector("head")!.appendChild(o);

  }

  title = 'osano-test';
}
