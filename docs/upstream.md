# Maintaining your fork's upstream relationship

So you forked this repo. That's awesome. But don't forget to keep your `main` branch in sync with the upstream `main` branch, so your pull requests can always be merged.

## How to sync with upstream?

With a locally cloned repository, you can do this with git with your CLI as follows.

#### Add upstream

First you want to verify your current remote config settings.

```bash
$ git remote -v
```

This should return

```bash
origin  https://github.com/[yourUserName]/auro-hyperlink.git (fetch)
origin  https://github.com/[yourUserName]/auro-hyperlink.git (push)
```

To add the upstream repo to your local forked project

```bash
$ git remote add upstream https://github.com/AlaskaAirlines/auro-hyperlink.git
```

To validate this worked, run the following again

```bash
$ git remote -v
```

```
origin  https://github.com/[yourUserName]/auro-hyperlink.git (fetch)
origin  https://github.com/[yourUserName]/auro-hyperlink.git (push)
upstream        https://github.com/AlaskaAirlines/auro-hyperlink.git (fetch)
upstream        https://github.com/AlaskaAirlines/auro-hyperlink.git (push)
```

#### Sync upstream

To sync your `main` branch with the upstream `main` branch, use one of two methods. The preferred method is to fetch and rebase. Please do not merge down.

```bash
$ git checkout main

$ git fetch upstream
$ git rebase upstream/main
```

Then to sync your feature branch,

```bash
$ git checkout feature-branch
$ git rebase main
```

#### Brute force

In the case where your `main` branch's history is not in sync with the upstream, then you have a few options. The nuclear option is to trash the fork and re-fork, but an easier way is to force reset your `main` branch to match the upstream `main` branch. Run the following command.

```bash
$ git reset --hard upstream/main
```

Just to make sure that all things are synced correctly, run the following:

```bash
$ git checkout main

$ git fetch upstream
$ git rebase upstream/main
```

## Maintain upstream

Once you have connected your local forked clone to the upstream repo, maintenance is the key. It is important to ensure that your `main` branch is always updated before you create a new branch intended to be used with a new pull request. This helps eliminate potential issues with merging when the `main` branches are out of sync.
