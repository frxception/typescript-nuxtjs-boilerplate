import Env from '@/common/env/'

/**
 * BFF（バックエンドフォーフロントエンド）用の URL を作成する
 * @param path
 */
const getBffUrl = (path: string): string => {
  let url: string
  if (process.server) {
    url = [Env.internalEndpointUrl, path].join('')
  } else {
    url = [Env.externalEndpointUrl, path].join('')
  }
  return url
}

/** API のエンドポイント */
export const API_ENDPOINT = {
  /** ログイン状態チェック */
  LOGIN_CHECK: getBffUrl('/login-check'),
  /** ログイン */
  LOGIN: getBffUrl('/login'),
  /** ログアウト */
  LOGOUT: getBffUrl('/logout')
}

/** アクセストークンヘッダ名 - API サーバーとのログインセッション用のトークン名 */
export const ACCESS_TOKEN_NAME = 'access-token'

/** HTTP ステータス */
export const HTTP_STATUS = {
  /** OK */
  OK: 200,
  /** 認証が必要である */
  UNAUTHORIZED: 401
}
