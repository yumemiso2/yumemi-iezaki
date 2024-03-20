# yumemi-iezak
## 命名規則について


### HTMLクラス名ルール

【BEM ルール】
- Element は Block の中に必ず入れる必要がある
- Elementのclass名には、必ず所属するBlock名を先頭に含める
- Block の中に Block を含めることはできる
- クラス名、クラス名 のときは、Button Button--Small のような形で名付ける

【自分ルール】
- Block = キャメルケース
- Element が2語以上続く場合 = キャメルケースでまとめていく
- 長く続く名前になりそうな場合 = 切りの良いところで、役割に近い名前のブロック名（Element名）に変換して続ける
- 単独で扱いたいコンテンツは、Blockとして用意する

**追加したルール**
- Element名は、入っても入らなくても良い（長い名前になりすぎる、必ずにすると、クラス名追加時などの修正に弱くなるため）


### Githubブランチ名ルール

- すべて小文字
- 「すること - ディレクトリ名 or ファイル」(ex:add-readmetext)


### ディレクトリ名ルール
- すべて小文字
- 原則ページ名でつける（ex：works）

### れんしゅう、モーダルの更新方法
サムネイル画像は、``/Users/yumemi/Documents/GitHub/yumemi-iezaki/index.html``の、以下をコピペで追加する（先頭に追加）

```html
<li class="ScrollList__Item">
  <a class="ScrollList__ItemLink js-modal js-modal3" data-micromodal-trigger="modal-1">
    <div class="ScrollList__ItemLinkInner">
      <div class="ScrollHover">
        <h2 class="ScrollHover__Name">クリックカウンター</h2>
        <p class="ScrollHover__Description">JavaScript を使用して制作したクリックカウンターです</p>
      </div>
    </div>
    <img class="ScrollList__ItemLinkImage" src="/assets/images/practice-counter.png" alt="クリックカウンター">
  </a>
</li>
```
- 画像・タイトル・テキストを変更する
- alt ="" を記述する（.ScrollHover__Name と同じテキストにする）

モーダルは、以下をコピペで追加する！！（先頭に追加）

```html
<div class="swiper-slide">

  <div class="PopupItem">
    <p class="PopupItem__Image"><img src="/assets/images/practice-counter.png" alt="クリックカウンター" class="PopupItem__ImageInner"></p>
    <div class="PopupItem__Desctiption">
      <div class="PopupItem__DesctiptionHeader">
        <h2 class="PopupItem__DesctiptionTitle">クリックカウンター</h2>
        <time datetime class="PopupItem__DesctiptionDate">2023&nbsp;年&nbsp;11&nbsp;月&nbsp;</time>
      </div>
      <div class="PopupItem__DescriptionTextContainer">
        <div class="PopupItem__DescriptionTextContainerInner">
          <div class="PopupItem__DescriptionText">
            <p class="PopupItem__DescriptionTextInner">JavaScript の練習として、クリックすると値が増減するカウンターをつくりました！</p>

            <div class="PopupItem__DesctiptionLinkButton">
              <a class="PopupItem__DesctiptionLinkButtonInner" target="_blank" rel="noopener noreferrer" href="https://codepen.io/yumemiso07/pen/wvNeYLY">
                <p class="PopupItem__DesctiptionLinkButtonInnerText">CodePen&nbsp;でみる</p>
                <img class="PopupItem__ButtonArrow" src="/assets/images/link-arrow.svg" alt="ジャンプリンク用アイコン">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="PopupCloseButton">
        <div class="PopupCloseButton__Inner">
          <a class="Button Button--Small" aria-label="Close modal" data-micromodal-close><span class="Button__Inner">とじる</span></a>
        </div>
      </div>
    </div>
  </div>

</div><!-- /.swiper-slide -->
```


- 画像・タイトル・日付・テキストを変更する



-  url  がある場合は必ず変更後リンク先を確認する。新規タブで開くので、
  ``target="_blank" rel="noopener noreferrer" ``をつける！！（`<a class="WorkIntroduce__LinkButtonInner" target="_blank" rel="noopener noreferrer" href="https://codepen.io/yumemiso07/pen/wvNeYLY">`）


### つくったもの 新規ページ追加について
- works > 作品名フォルダを作成 > index.html
- htmlのheader 内、以下を適切に書き直す！！


```html
  <meta property="og:title" content="いえざきゆめみのポートフォリオ">
  <meta property="og:description" content="いえざきゆめみのポートフォリオです。たくさんいろんなものを作って、このポートフォリオを豊かにしていきます。">
  <meta property="og:url" content="https://iezakiyumemi.com/works/">
  <meta property="og:image" content="https://iezakiyumemi.com/assets/images/ogp.png">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="いえざきゆめみのポートフォリオ">
  <title>つくったもの&nbsp;|&nbsp;いえざきゆめみのポートフォリオ</title>
  <meta name="description" content="いえざきゆめみのポートフォリオです。たくさんいろんなものを作って、このポートフォリオを豊かにしていきます。"> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
  <script src="/assets/shared/js/script.js" defer></script>
  <link rel="stylesheet" href="/assets/shared/css/reset.css">
  <link rel="stylesheet" href="/assets/shared/css/style.css">
  <link rel="stylesheet" href="/works/css/style.css">
```



### その他メモ
- ``data-micromodal-trigger="modal-1 id= "modal-1"``は、Micromodal.js を発火させるため関係性の紐づけに使用している
