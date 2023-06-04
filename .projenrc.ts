import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  name: 'p6-cdktf-github-p6m7g8',
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  authorOrganization: true,
  repositoryUrl: 'https://github.com/p6m7g8/p6-cdktf-github-p6m7g8',
  description: "P6M7G8 Organization Repository Manager CDKTF Construct",
  stability: "experimental",
  keywords: ["cdk", "cdktf", "terraform-cdk", "projen", "github"],

  defaultReleaseBranch: 'main',
  cdktfVersion: '^0.16.3',
  constructsVersion: '10.1.167',
  jsiiVersion: '~5.0.0',
  projenrcTs: true,

  releaseFailureIssue: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["p6m7g8-automation"],
  },

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
