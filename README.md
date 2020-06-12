This is the source of the homepage of the artist Nikolaus Eckhard

# Usage

## Create a new project (based on the template)

1. `hugo new projects/name-of-the-project`
2. Replace the title, tags, coverimage, and text

## Creating Content

1. checkout the repository
2. create a new folder with the project name in `content/projects`
3. create an `index.md` file in this folder (copy it from another)
4. write the text in [markdown](https://www.markdownguide.org/basic-syntax)


# Developing

## Prerequisites

* Git
* Hugo


## How to run locally

run `hugo server -D` in your source directory

## Deploying

Changes are deployed via the github pipeline "CD" workflow on every push to https://nikolauseckhard.at/draft.

When the tag "release" gets set to a revision, this revision will be deployed to https://nikolauseckhard.at. To tag the release do this:

```
git push origin :refs/tags/release
git tag -fa release
git push origin master --tags
```


## How to Contribute

1. Get in contact with Nikolaus Eckhard to align the planned changes
2. Create a pull request with your changes

# Attributions

* https://discourse.gohugo.io/t/resizing-front-matter-images/18246/14 - for resizing images
* Laura Kalbag for [responsive image shortcodes](https://laurakalbag.com/processing-responsive-images-with-hugo/)
* kaushalmodi for his [answer on rendering a/b as fraction](https://discourse.gohugo.io/t/solved-how-to-prevent-a-text-character-from-being-transformed/13850).
* robinsblog for the [grayscale css effect](https://robinroelofsen.com/change-images-grayscale-color-hover)
* sol at stackoverflow for the [line in between the grid rows](https://stackoverflow.com/questions/50769251/border-after-each-row-in-css-grid)
* Bat-Chat on github on how to [override a github tag](https://gist.github.com/Bat-Chat/1d27ce1b5074a83ef8d43524c19b11b8)
