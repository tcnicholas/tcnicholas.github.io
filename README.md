# Thomas C. Nicholas — personal website

A lean, fast Jekyll replacement for `tcnicholas.github.io`.

## What changed

- Replaced the heavy al-folio stack with a small, mostly static Jekyll site.
- Removed bundled JavaScript frameworks and webfont payloads.
- Updated the contact email to `thomas.nicholas@ugent.be`.
- Added a typographic, essay-like design with responsive layout and dark-mode support.
- Optimised the profile image for web delivery.
- Made publications hand-editable rather than dependent on Jekyll Scholar.

## Local build

Install Ruby, then run:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open the local URL printed by Jekyll, usually:

```text
http://127.0.0.1:4000/
```

For a production build:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The generated site appears in `_site/`.

## Editing

- Home page: `index.md`
- Publications: `_pages/publications.md`
- Software: `_pages/software.md`
- CV: `_pages/cv.md`
- Site metadata: `_config.yml`
- Styling: `assets/css/main.scss`
- Profile image: `assets/img/profile.jpg`

## Deployment

This repository includes a GitHub Actions workflow. In GitHub Pages settings, choose **GitHub Actions** as the build source. Pushing to `gh-pages` or `main` will build and publish the site.
