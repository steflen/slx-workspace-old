import { createAction, props } from '@ngrx/store';
import { HoverlayModel } from '@slx/shared-common';
import { BOARD_FEATURE_HOVERLAY } from '../board.features';

export const initHoverlay = createAction(`${BOARD_FEATURE_HOVERLAY}: Init`, props<{ hoverlay?: HoverlayModel }>());
