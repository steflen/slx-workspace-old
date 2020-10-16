// interface for reflecting the current runtime environment
// injected via ENVIRONMENT_TOKEN

import { InjectionToken } from '@angular/core';
import {
  BottomModel,
  DynaGridModel,
  HoverlayModel,
  LanguageModel,
  LocaleModel,
  LookAndFeelModel,
  TimeAndDateModel,
  TopModel,
} from '../models';

export interface Environment {
  'production': boolean;
  'appTitle': string;
  'platform': 'web' | 'desktop' | 'mobile';
  'apiPath': string;
  'domain-init': {
    settings: {
      language: LanguageModel;
      locale: LocaleModel;
      lookAndFeel: LookAndFeelModel;
      timeAndDate: TimeAndDateModel;
    };
    board: {
      'dyna-grid': DynaGridModel;
      'hoverlay': HoverlayModel;
    };
    platform: {
      bottom: BottomModel;
      top: TopModel;
    };
  };
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');
