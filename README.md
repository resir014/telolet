# [telolet](httpa://resir014.github.io/telolet/)

> Sekarang kamu bisa telolet di rumah!

## Developing & running locally

Requirements:
* Ruby (v2.0.0+)
* Bundler
  (included from within Rails (`gem install rails`), or `gem install bundler`)
* Jekyll <http://jekyllrb.com/>
  (install from within Ruby: `gem install jekyll`)
* Node.js
  (Jekyll requires the Node.js runtime to work)

Clone it. ( `git clone https://github.com/resir014/resir014.github.io.git` )

Then install all the bundled Rubygems.

```bash
$ bundle install
```

Simply running `bundle` also works.

After the plugins are installed, we can now run a local server from within our computer.

```bash
$ bundle exec jekyll serve
```

Or you can use grunt:

```bash
$ grunt serve
```

To optimise image files before pushing to the repo, run this command.

```bash
$ grunt optimise
```

## License

Everything that I write (the stuff I put under `_posts` and `projects`, and image files under `assets/images`) are licensed under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>, except otherwise noted.

Source code is licensed under [MIT](https://github.com/resir014/resir014.github.io/blob/master/LICENSE).
