
export type HistoryHookStatus = 'LOCAL_ONLY' | 'REMOTE_ONLY' | 'ALL'

export type HistoryHookArgs = [
  (() => Promise<any[]>)?,
  boolean?
]
