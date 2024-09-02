# typescript-boilerplate-202408

- サーバサイドバッチ用の boilerplate 2024年8月版
- 使い方はzipダウンロードして、`batch/package.json` の `name` を修正。

# 構成

## 開発用依存関係

| name             | version | 備考                            |
|------------------|---------|-------------------------------|
| @biomejs/biome   | 1.8.3   | linter/formatter              |
| typescript       | 5.5.4   | typescript                    |
| @tsconfig/node22 | 22.0.0  | tsconfig の node22 base config |
| @types/node      | 22.1.00 | nodejs の型指定                   |
| vitest           | 2.0.5   | テストフレームワーク                    |

# 言語／パッケージ管理

| name  | version | 備考                          |
|-------|---------|-----------------------------|
| node  | 22.6.0  | nodejs lts                  |
| yarn  | 1.22.22 | WebStorm では yarn 1 のみ対応している |
| volta | 1.1.1   | nodejs/yarn の管理             |

# 開発環境構築

## volta インストール
 
- https://docs.volta.sh/guide/getting-started

## Node.js／Yarn／Package インストール

```bash
yarn install
```

# ci

- .github/workflows/volta-build-and-test.yml
  - 標準的な nodejs build and test
