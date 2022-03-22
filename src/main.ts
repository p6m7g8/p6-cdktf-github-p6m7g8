import { GithubProvider } from "@cdktf/provider-github";
import { App, TerraformStack, RemoteBackend } from "cdktf";
import { Construct } from "constructs";
import { Repository } from "./generated/providers/github";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    this.init();
    this.repositories();
  }

  private init() {
    new RemoteBackend(this, {
      hostname: "app.terraform.io",
      organization: "p6m7g8",
      workspaces: {
        name: "p6",
      },
    });

    new GithubProvider(this, "gp-p6m7g8", {
      token: process.env.GH_TOKEN,
      organization: "p6m7g8",
    });
  }

  private repositories() {
    new Repository(this, ".github", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: ".github",
      description: "P6M7G8 Website",
      topics: ["p6", "markdown", "profile"],
    });

    new Repository(this, "p6m7g8.github.io", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6m7g8.github.io",
      description: "P6M7G8 Website",
      topics: ["p6", "pages", "website", "nextjs", "projen", "cdk"],
    });

    new Repository(this, "p6-cdktf-github-p6m7g8", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-cdktf-github-p6m7g8",
      description: "P6M7G8 Repository Manager",
      topics: [
        "p6",
        "cdktf",
        "projen",
        "cdk",
        "github",
        "terraform",
        "typescript",
      ],
    });

    new Repository(this, "p6-cdk-github-cve-alerter", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-cdk-github-cve-alerter",
      description: "Github Alerts via GraphQL to you",
      topics: [
        "p6",
        "cdk",
        "projen",
        "github",
        "graphql",
        "cve",
        "datadog",
        "typescript",
        "serverless",
      ],
    });

    new Repository(this, "gh-parallel", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "gh-parallel",
      description:
        "P6 Github CLI Extension to supercharge cloning/syncing with parallelism",
      topics: [
        "p6",
        "github",
        "git",
        "opensource",
        "clone",
        "parallel",
        "all-contributors",
        "gh-extension",
        "shell",
      ],
    });

    new Repository(this, "p6-slab-graphql-schema", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-slab-graphql-schema",
      description: "Types for Slab's GraphQL API",
      topics: [
        "p6",
        "projen",
        "cdk",
        "slab",
        "github",
        "graphql",
        "typescript",
        "types",
      ],
    });

    new Repository(this, "p6-cirrus", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-cirrus",
      description: "opinionated CLI actions",
      topics: [
        "p6",
        "shell",
        "cli",
        "bash",
        "zsh",
        "posix-2",
        "alfred",
        "aws",
        "ssh",
      ],
    });

    new Repository(this, "p6-projen-project-awesome-list", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-projen-project-awesome-list",
      description: "projen external project for Awesome Lists",
      topics: ["p6", "projen", "awesome", "awesome-list", "cdk", "construct"],
    });

    new Repository(this, "awesome-projen-NG", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "awesome-projen-NG",
      description: "Awesome List for AWS's Projen",
      topics: ["p6", "projen", "awesome", "awesome-list", "cdk", "construct"],
    });

    new Repository(this, "p6-cdk-namer", {
      defaultBranch: "main",
      homepageUrl: "https://p6m7g8.github.io",
      name: "p6-cdk-namer",
      description: "Awesome List for AWS's Projen",
      topics: ["p6", "projen", "awesome", "awesome-list", "cdk", "construct"],
    });
  }
}

const app = new App();
new MyStack(app, "p6-cdktf-github-p6m7g8");
app.synth();
