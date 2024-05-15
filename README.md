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
    <a class="ScrollList__ItemLink js-modal" data-micromodal-trigger="modal-1">
      <div class="ScrollList__ItemLinkInner">
        <div class="ScrollHover">
          <h2 class="ScrollHover__Name">大名古屋電脳博覧会 2023<br>図録掲載</h2>
          <p class="ScrollHover__Description">大名古屋電脳博覧会 2023 の作品図録に Moogle が掲載されました！</p>
        </div>
      </div>
      <img class="ScrollList__ItemLinkImage" src="/assets/images/dennouhaku-topmv.jpg" alt="大名古屋電脳博覧会 2023">
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

### つくったもの 下層ページに 作品導線を追加について
- works / index.html に以下コピペ
- 該当箇所を修正

```html
      <!-- Past and Future. -->
      <section class="WorksItem">
        <div class="WorksItem__Inner BackgroundRounded">
          <div class="WorksItem__Slide js-scrollfadein fadein">
            <div class="WorksItem__Img swiper mySwiper">
              <div class="ImgList swiper-wrapper">
                <div class="ImgList__Inner swiper-slide">
                  <a href="/works/past-and-future/" class="ImgList__Link"><img src="/assets/images/past-and-future-mv.jpg" class="ImgList__LinkImage" alt="Past and Future.">
                  </a>
                </div>
                <div class="swiper-slide ImgList__Inner">
                  <a href="/works/past-and-future/" class="ImgList__Link"><img src="/assets/images/past-and-future-clock.jpg" class="ImgList__LinkImage" alt="Past and Future.">
                  </a>
                </div>
                <div class="swiper-slide ImgList__Inner">
                  <a href="/works/moogle/" class="ImgList__Link"><img src="/assets/images/past-and-future-sensor2.jpg" class="ImgList__LinkImage" alt="Past and Future.">
                  </a>
                </div>
              </div>
              <div class="SwiperButton">
                <div class="SwiperButton_Inner">
                  <div class="swiper-button-prev SwiperButton--L SwiperButtonArrow"></div>
                  <div class="swiper-button-next SwiperButton--R SwiperButtonArrow"></div>
                </div>
              </div>
            </div>
            <div class="ScrollDot swiper-pagination"></div>
          </div>

          <div class="TextContainer js-scrollfadein fadein">
            <div class="Introduce">
              <h2 class="SectionTitleSub">Past and Future.</h2>
              <p class="Introduce__Description">ゼミの後輩による作品のネットワーク制御を担当しました。<span class="TextBr">体験者の心拍数を時計の秒針の動きに反映して動作します。</p>
            </div>
            <div class="TextButton TextButton--Small">
              <a href="/works/past-and-future/" class="Button Button--Small">
                <span class="Button__Inner">もっとみる</span>
              </a>
            </div>
          </div>

        </div>
      </section>
  
```


### その他メモ
- ``data-micromodal-trigger="modal-1 id= "modal-1"``は、Micromodal.js を発火させるため、れんしゅうセクションのサムネイルとれんしゅうセクションの各ポップアップ内容を表示する場所と関係性の紐づけに使用している

れんしゅう セクションのサムネイルと、クリックした際のモーダルの紐づけは「modal-1」で、コンテンツをクリックしたときのモーダルの表示条件を紐づけている。（モーダルの中でスワイパーが動作している。れんしゅうセクションのコンテンツをクリックしたときに開くモーダル１つのことを、「modal-1」と考えるので、れんしゅうセクションのコンテンツの数によって「modal-」の数字が増えるわけではない。（どこか別の場所で別なモーダルを作る場合、「modal-2」という別のモーダルとして作ってもいいかも））

- メインビジュアルの画像サイズは**1600 * 1067** なので、下層ページを追加する場合は、Figma で画像をリサイズする必要あり
- つくったもの下層ページ、番号リストの使い方


```html
            <div class="WorkIntroduce__ComponentItem WorkIntroduce__ComponentText">
              <ol class="WorkIntroduce__ComponentTextInnerNumber">
                <li class="WorkIntroduce__ComponentTextInnerNumberList">パルスセンサーに人差し指を置く</li>
                <li class="WorkIntroduce__ComponentTextInnerNumberList">心拍の感知に合わせすべての時計が秒針を刻みながら、6 秒かけて心拍の平均を測定</li>
                <li class="WorkIntroduce__ComponentTextInnerNumberList">測定した平均心拍数に合わせ、すべての時計が同じ速さで秒針を刻み、その間頭上に吊り下がっている電球も秒針の動きに合わせて明滅する</li>
                <li class="WorkIntroduce__ComponentTextInnerNumberList">秒針を刻み終えると、電球が強く発光</li>
                <li class="WorkIntroduce__ComponentTextInnerNumberList">電球が光り終えると、測定前と同じようにすべての時計がバラバラの速さで秒針を刻みはじめる</li>
              </ol>
            </div>
```
(``WorkIntroduce__ComponentText``の中に、``WorkIntroduce__ComponentTextInnerNumber``と``WorkIntroduce__ComponentTextInnerNumberList``を追加する)

- つくったもの下層ページ、複数カラムの使い方
  
```html
            <div class="WorkIntroduce__ComponentItem--Column">
              <div class="WorkIntroduce__ComponentItem WorkIntroduce__ComponentImg">
                <p class="WorkIntroduce__ComponentImgInner"><img src="/assets/images/okazaki-mv-1.jpg" alt="スイッチ あそび展フライヤー表" class="WorkIntroduce__ComponentImgInnerImage"></p>
              </div>
              <div class="WorkIntroduce__ComponentItem WorkIntroduce__ComponentImg">
                <p class="WorkIntroduce__ComponentImgInner"><img src="/assets/images/okazaki-mv-2.jpg" alt="スイッチ あそび展フライヤー裏" class="WorkIntroduce__ComponentImgInnerImage"></p>
              </div>
            </div>
```
（``WorkIntroduce__ComponentItem--Column``の中に、``WorkIntroduce__ComponentItem ``（画像・テキストなどのコンポーネント）を入れる）