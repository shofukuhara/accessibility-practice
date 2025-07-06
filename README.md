### 🛠 使用技術 
| 使用しているもの   | バージョン     | 説明                                    |
|-----------------|-------------|------------------------------------------|
| `Astro`         | `v5.3.0`    | フロントエンドフレームワーク                  |
| `SCSS (FLOCSS)` | `Dart Sass` | CSS設計手法（FLOCSS構成）                   |
| `Vanilla JS`    | `ES Modules`| 素のJavaScript（ESモジュール化）             |
| `Node.js`       | `v22.12.0`  | JavaScript 実行環境                        |
| `npm`           | `v10.9.0`   | パッケージマネージャ                         |
| `Vite`          | `v6.1.1`    | 開発・ビルドツール                           |



### 📕 スクリプト
| Command              | Action                                                |
| :------------------- | :---------------------------------------------------- |
| `npm install`        | 依存関係をインストール(初回だけ) 　                       　|
| `npm run dev`        | ローカル開発サーバー localhost:4321起動                   |
| `npm run build`      | ビルドファイル出力 `./dist/`                             |
| `npm run preview`    | ビルドしたファイルで表示確認 localhost:4321起動　　　        |
| `npm run style:lint` | SCSSファイルのLintチェックを実行                          |
| `npm run format`     | ファイルをフォーマット 　                                 |
| `npm run renameToPhp`| distに出力されたindex.htmlをindex.phpに変換               |


### 🌲 ディレクトリ構成
```text
/
├─ _php #ビルド後の.htmlファイルを.phpにして格納されるディレクトリ
│
├─ .astro #astroの設定ファイル
│
├─ .vscode #vscode設定ファイル
│
├─ config
│  ├─ .prettierignore #prettier対象外ファイルを指定
│  ├─ .prettierrc #prettierの設定ファイル
│  ├─ postcss.config.cjs #PostCSSの設定ファイル
│  └─ rename-index-to-php.mjs #index.htmlをPHPファイルに変換するスクリプト
│
├─ dist #ビルド後の成果物が格納されるディレクトリ
│  ├─ assets
│  │  ├─ css
│  │  ├─ fonts
│  │  ├─ images
│  │  └─ js
│  └─ index.html
│
├─ node_modules　#インストールされたパッケージ
│
├─ public #静的ファイルを格納するディレクトリ。ビルド時にそのままdistにコピーされる。（OGP,fontsなど）
│  └─ assets
│     ├─ fonts
│     └─ images
│
├─ src
│  ├─ assets 
│  │  ├─ css #SCSSファイルを格納するディレクトリ。FLOCSSの構造に基づいている。
│  │  │  ├─ foundation
│  │  │  │  ├─ global #グローバルファイル（メディアクエリ、フォント計算、変数定義など）
│  │  │  │  └─ setting #設定ファイル（ベースとなるものリセット、ルートなど）
│  │  │  │
│  │  │  ├─ layout #レイアウト用スタイル（ヘッダー、フッターなど）
│  │  │  │
│  │  │  ├─ object
│  │  │  │  ├─ components #UIコンポーネント（ボタン、カードなど）
│  │  │  │  ├─ elements #小さいパーツ（タイトル、テキスト、画像など）
│  │  │  │  └─ pages #ページ単位のスタイル
│  │  │  └─ index.scss #エントリーファイル
│  │  │   
│  │  ├─ images #astroで最適化する画像などを格納
│  │  └─ js #Vanilla JS
│  │
│  ├─ components #再利用可能なAstroコンポーネント（ボタン、カードなど）
│  ├─ config #metaなどの設定ファイル
│  ├─ layouts #ページレイアウトのAstroコンポーネント（ヘッダー、フッターなど）
│  └─ pages #ルーティングに使用されるAstroページコンポーネント（home,about、news など）
│
├─ .gitignore #Gitの追跡対象外ファイルを指定
├─ astro.config.mjs #Astro・viteの設定ファイル(ビルドの設定)
├─ package-lock.json #npmパッケージの依存関係
├─ package.json #ロジェクトの依存関係やスクリプト
└─ README.md #プロジェクトのドキュメント
```
