import { loadConfiguration } from '@cucumber/cucumber/api';
import { runCucumber } from '@cucumber/cucumber/api';
import { resolve } from 'path';

import path from 'path';

(async () => {
  await runCucumber({
    sources: [path.resolve('features')],
    support: [path.resolve('steps')],
    formats: [], // add reporters here if needed, e.g. ['html:reports/report.html']
  });
})();