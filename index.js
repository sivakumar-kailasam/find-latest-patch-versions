const groupBy = require('lodash.groupby');
const values = require('lodash.values');
const semverCompare = require('semver-compare');
const semverUtils = require('semver-utils');

module.exports = function findLatestPatchVersions(versions = []) {
  let groupedVersions = groupBy(
    versions.sort(semverCompare).map(semverUtils.parse),
    (v) => `${v.major}.${v.minor}`
  );

  return values(groupedVersions).map((verGroup) => verGroup.pop().version);
};
