// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/shuto/Desktop/Goalist/prac/play-project/conf/routes
// @DATE:Fri Jun 08 14:05:22 JST 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
