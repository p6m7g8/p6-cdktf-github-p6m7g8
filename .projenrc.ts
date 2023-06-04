import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  name: 'p6-cdktf-github-p6m7g8',
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  repositoryUrl: 'https://github.com/p6m7g8/p6-cdktf-github-p6m7g8',
  defaultReleaseBranch: 'main',
  cdktfVersion: '^0.16.3',
  constructsVersion: '10.1.167',
  jsiiVersion: '~5.0.0',
  projenrcTs: true,

  bundledDeps: [
    'js-yaml',
  ],
  deps: [
    '@cdktf/provider-github',
    'js-yaml',
  ],
  devDeps: [
    '@types/js-yaml',
  ],
});
project.synth();
