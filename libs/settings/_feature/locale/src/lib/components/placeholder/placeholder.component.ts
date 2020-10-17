import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'slx-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnInit {
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  async ngOnInit() {
    if (this.activatedRoute.snapshot.url[0].path === 'locale') {
      import('../lazy-locale/locale.component').then(({ LocaleComponent }) => {
        if (LocaleComponent) {
          const component = this.componentFactoryResolver.resolveComponentFactory(LocaleComponent);
          const componentRef = this.templateViewContainerRef.createComponent(component);
        }
      });
    }
    if (this.activatedRoute.snapshot.url[0].path === 'lazy-whatever') {
      import('../lazy-whatever/whatever.component').then(({ WhateverComponent }) => {
        if (WhateverComponent) {
          const component = this.componentFactoryResolver.resolveComponentFactory(WhateverComponent);
          const componentRef = this.templateViewContainerRef.createComponent(component);
        }
      });
    }
  }
}
