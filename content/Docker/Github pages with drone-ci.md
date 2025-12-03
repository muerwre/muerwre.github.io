To deploy github pages with [Drone-ci](Drone-ci.md) you will need `.drone.yml` as specified below. You also should define secrets  `github_username` and `github_token` (get it [here](https://github.com/settings/tokens)) in your drone's repository setup.

Github repository should be named as `yourname.github.io` and it could be accessed at https://yourname.github.io/. Otherwise it'll be available at https://yourname.github.io/repo-name/, what you might not like.

You should create branch named `gh-pages` in that repo and setup GH Pages at `https://github.com/<yourusername>/<yourusername>.github.io/settings/pages`.

This config will update `gh-pages` branch in your project, which will contain only generated content. I know, that's bad, but there's no better way to do that with generic drone plugins.

```yaml
kind: pipeline
name: build
type: docker

platform:
  os: linux
  arch: amd64

steps:
  - name: build
    image: node:16
    commands:
      - yarn
      - yarn generate
      - rm -rf ./docs
      - mv ./.output/public ./docs
      - touch ./docs/.nojekyll
  - name: publish
    image: plugins/gh-pages
    settings:
      target_branch: gh-pages
      username:
        from_secret: github_username
      password:
        from_secret: github_token
```

Here we're moving `./.output/public` to `./docs`, because #nuxt creates symlink for `docs` and git can't work with that.

Also we create `.nojekyll` at the root of repo, so github's internal engine won't [ignore files that start with underscore](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/).

## Additional reading

- [Drone Github Pages Documentation](https://plugins.drone.io/plugins/gh-pages)
- [Bypassing Jekyll on GitHub Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
