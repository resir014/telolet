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

Clone it. ( `git clone https://github.com/resir014/telolet.git` )

Then install all the bundled Rubygems.

```bash
$ bundle install
```

Simply running `bundle` also works.

After the plugins are installed, we can now run a local server from within our computer.

```bash
$ bundle exec jekyll serve
# Server address: http://127.0.0.1:4000/telolet/
```

Or you can use grunt:

```bash
$ npm install
$ npm run serve
```

## License

[MIT](LICENSE).
