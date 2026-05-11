# tokipona-card

インタラクティブな語彙カードを使ってトキポナ（Toki Pona）の文を組み立てる、ウェブベースのドラッグ＆ドロップツールです。各カードには、`linja suwi` 文字、ラテン文字、および日本語訳が表示されます。

[**ライブデモ**](https://code4fukui.github.io/tokipona-card/)

![tokipona-cardインターフェースのスクリーンショット。白いキャンバスの左側と上部にカードの山が表示されています。カードは灰色で黒い文字です。左側には「mi」や「sina」などの代名詞の山があり、その下には「li」や「e」などの助詞の山があります。右側にはアルファベット順に並んだ主要語彙の山が配置されています。](https://user-images.githubusercontent.com/1552844/280789073-77441584-0738-4034-8097-092592751711.png)

## 機能

-   **インタラクティブな文の構築:** カードをドラッグ＆ドロップして、広いキャンバス上で視覚的に文を組み立てることができます。
-   **豊富なカード情報:** 各カードには単語が3つの形式で表示されます:
    -   ラテン文字（例: `toki`）
    -   `linja suwi` 文字（sitelen ponaの変種）
    -   日本語訳（例: `言語`）
-   **整理された語彙:** カードはカテゴリごとにあらかじめ分類されています。代名詞、助詞、句読点は左側にまとめられ、主要な語彙は右側にアルファベット順の山として配置されています。
-   **高頻度語:** 代名詞（`mi`、`sina`）、助詞（`li`、`e`）、句読点などのよく使われる単語は、利便性のために複数枚（各3枚）用意されています。
-   **インストール不要:** 最新のウェブブラウザ上で完全に動作します。

## 使い方

1.  ウェブブラウザで[ライブデモ](https://code4fukui.github.io/tokipona-card/)を開くか、ローカルの `index.html` を開きます。
2.  整理されたカードの山からカードをクリックして、メインの白い領域にドラッグします。
3.  カードを並べてフレーズや文を作成します。

## データと依存関係

このプロジェクトは完全にクライアントサイドで動作し、以下の外部リソースを読み込みます:

-   **単語データ:** `code4fukui/tok2jpn` プロジェクトの [tok2jpn.csv](https://code4fukui.github.io/tok2jpn/tok2jpn.csv)
-   **フォント:** `linja suwi` 文字の描画に使用する [linjasuwi.otf](https://code4fukui.github.io/tok2jpn/linjasuwi.otf)
-   **JavaScriptライブラリ:**
    -   [DraggableCards.js](https://code4fukui.github.io/draggable-cards/DraggableCards.js) （ドラッグ＆ドロップ機能）
    -   [CSV.js](https://js.sabae.cc/CSV.js) （単語データファイルのパース）
    -   [shuffle.js](https://js.sabae.cc/shuffle.js) （配列のシャッフル）

## 関連プロジェクト

-   [tok2jpn](https://code4fukui.github.io/tok2jpn/): 本プロジェクトのデータソース。
-   [mekuriawase-tokipona](https://code4fukui.github.io/mekuriawase-tokipona/): トキポナのマッチングゲーム（神経衰弱）。

## 参考資料

-   [Toki Pona (公式サイト)](https://tokipona.org/)
-   [linja suwi フォント](https://linjasuwi.ap5.dev/)

## ライセンス

[MIT](LICENSE)
