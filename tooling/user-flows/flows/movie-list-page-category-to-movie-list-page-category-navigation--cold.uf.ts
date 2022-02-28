import { captureReport, FlowActions, FlowOptions, PPTOptions } from '../utils';
import { SidebarUFO } from './ufo/mobile/side-bar.ufo';
import { MovieListPageUFO } from './ufo/desktop/movie-list-page.ufo';

const pptOptions: PPTOptions = { headless: false };
const flowOptions: FlowOptions = { name: 'Category Navigations - Cold' };

function setupFlowActions(cfg: { baseUrl: string }): FlowActions {
  return async (flow: any, page: any): Promise<void> => {
    const testUrl = `${cfg.baseUrl}list/category/popular`;
    const sidebar = new SidebarUFO(page);
    const movieListPage = new MovieListPageUFO(page);
    const topRatedName = 'topRated';

    await flow.navigate(testUrl, {
      stepName: 'Page Category-Popular navigation',
    });
    await movieListPage.awaitAllContent();

    await flow.startTimespan({
      stepName: 'Page Category-Popular top-rated navigation',
    });
    await sidebar.navigateToCategory(topRatedName);
    await movieListPage.awaitAllContent();
    await flow.endTimespan();

    return Promise.resolve();
  };
}

export const report = async (cfg: any) =>
  await captureReport(pptOptions, flowOptions, await setupFlowActions(cfg));
