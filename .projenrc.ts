import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'p6-cdktf-github-p6m7g8',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/p6m7g8/p6-cdktf-github-p6m7g8',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();