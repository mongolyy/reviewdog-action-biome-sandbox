# reviewdog-action-biome-sandbox

このリポジトリは [reviewdog-action-biome](https://github.com/mongolyy/reviewdog-action-biome) の動作確認用サンドボックスです。

## 概要

reviewdog-action-biomeは、[Biome](https://biomejs.dev/)（Webプロジェクト用のリンターとフォーマッター）と[reviewdog](https://github.com/reviewdog/reviewdog)を統合するGitHub Actionです。このサンドボックスリポジトリは、メインリポジトリのPRを汚すことなくGitHub Actionsの動作を確認するための専用テスト環境として機能します。

## 構成

このリポジトリには以下のファイルが含まれています：

- `.github/workflows/biome.yml`: GitHub Actionsのワークフロー設定
  - `mongolyy/reviewdog-action-biome@v1`を使用
  - PRレビューコメントとして結果を表示するよう設定
  - エラー時にビルドを失敗させる設定
- `biome.json`: Biomeの設定ファイル
  - インポートの整理機能を有効化
  - 推奨リンタールールを有効化
  - 行の幅を100文字に設定
- `index.js`: テスト用のJavaScriptファイル（意図的なエラーを含む）
- `package.json`: プロジェクト依存関係（Biome）

## 使用方法

1. このリポジトリをフォークまたはクローン
2. テスト用のコードを変更
3. Pull Requestを作成
4. GitHub Actionsが自動的に実行され、reviewdog-action-biomeの動作を確認できます

## ライセンス

MIT
