import { APP_INITIALIZER } from '@angular/core';
import { StateService } from './state.service';
import { RouterEffectsService } from './router-effects.service';

function initializeState(state: StateService, effects: RouterEffectsService) {
  return (): void => {
    state.init();
    effects.init();
  };
}

/**
 * **🚀 Perf Tip for LCP, TTI:**
 *
 * Use `APP_INITIALIZER` and an init method in data services to run data fetching
 * on app bootstrap instead of component initialization.
 */
export const GLOBAL_STATE_APP_INITIALIZER_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeState,
    deps: [StateService, RouterEffectsService],
    multi: true
  }
];
