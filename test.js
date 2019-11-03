import test from 'ava';
import findLatestPatchVersions from './index';

test('it works', (t) => {
  t.deepEqual(findLatestPatchVersions(), []);
  t.deepEqual(findLatestPatchVersions([]), []);

  t.deepEqual(findLatestPatchVersions(['1.1.0', '1.1.1', '1.1.15', '1.2.0', '3.5.0']), [
    '1.1.15',
    '1.2.0',
    '3.5.0'
  ]);
});
