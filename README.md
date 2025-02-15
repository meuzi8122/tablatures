## ローカル実行

- npm ci
- npm run dev

## 実装メモ

### パスパラメータの取得方法(Next15・Dynamic Routing)

- props.paramsから取得

```
type Props = {
    params: Promise<{...}>;
};

export default function Page({ params }: Props) {
    const { ... } = await params;
}
```

### クエリパラメータの取得方法(Next15)

- props.searchParamsから取得

```
type Props = {
    searchParams: Promise<{...}>;
};

export default function Page({ searchParams }: Props) {
    const { ... } = await searchParams;
}
```

## その他

- git-pushでパスワード入力を求められたら、パスワードではなくアクセストークンを入力する。
- MicroCMS APIで他コンテンツ参照のあるコンテンツを取得する場合、他コンテンツのIDのみ絞り込みが可能
    - 参考: https://help.microcms.io/ja/knowledge/contents-relation-search
