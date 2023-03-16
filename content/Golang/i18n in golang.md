There are no good examples of [golang.org/x/text](https://golang.org/x/text)  uses and description of how pluralization made. So, this is it.

#### Generating translations

> You should specify valid [ISO-3166 locale code](https://www.iso.org/obp/ui/#iso:code:3166) to get plurals working!

Write your code:

```go
import (
	"golang.org/x/text/language"
	"golang.org/x/text/message"
)

lang := language.MustParse('ru-RU')
printer := message.NewPrinter(lang)

count := 1
printer.Sprintf("%d butterflies", count)
```

Then run generator for your locale (mine is `ru-RU`):

```shell
gotext -srclang=en-GB update -lang=ru-RU \
	-out=translations.go github.com/path/to-output-folder
```

This will generate `out.gotext.json` in `/path/to-output-folder/ru-RU` of your project. Copy it to `messages.out.json`.

#### Translating and adding plural forms

Change `"translation"` value in generated `messages.gotext.json` to `string` or `object` of the form shown below if you want pluralize strings, ==then run gotext command again==, it will generate `.go files with translations`.

According to [source files of gen_common](https://github.com/golang/text/blob/master/feature/plural/gen_common.go#L19), there's a couple of forms: 
- `=N`, `!=N`,  `%N`  for exact matches
- `zero` | `one` | `two` | `few` | `many` | `other`  - they're different for each language, so, 

```json
{
  "id": "{Count} butterflies",
  "message": "{Count} butterflies",
  "translation": {
	"select": {
	  "feature": "plural",
	  "arg": "Count",
	  "cases": {
		"one": {
		  "msg": "{Count} бабочка"
		},
		"few": {
		  "msg": "{Count} бабочки"
		},
		"many": {
		  "msg": "{Count} бабочек"
		},
		"other": {
		  "msg": "{Count} бабочуль"
		}
	  }
	}
  },
  "placeholders": [
	{
	  "id": "Count",
	  "string": "%[1]d",
	  "type": "int",
	  "underlyingType": "int",
	  "argNum": 1,
	  "expr": "count"
	}
  ]
},
```

#### Using go-generate

Write this at some `.go` file:

```go
//go:generate gotext -srclang=en-GB update -out=translations.go -lang=ru-RU github.com/muerwre/vault-golang/internal/api
```

Then run go generation:

```shell
go generate ./...
```

#### Useful links
- [All available forms in this .go file](https://github.com/golang/text/blob/master/feature/plural/gen_common.go#L19)
- [Answer, that solved it for me](https://community.crowdin.com/t/plurals-in-gotext-json-files/600)
