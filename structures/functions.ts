export default class Functions {
  /** Promise SetTimeout */
  public static timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  /** Gets the browser a user is using */
  public static getBrowser = () => {
    // @ts-ignore Not in types
    const Opera = (!!window["opr"] && !!opr.addons) || !!window["opera"] || navigator.userAgent.indexOf(" OPR/") >= 0
    // @ts-ignore Not in types
    const Firefox = typeof InstallTrigger !== "undefined"
    // @ts-ignore Not in types
    const Safari = /constructor/i.test(window.HTMLElement as unknown as string) || (function (p) {return p.toString() === "[object SafariRemoteNotification]" })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification))
    const IE = false || !!document["documentMode"]
    const Edge = !IE && !!window.StyleMedia
    const Chrome = /Chrome/i.test(navigator.userAgent) && /Google Inc/i.test(navigator.vendor)
    return {Opera, Firefox, Safari, IE, Edge, Chrome}
  }

  /** Prevent image dragging */
  public static preventDragging = () => {
    document.querySelectorAll("img").forEach((img) => {
      img.draggable = false
    })
  }
}