# reviewdog-action-biome-sandbox

このリポジトリは [reviewdog-action-biome](https://github.com/mongolyy/reviewdog-action-biome) のテスト環境です。

## 概要

reviewdog-action-biome-sandbox は、[Biome](https://biomejs.dev/)（JavaScriptとTypeScriptのリンターとフォーマッター）と[reviewdog](https://github.com/reviewdog/reviewdog)（自動コードレビューツール）を統合するGitHub Actionのテスト環境です。このリポジトリは、メインのreviewdog-action-biomeアクションの機能を制御された環境でテストするために使用されます。

このアクションは、Biomeを使用してコードを分析し、その結果をプルリクエスト内のコメントとして直接報告します。これにより、開発者はコードの問題を簡単に特定して修正できるようになります。

## 使用方法

このサンドボックスリポジトリは、以下の目的で使用されます：

1. **機能テスト**: 新機能や修正をメインリポジトリに適用する前に、このリポジトリでテストします
2. **バグ再現**: 報告されたバグを再現し、修正を検証します
3. **設定テスト**: さまざまな設定オプションの動作を確認します

## ワークフロー設定

`.github/workflows/biome.yml` ファイルには、プルリクエスト時に実行されるGitHub Actionsワークフローが定義されています：

```yaml
name: reviewdog
on: [pull_request]
jobs:
  biome:
    name: runner / Biome
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: mongolyy/reviewdog-action-biome@v1
        with:
          github_token: ${{ secrets.github_token }}
          reporter: github-pr-review
          fail_on_error: true
```

## Biome設定

`biome.json` ファイルには、Biomeの設定が含まれています：

```json
{
	"$schema": "https://biomejs.dev/schemas/1.4.1/schema.json",
	"organizeImports": {
		"enabled": true
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	},
	"formatter": {
		"enabled": true,
		"lineWidth": 100
	}
}
```

## テスト方法

1. このリポジトリをフォークまたはクローンします
2. テストしたいコードを含むファイルを作成または変更します
3. プルリクエストを作成します
4. GitHub Actionsが自動的に実行され、Biomeの結果がプルリクエストにコメントとして表示されます

## メインリポジトリとの関係

このサンドボックスリポジトリは、[mongolyy/reviewdog-action-biome](https://github.com/mongolyy/reviewdog-action-biome)の開発とテストをサポートするために使用されます。メインリポジトリに変更を加える前に、このサンドボックス環境で機能やバグ修正をテストすることで、安定したリリースを確保します。

## 貢献方法

1. このリポジトリをフォークします
2. 機能ブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更をコミットします (`git commit -m 'Add some amazing feature'`)
4. ブランチをプッシュします (`git push origin feature/amazing-feature`)
5. プルリクエストを作成します

## ライセンス

このプロジェクトは、メインの[reviewdog-action-biome](https://github.com/mongolyy/reviewdog-action-biome)リポジトリと同じライセンスの下で提供されています。
