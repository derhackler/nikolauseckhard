# Hugo Flex

A lightweight Hugo theme leveraging CSS Flexbox


## Features

- Flexbox-based responsive layout
- Full posts in RSS feed
- Themed RSS feed
- No framework
- No javascript
- 100% speed score on PageSpeed Insight

Optional features:

- Show summaries on homepage
- Schema.org, Open Graph and Twitter Cards metadata
- Utterances comments widget
- CSS and JS can be [dynamically embedded](#dynamically-embedded-css-and-js) with shortcodes
- Built-in shortcodes:
  - Netlify contact form
  - On-click Soundcloud player


## Installation

From the website root:

```bash
git submodule add https://github.com/de-souza/hugo-flex.git themes/hugo-flex
```

The theme must be set in the website config:

```bash
echo 'theme: hugo-flex' >> config.yaml
```


## Updating

From the website root:

```bash
git submodule update --remote --rebase
```


## Example Site

The official [hugoBasicExample](https://github.com/gohugoio/hugoBasicExample) repository may be used as an example site. For a complete starter template for using this theme with in-depth explanations, see [hugo-flex-example](https://github.com/scivision/hugo-flex-example).


## Configuration

Configuration options may be copied and modified from the theme defaults:

```yaml
params:
  color: teal           # Any color in CSS syntax
  width: 42rem          # Any length in CSS syntax
  footer: Except where otherwise noted, content on this site is licensed under a
    a <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">
    Creative Commons Attribution 4.0 International License</a>.
  rss: To subscribe to this RSS feed, copy its address and paste it into your
    favorite feed reader.
  summaries: false      # Set to true to show summaries of posts on homepage
  divider: '\2015\2015' # Set to false to remove divider below posts on homepage
  schema: false         # Set to true to add Schema.org metadata
  opengraph: false      # Set to true to add Open Graph metadata
  twittercards: false   # Set to true to add Twitter Cards metadata
  utterances:
    repo:               # Set to Utterances repo URL to add Utterances comments
    issueterm: pathname
    theme: github-light
  netlify:
    honeypot: false     # Set to true to add honeypot field in contact form
    recaptcha: false    # Set to true to add recaptcha challenge in contact form

menu:
  nav:
  - name: About
    url: about/
    weight: 1
  - name: Posts
    url: post/
    weight: 2
  - name: Tags
    url: tags/
    weight: 3
  - name: Categories
    url: categories/
    weight: 4
  - name: RSS
    url: index.xml
    weight: 5
```


## Built-In Shortcodes

### Netlify Contact Form

A contact form working with the built-in Netlify form handling service is inserted with the shortcode:

```
{{< contact >}}
```

A custom success page URL may be given as a parameter:

```
{{< contact "/success" >}}
```

### On-Click Soundcloud Player

An on-click Soundcloud Player is inserted with the shortcode:

```
{{< soundcloud 123456789 >}}
```

The parameter is a track ID and can be extracted from the "embed" sharing menu on the track webpage.


## Dynamically embedded CSS and JS

To embed additional CSS and JS in custom shortcodes, they must be loaded as resources by Hugo and added to the `.Scratch` variable. As a result, they will be loaded in pages where the shortcodes are used.

For instance, from within a shortcode template:

```html
{{ resources.Get "myscript.js" | fingerprint | .Page.Scratch.SetInMap "js" "myscript" }}
```

As an example here is the shortcode template for the on-click Soundcloud player:

```html
{{ resources.Get "css/soundcloud.css" | minify | fingerprint | .Page.Scratch.SetInMap "css" "soundcloud" }}
{{ resources.Get "js/soundcloud.js" | minify | fingerprint  | .Page.Scratch.SetInMap "js" "soundcloud" }}
<div class="Soundcloud" data-id="{{ .Get 0 }}"></div>
```

## License

This theme is licensed under the [Apache License 2.0](https://github.com/de-souza/hugo-flex/blob/master/LICENSE).
