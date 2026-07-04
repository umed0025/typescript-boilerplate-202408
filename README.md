# typescript-boilerplate-202408

- サーバサイドバッチ用の boilerplate 2024年8月版
- 使い方はzipダウンロードして、`batch/package.json` の `name` を修正。

# 構成

## 開発用依存関係

| name             | version | 備考                            |
|------------------|---------|-------------------------------|
| @biomejs/biome   | 1.8.x   | linter/formatter              |
| typescript       | 5.5.x   | typescript                    |
| @tsconfig/node24 | 24.x.x  | tsconfig の node24 base config |
| @types/node      | 22.x.x | nodejs の型指定                   |
| vitest           | 2.x.x   | テストフレームワーク                    |

# 言語／パッケージ管理

| name  | version | 備考                          |
|-------|---------|-----------------------------|
| node  | 24      | nodejs lts                  |
| npm   | 11.16.0 | 新規公開パッケージに7日間の待機期間を設定 |
| mise  | latest  | nodejs の管理                  |

# 開発環境構築

## mise インストール
 
- https://mise.jdx.dev/getting-started.html

## Node.js／Package インストール

```bash
mise install
cd batch
npm install
```

# ci

- .github/workflows/mise-build-and-test.yml
  - 標準的な nodejs build and test
