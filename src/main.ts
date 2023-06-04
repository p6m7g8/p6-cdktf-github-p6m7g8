import { branchDefault, branchProtectionV3, provider, repository, team } from '@cdktf/provider-github';
import { App, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import * as fs from 'fs';

import * as yaml from 'js-yaml';

interface IOrganizationConfig {
  repositories: repository.RepositoryConfig[];
}

interface ITeamConfig {
  name: string;
}

interface IOrgTeamConfig {
  teams: ITeamConfig[];
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.init();
    this.teams();
    this.repositories();
  }

  private init(this: MyStack) {
    new provider.GithubProvider(this, 'Github', {
      token: process.env.GH_TOKEN,
      owner: 'p6m7g8',
    });
  }

  private teams() {
    const fileContents = fs.readFileSync('conf/teams.yml', 'utf8');
    const data = yaml.load(fileContents) as IOrgTeamConfig;

    data.teams.forEach(myteam => {
      new team.Team(this, myteam.name, { name: myteam.name });
    });
  }

  private repositories() {
    const fileContents = fs.readFileSync('conf/organization.yml', 'utf8');
    const data = yaml.load(fileContents) as IOrganizationConfig;

    data.repositories.forEach(repo => {
      new repository.Repository(this, repo.name, {
        name: repo.name,
        homepageUrl: repo.homepageUrl,
        description: repo.description,
        topics: repo.topics,
        licenseTemplate: repo.licenseTemplate,
        allowAutoMerge: repo.allowAutoMerge,
        archiveOnDestroy: repo.archiveOnDestroy,
        deleteBranchOnMerge: repo.deleteBranchOnMerge,
        hasDiscussions: repo.hasDiscussions,
        hasIssues: repo.hasIssues,
        hasProjects: repo.hasProjects,
        vulnerabilityAlerts: repo.vulnerabilityAlerts,
        pages: repo.pages,
      });

      const tf_default_branch_resource_name = 'default_branch_' + repo.name.replace(/\./g, '');
      new branchDefault.BranchDefault(this, tf_default_branch_resource_name, {
        branch: 'main',
        repository: repo.name,
      });

      const tf_branch_protection_resource_name = 'branch_protection_' + repo.name.replace(/\./g, '');
      new branchProtectionV3.BranchProtectionV3(this, tf_branch_protection_resource_name, {
        branch: 'main',
        repository: repo.name,
        // enforceAdmins: true,
        requiredStatusChecks: {
          strict: true,
          checks: [],
        },
      });
    });
  }
}

const app = new App();
new MyStack(app, 'p6-cdktf-github-p6m7g8');
app.synth();
