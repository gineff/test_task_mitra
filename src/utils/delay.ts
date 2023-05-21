export default (time: number, callback?: () => void) =>
  new Promise<void>(res => {
    callback?.()
    setTimeout(res, time)
  })
