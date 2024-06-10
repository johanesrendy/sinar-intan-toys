git commit message
This website follows Conventional Commits

installation
You will need husky.sh to run commitlint, if you don't have husky.sh in your .husky directory please install husky

npm install husky --save-dev
Then run npx command to initialize husky

npx husky install
If you tried to write a commit message without following the guidelines below it should look like this

$ git commit -m "coms"
⧗   input: coms
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
If you tried to write a commit message following the guidelines below it should look like this

$ git commit -m "style: remove white-space"
[master 03ea73b] style: remove white-space
 1 file changed, 1 insertion(+), 1 deletion(-)
format
<type>(optional scope): <description> Contoh: feat(pre-event): add speakers section

1. type
Type yang bisa digunakan adalah:

feat: → commits that adds new feature
fix: → commits that fixes bugs
refactor: → commits that rewrite/restructure your code without changing any behaviour
style: → commits that do not effect the meaning (white-space, formatting, missing semi-colons, etc)
test: → commits that adds missing tests or correcting existing tests
docs: → commits that effect documentation only
build: → commits that effect build components (dependencies, project version, etc.)
chore: → commits technical or preventative maintenance
2. description
Description harus bisa mendeskripsikan apa yang dikerjakan.

Tambahkan BREAKING CHANGE di description apabila ada perubahan yang signifikan.

❗jika ada beberapa hal yang dikerjakan, maka lakukan commit secara bertahap.❗

Setelah titik dua, ada spasi. Contoh: feat: add something
Jika type fix langsung sebut issuenya. Contoh: fix: file size limiter not working
Gunakan kata imperative, dan present tense: "change" bukan "changed" atau "changes"
Jangan gunakan huruf kapital di awal kalimat description
Jangan tambahkan titik di akhir description
