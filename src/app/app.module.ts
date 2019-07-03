import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {B2cStorefrontModule} from '@spartacus/storefront';

import { translationChunksConfig, translations } from '@spartacus/assets';

@NgModule({
  imports:      [ BrowserModule, 
  
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
        }
      },
      context: {
        parameters: {
          baseSite: { 
            default: 'electronics-spa'
          }         
        }
      },
      i18n: {
        // resources: translations,
        // chunks: translationChunksConfig
        chunks: [],
        // fallbackLang: 'en',
      },
    }) 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
